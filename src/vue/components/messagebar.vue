<script>
import { h, computed, ref, onMounted, onBeforeUnmount, watch, onUpdated } from 'vue';
import { classNames, noUndefinedProps } from '../shared/utils.js';
import { colorClasses, colorProps } from '../shared/mixins.js';
import { t4ready, t4 } from '../shared/t4.js';

import Link from './link.js';
import Input from './input.js';

export default {
  name: 't4-messagebar',
  props: {
    sheetVisible: Boolean,
    attachmentsVisible: Boolean,
    top: Boolean,
    resizable: {
      type: Boolean,
      default: true,
    },
    bottomOffset: {
      type: Number,
      default: 0,
    },
    topOffset: {
      type: Number,
      default: 0,
    },
    maxHeight: Number,
    resizePage: {
      type: Boolean,
      default: true,
    },
    sendLink: String,
    value: [String, Number, Array],
    disabled: Boolean,
    readonly: Boolean,
    textareaId: [Number, String],
    name: String,
    placeholder: {
      type: String,
      default: 'Message',
    },
    init: {
      type: Boolean,
      default: true,
    },
    ...colorProps,
  },
  emits: [
    'change',
    'input',
    'focus',
    'blur',
    'submit',
    'send',
    'click',
    'messagebar:attachmentdelete',
    'messagebar:attachmentclick',
    'messagebar:resizepage',
    'update:value',
  ],
  setup(props, { emit, slots }) {
    const elRef = ref(null);
    const areaElRef = ref(null);
    let t4Messagebar = null;
    let updateSheetVisible = false;
    let updateAttachmentsVisible = false;

    const onChange = (event) => {
      emit('change', event);
    };
    const onInput = (event) => {
      emit('input', event);
      emit('update:value', event.target.value);
    };
    const onFocus = (event) => {
      emit('focus', event);
    };
    const onBlur = (event) => {
      emit('blur', event);
    };
    const onClick = (event) => {
      const inputValue = areaElRef.value.$el;

      const clear = t4Messagebar
        ? () => {
            t4Messagebar.clear();
          }
        : () => {};
      emit('submit', inputValue, clear);
      emit('send', inputValue, clear);
      emit('click', event);
    };
    const onAttachmentDelete = (instance, attachmentEl, attachmentElIndex) => {
      emit('messagebar:attachmentdelete', instance, attachmentEl, attachmentElIndex);
    };
    const onAttachmentClick = (instance, attachmentEl, attachmentElIndex) => {
      emit('messagebar:attachmentclick', instance, attachmentEl, attachmentElIndex);
    };
    const onResizePage = (instance) => {
      emit('messagebar:resizepage', instance);
    };

    watch(
      () => props.sheetVisible,
      () => {
        if (!props.resizable || !t4Messagebar) return;
        updateSheetVisible = true;
      },
    );
    watch(
      () => props.attachmentsVisible,
      () => {
        if (!props.resizable || !t4Messagebar) return;
        updateAttachmentsVisible = true;
      },
    );

    onMounted(() => {
      if (!props.init) return;

      if (!elRef.value) return;

      const params = noUndefinedProps({
        el: elRef.value,
        top: props.top,
        resizePage: props.resizePage,
        bottomOffset: props.bottomOffset,
        topOffset: props.topOffset,
        maxHeight: props.maxHeight,
        on: {
          attachmentDelete: onAttachmentDelete,
          attachmentClick: onAttachmentClick,
          resizePage: onResizePage,
        },
      });

      t4ready(() => {
        t4Messagebar = t4.messagebar.create(params);
      });
    });

    onUpdated(() => {
      if (!t4Messagebar) return;
      if (updateSheetVisible) {
        updateSheetVisible = false;
        t4Messagebar.sheetVisible = props.sheetVisible;
        t4Messagebar.resizePage();
      }
      if (updateAttachmentsVisible) {
        updateAttachmentsVisible = false;
        t4Messagebar.attachmentsVisible = props.attachmentsVisible;
        t4Messagebar.resizePage();
      }
    });

    onBeforeUnmount(() => {
      if (t4Messagebar && t4Messagebar.destroy) t4Messagebar.destroy();
      t4Messagebar = null;
    });

    const classes = computed(() =>
      classNames(
        'toolbar',
        'messagebar',
        {
          'messagebar-attachments-visible': props.attachmentsVisible,
          'messagebar-sheet-visible': props.sheetVisible,
        },
        colorClasses(props),
      ),
    );
    return () => {
      const valueProps = {};
      if ('value' in props) valueProps.value = props.value;

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
        slotsDefault().forEach((vnode) => {
          if (typeof vnode === 'undefined') return;
          const tag = vnode.type && vnode.type.name ? vnode.type.name : vnode.type;

          if (
            tag &&
            (tag.indexOf('messagebar-attachments') >= 0 ||
              tag === 't4MessagebarAttachments' ||
              tag === 't4-messagebar-attachments')
          ) {
            messagebarAttachmentsEl = vnode;
          } else if (
            tag &&
            (tag.indexOf('messagebar-sheet') >= 0 ||
              tag === 't4MessagebarSheet' ||
              tag === 't4-messagebar-sheet')
          ) {
            messagebarSheetEl = vnode;
          } else {
            innerEndEls.push(vnode);
          }
        });
      }

      return h('div', { class: classes.value, ref: elRef }, [
        slotsBeforeInner && slotsBeforeInner(),
        h('div', { class: 'toolbar-inner' }, [
          slotsInnerStart && slotsInnerStart(),
          h('div', { class: 'messagebar-area' }, [
            slotsBeforeArea && slotsBeforeArea(),
            messagebarAttachmentsEl,
            h(Input, {
              id: props.textareaId,
              ref: areaElRef,
              type: 'textarea',
              wrap: false,
              placeholder: props.placeholder,
              disabled: props.disabled,
              name: props.name,
              readonly: props.readonly,
              resizable: props.resizable,
              onInput,
              onChange,
              onFocus,
              onBlur,
              ...valueProps,
            }),
            slotsAfterArea && slotsAfterArea(),
          ]),
          ((props.sendLink && props.sendLink.length > 0) || slotsSendLink) &&
            h(Link, { onClick }, [slotsSendLink ? slotsSendLink() : props.sendLink]),
          slotsInnerEnd && slotsInnerEnd(),
          innerEndEls,
        ]),
        slotsAfterInner && slotsAfterInner(),
        messagebarSheetEl,
      ]);
    };
  },
};
</script>
