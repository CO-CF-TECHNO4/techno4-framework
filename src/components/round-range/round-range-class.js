import $ from '../../shared/dom64.js';
import { extend, deleteProps } from '../../shared/utils.js';
import Techno4Class from '../../shared/class.js';

class RoundRange extends Techno4Class {
  constructor(app, params = {}) {
    super(params, [app]);

    const range = this;

    const defaults = {
      el: null,
      mode: '0+', // '0+', '-0+', '-0'
      min: null,
      max: null,
      step: 1,
      value: null,
      defaultValue: null,
      snap: false,
      snapValues: [0],
      snapThreshold: null, // auto calculated as 4% of span
      size: 88,
      strokeWidth: 6,
      trackColor: 'rgba(255, 255, 255, 0.12)',
      progressColor: null, // uses theme primary or cyber cyan
      label: true,
      title: '',
      unit: '',
      formatValue: null,
      dragMode: 'vertical', // 'vertical' (DAW standard) or 'radial'
      sensitivity: 150, // px of vertical drag for full min->max range
      disabled: false,
    };

    range.useModulesParams(defaults);
    range.params = extend(defaults, params);

    const el = range.params.el;
    if (!el) return range;

    const $el = $(el);
    if ($el.length === 0) return range;

    if ($el[0].f7RoundRange) return $el[0].f7RoundRange;

    // Read dataset attributes
    const dataset = $el.dataset ? $el.dataset() : ($el[0] && $el[0].dataset ? $el[0].dataset : {});
    if (typeof dataset.mode !== 'undefined') {
      const modeStr = String(dataset.mode);
      if (modeStr === '-0' || modeStr === '0' || modeStr === '-0+') {
        range.params.mode = modeStr === '0' ? '-0' : modeStr;
      } else {
        range.params.mode = modeStr;
      }
    }
    if (typeof dataset.min !== 'undefined') range.params.min = parseFloat(dataset.min);
    if (typeof dataset.max !== 'undefined') range.params.max = parseFloat(dataset.max);
    if (typeof dataset.step !== 'undefined') range.params.step = parseFloat(dataset.step);
    if (typeof dataset.value !== 'undefined') range.params.value = parseFloat(dataset.value);
    if (typeof dataset.defaultValue !== 'undefined') range.params.defaultValue = parseFloat(dataset.defaultValue);
    if (typeof dataset.snap !== 'undefined') range.params.snap = dataset.snap === true || dataset.snap === 'true';
    if (dataset.snapValues) {
      try {
        range.params.snapValues = typeof dataset.snapValues === 'string' ? JSON.parse(dataset.snapValues) : dataset.snapValues;
      } catch (err) {
        range.params.snapValues = String(dataset.snapValues).split(',').map((v) => parseFloat(v.trim()));
      }
    }
    if (typeof dataset.snapThreshold !== 'undefined') range.params.snapThreshold = parseFloat(dataset.snapThreshold);
    if (typeof dataset.size !== 'undefined') range.params.size = parseFloat(dataset.size);
    if (typeof dataset.strokeWidth !== 'undefined') range.params.strokeWidth = parseFloat(dataset.strokeWidth);
    if (dataset.title) range.params.title = dataset.title;
    if (dataset.unit) range.params.unit = dataset.unit;
    if (typeof dataset.label !== 'undefined') range.params.label = dataset.label === true || dataset.label === 'true';
    if (dataset.dragMode) range.params.dragMode = dataset.dragMode;

    // Resolve Min / Max / DefaultValue based on mode if not specified
    let { mode } = range.params;
    if (range.params.min !== null && range.params.max !== null) {
      // Auto-detect mode if min/max explicitly set without mode override
      if (!dataset.mode && !params.mode) {
        if (range.params.min < 0 && range.params.max > 0) mode = '-0+';
        else if (range.params.max <= 0) mode = '-0';
        else mode = '0+';
        range.params.mode = mode;
      }
    }
    if (range.params.min === null || typeof range.params.min === 'undefined') {
      if (mode === '-0+') range.params.min = -100;
      else if (mode === '-0') range.params.min = -100;
      else range.params.min = 0;
    }
    if (range.params.max === null || typeof range.params.max === 'undefined') {
      if (mode === '-0') range.params.max = 0;
      else range.params.max = 100;
    }

    if (range.params.defaultValue === null || typeof range.params.defaultValue === 'undefined') {
      if (mode === '-0+') range.params.defaultValue = 0;
      else if (mode === '-0') range.params.defaultValue = 0;
      else range.params.defaultValue = range.params.min;
    }

    if (range.params.value === null || typeof range.params.value === 'undefined') {
      range.params.value = range.params.defaultValue;
    }

    // Auto snap values if snap is true and no snapValues
    if (range.params.snap && (!range.params.snapValues || !range.params.snapValues.length)) {
      range.params.snapValues = [0];
    }

    // Auto calculate snap threshold if null
    const span = range.params.max - range.params.min;
    if (range.params.snapThreshold === null || typeof range.params.snapThreshold === 'undefined') {
      range.params.snapThreshold = Math.max(range.params.step, span * 0.04);
    }

    extend(range, {
      app,
      $el,
      el: $el[0],
      mode: range.params.mode,
      min: range.params.min,
      max: range.params.max,
      step: range.params.step,
      value: range.params.value,
      defaultValue: range.params.defaultValue,
      snap: range.params.snap,
      snapValues: range.params.snapValues,
      snapThreshold: range.params.snapThreshold,
      size: range.params.size,
      strokeWidth: range.params.strokeWidth,
      startAngle: -135,
      endAngle: 135,
      totalAngle: 270,
      isSnapped: false,
    });

    $el[0].f7RoundRange = range;

    range.init();

    return range;
  }

