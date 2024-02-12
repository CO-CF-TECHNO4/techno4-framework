import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { useIsomorphicLayoutEffect } from '../shared/use-isomorphic-layout-effect.js';
import { classNames, getExtraAttrs, emit, getSlots, noUndefinedProps } from '../shared/utils.js';
import { colorClasses } from '../shared/mixins.js';
import Link from './link.js';
import Input from './input.js';
import { t4ready, t4 } from '../shared/t4.js';
import { watchProp } from '../shared/watch-prop.js';

/* dts-imports
import { Messagebar } from 'techno4/types';
*/
/* dts-props
  id?: string | number;
  className?: string;
  style?: React.CSSProperties;
  sheetVisible? : boolean
  attachmentsVisible? : boolean
  top? : boolean
  resizable? : boolean
  bottomOffset? : number
  topOffset? : number
  maxHeight? : number
  resizePage? : boolean
  sendLink? : string
  value? : string | number | Array<any>
  disabled? : boolean
  readonly? : boolean
  textareaId? : number | string
  name? : string
  placeholder? : string
  init? : boolean
  COLOR_PROPS
  onChange? : (event?: any) => void
  onInput? : (event?: any) => void
  onFocus? : (event?: any) => void
  onBlur? : (event?: any) => void
  onSubmit? : (value?: any, clear?: any) => void
  onSend? : (value?: any, clear?: any) => void
  onClick? : (event?: any) => void
  onMessagebarAttachmentDelete? : (instance?: Messagebar.Messagebar, attachmentEl?: HTMLElement, attachmentElIndex?: number) => void
  onMessagebarAttachmentClick? : (instance?: Messagebar.Messagebar, attachmentEl?: HTMLElement, attachmentElIndex?: number) => void
  onMessagebarResizePage? : (instance?: Messagebar.Messagebar) => void
  ref?: React.MutableRefObject<{el: HTMLElement | null; t4Messagebar: () => Messagebar.Messagebar}>;
  children?: React.ReactNode;
*/

