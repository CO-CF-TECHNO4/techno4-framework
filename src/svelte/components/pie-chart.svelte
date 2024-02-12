<script>
  import { createEventDispatcher, onDestroy } from 'svelte';
  import { classNames, createEmitter } from '../shared/utils.js';
  import { restProps } from '../shared/rest-props.js';
  import { app } from '../shared/t4.js';

  const emit = createEmitter(createEventDispatcher, $$props);

  let className = undefined;
  export { className as class };

  export let size = 320;
  export let tooltip = false;
  export let datasets = [];
  export let formatTooltip = undefined;

  let el;
  let currentIndex = null;
  let previousIndex = null;
  let t4Tooltip = null;
  let timeout = null;

  const setCurrentIndex = (index) => {
    if (index === null) {
      timeout = setTimeout(() => {
        previousIndex = currentIndex;
        currentIndex = index;
      });
    } else {
      clearTimeout(timeout);
      previousIndex = currentIndex;
      currentIndex = index;
    }
  };

  const getSummValue = () => {
    let summ = 0;
    datasets
      .map((d) => d.value || 0)
      .forEach((value) => {
        summ += value;
      });
    return summ;
  };

  const getPaths = () => {
    const paths = [];

    let cumulativePercentage = 0;

    function getCoordinatesForPercentage(percentage) {
      const x = Math.cos(2 * Math.PI * percentage) * (size / 3);
      const y = Math.sin(2 * Math.PI * percentage) * (size / 3);
      return [x, y];
    }

    datasets.forEach(({ value, label, color }) => {
      const percentage = value / getSummValue();

      const [startX, startY] = getCoordinatesForPercentage(cumulativePercentage);
      cumulativePercentage += percentage;
      const [endX, endY] = getCoordinatesForPercentage(cumulativePercentage);
      const largeArcFlag = percentage > 0.5 ? 1 : 0;
      const points = [
        `M ${startX} ${startY}`, // Move
        `A ${size / 3} ${size / 3} 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
        'L 0 0', // Line
      ].join(' ');

      paths.push({
        points,
        label,
        color,
      });
    });
    return paths;
  };

  const formatTooltipText = () => {
    if (currentIndex === null) return '';
    const { value, label, color } = datasets[currentIndex];
    const percentage = (value / getSummValue()) * 100;

    const round = (v) => {
      if (parseInt(v, 10) === v) return v;
      return Math.round(v * 100) / 100;
    };

    if (formatTooltip) {
      return formatTooltip({
        index: currentIndex,
        value,
        label,
        color,
        percentage,
      });
    }

    const tooltipText = `${label ? `${label}: ` : ''}${round(value)} (${round(percentage)}%)`;

    return `
      <div class="pie-chart-tooltip-label">
        <span class="pie-chart-tooltip-color" style="background-color: ${color};"></span> ${tooltipText}
      </div>
    `;
  };

  const setTooltip = () => {
    if (currentIndex === null && !t4Tooltip) return;
    if (!tooltip || !el || !app.t4) return;
    if (currentIndex !== null && !t4Tooltip) {
      t4Tooltip = app.t4.tooltip.create({
        trigger: 'manual',
        containerEl: el,
        targetEl: el.querySelector(`path[data-index="${currentIndex}"]`),
        text: formatTooltipText(),
        cssClass: 'pie-chart-tooltip',
      });
      t4Tooltip.show();
      return;
    }
    if (!t4Tooltip) return;
    if (currentIndex !== null) {
      t4Tooltip.setText(formatTooltipText());
      t4Tooltip.setTargetEl(el.querySelector(`path[data-index="${currentIndex}"]`));

      t4Tooltip.show();
    } else {
      t4Tooltip.hide();
    }
  };

  const watchCurrentIndex = () => {
    if (currentIndex === previousIndex) return;
    emit('select', [currentIndex, datasets[currentIndex]]);
    setTooltip();
  };

  $: classes = classNames('pie-chart', className);
  $: paths = getPaths(datasets);

  $: watchCurrentIndex(currentIndex);

  onDestroy(() => {
    if (t4Tooltip && t4Tooltip.destroy) {
      t4Tooltip.destroy();
    }
    t4Tooltip = null;
  });
</script>

<div bind:this={el} class={classes} {...restProps($$restProps)}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox={`-${size / 3} -${size / 3} ${(size * 2) / 3} ${(size * 2) / 3}`}
    style="transform: rotate(-90deg)"
  >
    {#each paths as path, index (index)}
      <path
        d={path.points}
        fill={path.color}
        data-index={index}
        class={classNames({ 'pie-chart-hidden': currentIndex !== null && currentIndex !== index })}
        on:click={() => setCurrentIndex(index)}
        on:mouseenter={() => setCurrentIndex(index)}
        on:mouseleave={() => setCurrentIndex(null)}
      />
    {/each}
  </svg>
  <slot />
</div>