  // Convert value to rotation angle (-135° to +135°)
  valueToAngle(val) {
    const range = this;
    const clamped = Math.max(range.min, Math.min(range.max, val));
    const ratio = (clamped - range.min) / (range.max - range.min || 1);
    return range.startAngle + ratio * range.totalAngle;
  }

  // Convert angle to value
  angleToValue(angle) {
    const range = this;
    const clampedAngle = Math.max(range.startAngle, Math.min(range.endAngle, angle));
    const ratio = (clampedAngle - range.startAngle) / range.totalAngle;
    let rawVal = range.min + ratio * (range.max - range.min);
    return range.quantize(rawVal);
  }

  // Quantize according to step
  quantize(val) {
    const range = this;
    const step = range.step || 1;
    let stepped = Math.round((val - range.min) / step) * step + range.min;
    stepped = Math.max(range.min, Math.min(range.max, stepped));

    // Fix float precision (e.g. 0.1 + 0.2)
    const stepDecimals = (step.toString().split('.')[1] || '').length;
    return parseFloat(stepped.toFixed(stepDecimals));
  }

  // Apply snap logic
  checkSnap(val) {
    const range = this;
    if (!range.snap || !range.snapValues || !range.snapValues.length) {
      return { val, snapped: false };
    }

    let nearestSnap = null;
    let minDistance = Infinity;

    for (let i = 0; i < range.snapValues.length; i += 1) {
      const snapVal = range.snapValues[i];
      const dist = Math.abs(val - snapVal);
      if (dist <= range.snapThreshold && dist < minDistance) {
        minDistance = dist;
        nearestSnap = snapVal;
      }
    }

    if (nearestSnap !== null) {
      return { val: nearestSnap, snapped: true };
    }

    return { val, snapped: false };
  }

  // Polar to Cartesian for SVG coordinate system where 0° is 12 o'clock
  polarToCartesian(cx, cy, r, angleInDegrees) {
    const radians = (angleInDegrees * Math.PI) / 180.0;
    return {
      x: cx + r * Math.sin(radians),
      y: cy - r * Math.cos(radians),
    };
  }