const Messagebar = forwardRef((props, ref) => {
  const t4Messagebar = useRef(null);
  const updateSheetVisible = useRef(false);
  const updateAttachmentsVisible = useRef(false);
  const {
    className,
    id,
    style,
    sheetVisible,
    attachmentsVisible,
    top,
    resizable = true,
    bottomOffset = 0,
    topOffset = 0,
    maxHeight,
    resizePage = true,
    sendLink,
    value,
    disabled,
    readonly,
    textareaId,
    name,
    placeholder = 'Message',
    init = true,
  } = props;
  const extraAttrs = getExtraAttrs(props);

  const elRef = useRef(null);
  const areaElRef = useRef(null);

  const onChange = (event) => {
    emit(props, 'change', event);
  };
  const onInput = (event) => {
    emit(props, 'input', event);
  };
  const onFocus = (event) => {
    emit(props, 'focus', event);
  };
  const onBlur = (event) => {
    emit(props, 'blur', event);
  };
  const onClick = (event) => {
    const inputValue = areaElRef.current.el.value;

    const clear = t4Messagebar.current
      ? () => {
          t4Messagebar.current.clear();
        }
      : () => {};
    emit(props, 'submit', inputValue, clear);
    emit(props, 'send', inputValue, clear);
    emit(props, 'click', event);
  };
  const onAttachmentDelete = (instance, attachmentEl, attachmentElIndex) => {
    emit(props, 'messagebarAttachmentDelete', instance, attachmentEl, attachmentElIndex);
  };
  const onAttachmentClick = (instance, attachmentEl, attachmentElIndex) => {
    emit(props, 'messagebarAttachmentClick', instance, attachmentEl, attachmentElIndex);
  };
  const onResizePage = (instance) => {
    emit(props, 'messagebarResizePage', instance);
  };

  useImperativeHandle(ref, () => ({
    el: elRef.current,
    t4Messagebar: () => t4Messagebar.current,
  }));

  watchProp(sheetVisible, () => {
    if (!resizable || !t4Messagebar.current) return;
    updateSheetVisible.current = true;
  });
  watchProp(attachmentsVisible, () => {
    if (!resizable || !t4Messagebar.current) return;
    updateAttachmentsVisible.current = true;
  });

  useIsomorphicLayoutEffect(() => {
    if (!t4Messagebar.current) return;
    if (updateSheetVisible.current) {
      updateSheetVisible.current = false;
      t4Messagebar.current.sheetVisible = sheetVisible;
      t4Messagebar.current.resizePage();
    }
    if (updateAttachmentsVisible.current) {
      updateAttachmentsVisible.current = false;
      t4Messagebar.current.attachmentsVisible = attachmentsVisible;
      t4Messagebar.current.resizePage();
    }
  });

  const onMount = () => {
    if (!init) return;

    if (!elRef.current) return;

    const params = noUndefinedProps({
      el: elRef.current,
      top,
      resizePage,
      bottomOffset,
      topOffset,
      maxHeight,
      on: {
        attachmentDelete: onAttachmentDelete,
        attachmentClick: onAttachmentClick,
        resizePage: onResizePage,
      },
    });

    t4ready(() => {
      t4Messagebar.current = t4.messagebar.create(params);
    });
  };

  const onDestroy = () => {
    if (t4Messagebar.current && t4Messagebar.current.destroy) t4Messagebar.current.destroy();
    t4Messagebar.current = null;
  };

  useIsomorphicLayoutEffect(() => {
    onMount();
    return onDestroy;
  }, []);

  const slots = getSlots(props);

  const {
    default: slotsDefault,
    'before-inner': slotsBeforeInner,
    'after-inner': slotsAfterInner,
    'send-link': slotsSendLink,
    'inner-start': slotsInnerStart,
    'inner-end': slotsInnerEnd,
    'before-area': slotsBeforeArea,
    'after-area': slotsAfterArea,
  } = slots;

  const innerEndEls = [];

  let messagebarAttachmentsEl;
  let messagebarSheetEl;

  if (slotsDefault) {
    slotsDefault.forEach((child) => {
      if (typeof child === 'undefined') return;
      const tag = child.type && (child.type.displayName || child.type.name);

      if (
        tag &&
        (tag.indexOf('messagebar-attachments') >= 0 ||
          tag === 't4MessagebarAttachments' ||
          tag === 't4-messagebar-attachments')
      ) {
        messagebarAttachmentsEl = child;
      } else if (
        tag &&
        (tag.indexOf('messagebar-sheet') >= 0 ||
          tag === 't4MessagebarSheet' ||
          tag === 't4-messagebar-sheet')
      ) {
        messagebarSheetEl = child;
      } else {
        innerEndEls.push(child);
      }
    });
  }

  const valueProps = {};
  if ('value' in props) valueProps.value = value;

  const classes = classNames(
    className,
    'toolbar',
    'messagebar',
    {
      'messagebar-attachments-visible': attachmentsVisible,
      'messagebar-sheet-visible': sheetVisible,
    },
    colorClasses(props),
  );

  return (
    <div id={id} style={style} className={classes} ref={elRef} {...extraAttrs}>
      {slotsBeforeInner}
      <div className="toolbar-inner">
        {slotsInnerStart}
        <div className="messagebar-area">
          {slotsBeforeArea}
          {messagebarAttachmentsEl}
          <Input
            id={textareaId}
            ref={areaElRef}
            type="textarea"
            wrap={false}
            placeholder={placeholder}
            disabled={disabled}
            name={name}
            readonly={readonly}
            resizable={resizable}
            onInput={onInput}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            {...valueProps}
          />
          {slotsAfterArea}
        </div>
        {((sendLink && sendLink.length > 0) || slotsSendLink) && (
          <Link onClick={onClick}>{slotsSendLink || sendLink}</Link>
        )}
        {slotsInnerEnd}
        {innerEndEls}
      </div>
      {slotsAfterInner}
      {messagebarSheetEl}
    </div>
  );
});

Messagebar.displayName = 't4-messagebar';

export default Messagebar;