  // Describe SVG arc path from startAngle to endAngle
  describeArc(cx, cy, r, startAngle, endAngle) {
    const range = this;
    const start = range.polarToCartesian(cx, cy, r, startAngle);
    const end = range.polarToCartesian(cx, cy, r, endAngle);
    const delta = endAngle - startAngle;
    const sweepFlag = delta >= 0 ? 1 : 0;
    const largeArcFlag = Math.abs(delta) > 180 ? 1 : 0;

    return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} ${sweepFlag} ${end.x} ${end.y}`;
  }

  renderSvgArc() {
    const range = this;
    const { size, strokeWidth, mode } = range;
    const cx = size / 2;
    const cy = size / 2;
    const r = (size - strokeWidth) / 2;

    const currentAngle = range.valueToAngle(range.value);
    const zeroAngle = range.valueToAngle(0);

    let progressPath = '';

    if (mode === '-0+') {
      // Center is 0 angle (12 o'clock)
      if (Math.abs(currentAngle - zeroAngle) > 0.5) {
        progressPath = range.describeArc(cx, cy, r, zeroAngle, currentAngle);
      }
    } else if (mode === '-0') {
      // Negative to 0: zero is at endAngle
      if (Math.abs(zeroAngle - currentAngle) > 0.5) {
        progressPath = range.describeArc(cx, cy, r, currentAngle, zeroAngle);
      }
    } else {
      // '0+': from startAngle to currentAngle
      if (Math.abs(currentAngle - range.startAngle) > 0.5) {
        progressPath = range.describeArc(cx, cy, r, range.startAngle, currentAngle);
      }
    }

    return progressPath;
  }

  formatDisplayValue(val) {
    const range = this;
    if (typeof range.params.formatValue === 'function') {
      return range.params.formatValue.call(range, val);
    }
    const unit = range.params.unit || '';
    if (range.mode === '-0+' && val > 0) {
      return `+${val}${unit}`;
    }
    return `${val}${unit}`;
  }

  render() {
    const range = this;
    const { size, strokeWidth, mode, title } = range;
    const cx = size / 2;
    const cy = size / 2;
    const r = (size - strokeWidth) / 2;

    const bgTrackPath = range.describeArc(cx, cy, r, range.startAngle, range.endAngle);
    const progressPath = range.renderSvgArc();
    const currentAngle = range.valueToAngle(range.value);
    const zeroAngle = range.valueToAngle(0);
    const zeroPoint = range.polarToCartesian(cx, cy, r, zeroAngle);

    // Ticks at snap points
    let ticksHtml = '';
    if (range.snap && range.snapValues) {
      range.snapValues.forEach((snapVal) => {
        if (snapVal >= range.min && snapVal <= range.max) {
          const tickAngle = range.valueToAngle(snapVal);
          const pOuter = range.polarToCartesian(cx, cy, r + strokeWidth * 0.6, tickAngle);
          const pInner = range.polarToCartesian(cx, cy, r - strokeWidth * 0.6, tickAngle);
          ticksHtml += `<line x1="${pInner.x}" y1="${pInner.y}" x2="${pOuter.x}" y2="${pOuter.y}" class="round-range-tick ${snapVal === 0 ? 'tick-zero' : ''}" />`;
        }
      });
    }

    return `
      <div class="round-range-container" style="width: ${size}px; height: ${size}px;">
        <svg class="round-range-svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
          <path class="round-range-track" d="${bgTrackPath}" stroke-width="${strokeWidth}" />
          ${ticksHtml}
          ${mode === '-0+' ? `<circle cx="${zeroPoint.x}" cy="${zeroPoint.y}" r="${strokeWidth * 0.4}" class="round-range-zero-mark" />` : ''}
          <path class="round-range-progress" d="${progressPath}" stroke-width="${strokeWidth}" />
        </svg>
        <div class="round-range-dial" style="transform: rotate(${currentAngle}deg);">
          <div class="round-range-pointer"></div>
        </div>
      </div>
      ${range.params.label ? `
        <div class="round-range-info">
          ${title ? `<div class="round-range-title">${title}</div>` : ''}
          <div class="round-range-value">${range.formatDisplayValue(range.value)}</div>
        </div>
      ` : ''}
    `.trim();
  }

  updateDom() {
    const range = this;
    const { size, strokeWidth } = range;
    const cx = size / 2;
    const cy = size / 2;
    const r = (size - strokeWidth) / 2;

    const currentAngle = range.valueToAngle(range.value);
    const progressPath = range.renderSvgArc();

    if (range.$progressEl && range.$progressEl.length) {
      range.$progressEl.attr('d', progressPath);
    }
    if (range.$dialEl && range.$dialEl.length) {
      range.$dialEl[0].style.transform = `rotate(${currentAngle}deg)`;
    }
    if (range.$valueEl && range.$valueEl.length) {
      range.$valueEl.text(range.formatDisplayValue(range.value));
    }

    if (range.isSnapped) {
      range.$el.addClass('round-range-snapped');
    } else {
      range.$el.removeClass('round-range-snapped');
    }
  }

  setValue(newVal, fireEvents = true) {
    const range = this;
    const quantized = range.quantize(newVal);
    const { val: snappedVal, snapped } = range.checkSnap(quantized);

    const prevValue = range.value;
    const wasSnapped = range.isSnapped;

    range.value = snappedVal;
    range.isSnapped = snapped;

    range.updateDom();

    if (fireEvents && prevValue !== range.value) {
      range.emit('roundRangeChange roundRange:change change', range, range.value);
      range.emit('roundRangeInput roundRange:input input', range, range.value);
      range.$el.trigger('roundrange:change', { value: range.value });
      range.$el.trigger('change');
    }

    if (fireEvents && snapped && !wasSnapped) {
      range.emit('roundRangeSnap roundRange:snap snap', range, range.value);
      range.$el.trigger('roundrange:snap', { value: range.value });
    }

    return range;
  }

  getValue() {
    return this.value;
  }

  reset(fireEvents = true) {
    const range = this;
    range.setValue(range.defaultValue, fireEvents);
    range.emit('roundRangeReset roundRange:reset reset', range, range.defaultValue);
    range.$el.trigger('roundrange:reset', { value: range.defaultValue });
    return range;
  }

  init() {
    const range = this;
    const { $el } = range;

    $el.addClass('round-range');
    $el.addClass(`round-range-mode-${range.mode.replace('+', 'p').replace('-', 'm')}`);
    $el.attr('tabindex', '0');
    $el.attr('role', 'slider');
    $el.attr('aria-valuemin', range.min);
    $el.attr('aria-valuemax', range.max);
    $el.attr('aria-valuenow', range.value);

    $el.html(range.render());

    range.$dialEl = $el.find('.round-range-dial');
    range.$progressEl = $el.find('.round-range-progress');
    range.$valueEl = $el.find('.round-range-value');

    // Attach interaction handlers
    let isDragging = false;
    let startY = 0;
    let startX = 0;
    let startVal = 0;
    let knobCenter = { x: 0, y: 0 };

    function getCoords(e) {
      if (e.touches && e.touches.length) {
        return { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
      return { x: e.clientX, y: e.clientY };
    }

    function onPointerDown(e) {
      if (range.params.disabled) return;
      if (e.button && e.button !== 0) return; // Left mouse button only

      isDragging = true;
      $el.addClass('round-range-active');

      const coords = getCoords(e);
      startY = coords.y;
      startX = coords.x;
      startVal = range.value;

      const rect = $el[0].getBoundingClientRect();
      knobCenter = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };

      if (e.type.startsWith('touch')) {
        document.addEventListener('touchmove', onPointerMove, { passive: false });
        document.addEventListener('touchend', onPointerUp);
        document.addEventListener('touchcancel', onPointerUp);
      } else {
        document.addEventListener('mousemove', onPointerMove);
        document.addEventListener('mouseup', onPointerUp);
      }

      e.preventDefault();
    }

    function onPointerMove(e) {
      if (!isDragging) return;

      const coords = getCoords(e);

      if (range.params.dragMode === 'radial') {
        // Radial drag based on angle from center
        const dx = coords.x - knobCenter.x;
        const dy = coords.y - knobCenter.y;
        let deg = (Math.atan2(dx, -dy) * 180) / Math.PI; // 0 at 12 o'clock, 90 at 3 o'clock

        if (deg < -180) deg += 360;
        if (deg > 180) deg -= 360;

        const newVal = range.angleToValue(deg);
        range.setValue(newVal, true);
      } else {
        // Vertical drag (DAW standard)
        const deltaY = startY - coords.y; // Up is positive
        const sensitivity = e.shiftKey ? range.params.sensitivity * 4 : range.params.sensitivity;
        const rangeSpan = range.max - range.min;
        const deltaVal = (deltaY / sensitivity) * rangeSpan;

        const targetVal = startVal + deltaVal;
        range.setValue(targetVal, true);
      }

      $el.attr('aria-valuenow', range.value);

      if (e.cancelable) e.preventDefault();
    }

    function onPointerUp() {
      if (!isDragging) return;
      isDragging = false;
      $el.removeClass('round-range-active');

      document.removeEventListener('mousemove', onPointerMove);
      document.removeEventListener('mouseup', onPointerUp);
      document.removeEventListener('touchmove', onPointerMove);
      document.removeEventListener('touchend', onPointerUp);
      document.removeEventListener('touchcancel', onPointerUp);
    }

    // Double-click to reset to defaultValue
    function onDblClick(e) {
      if (range.params.disabled) return;
      range.reset(true);
      e.preventDefault();
    }

    // Mouse wheel support
    function onWheel(e) {
      if (range.params.disabled) return;
      const direction = e.deltaY < 0 ? 1 : -1;
      const step = (e.shiftKey ? range.step * 5 : range.step) * direction;
      range.setValue(range.value + step, true);
      e.preventDefault();
    }

    // Keyboard support
    function onKeyDown(e) {
      if (range.params.disabled) return;
      let handled = false;
      const step = e.shiftKey ? range.step * 5 : range.step;

      if (e.key === 'ArrowUp' || e.key === 'ArrowRight') {
        range.setValue(range.value + step, true);
        handled = true;
      } else if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') {
        range.setValue(range.value - step, true);
        handled = true;
      } else if (e.key === 'Home') {
        range.setValue(range.min, true);
        handled = true;
      } else if (e.key === 'End') {
        range.setValue(range.max, true);
        handled = true;
      } else if (e.key === 'Enter' || e.key === 'Escape') {
        range.reset(true);
        handled = true;
      }

      if (handled) {
        $el.attr('aria-valuenow', range.value);
        e.preventDefault();
      }
    }

    $el.on('mousedown touchstart', onPointerDown);
    $el.on('dblclick', onDblClick);
    $el.on('wheel', onWheel);
    $el.on('keydown', onKeyDown);

    range.destroyHandlers = () => {
      $el.off('mousedown touchstart', onPointerDown);
      $el.off('dblclick', onDblClick);
      $el.off('wheel', onWheel);
      $el.off('keydown', onKeyDown);
      document.removeEventListener('mousemove', onPointerMove);
      document.removeEventListener('mouseup', onPointerUp);
      document.removeEventListener('touchmove', onPointerMove);
      document.removeEventListener('touchend', onPointerUp);
      document.removeEventListener('touchcancel', onPointerUp);
    };

    range.emit('roundRangeInit roundRange:init init', range);
  }

  destroy() {
    const range = this;
    range.emit('roundRangeBeforeDestroy roundRange:beforeDestroy beforeDestroy', range);

    if (range.destroyHandlers) {
      range.destroyHandlers();
    }

    if (range.$el && range.$el[0]) {
      delete range.$el[0].f7RoundRange;
    }

    deleteProps(range);
  }
}

export default RoundRange;
