import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { useIsomorphicLayoutEffect } from '../shared/use-isomorphic-layout-effect.js';
import { classNames, getExtraAttrs, emit } from '../shared/utils.js';
import { colorClasses } from '../shared/mixins.js';
import { t4ready, t4 } from '../shared/t4.js';
import { watchProp } from '../shared/watch-prop.js';

/* dts-props
  id?: string | number;
  className?: string;
  style?: React.CSSProperties;
  init? : boolean
  listEl? : string | object
  indexes? : string | Array<any>
  scrollList? : boolean
  label? : boolean
  iosItemHeight? : number
  mdItemHeight? : number
  auroraItemHeight? : number
  COLOR_PROPS
  onListIndexSelect? : (itemContent?: any, itemIndex?: any) => void
  ref?: React.MutableRefObject<{el: HTMLElement | null}>;
  children?: React.ReactNode;
*/

const ListIndex = forwardRef((props, ref) => {
  const t4ListIndex = useRef(null);
  const {
    className,
    id,
    style,
    children,
    init = true,
    listEl,
    indexes = 'auto',
    scrollList = true,
    label = false,
    iosItemHeight = 14,
    mdItemHeight = 14,
    auroraItemHeight = 14,
  } = props;
  const extraAttrs = getExtraAttrs(props);

  const elRef = useRef(null);

  const update = () => {
    if (!t4ListIndex.current) return;
    t4ListIndex.current.update();
  };
  const scrollListToIndex = (indexContent) => {
    if (!t4ListIndex.current) return;
    t4ListIndex.current.scrollListToIndex(indexContent);
  };

  useImperativeHandle(ref, () => ({
    el: elRef.current,
    t4ListIndex: () => t4ListIndex.current,
    update,
    scrollListToIndex,
  }));

  watchProp(indexes, (newValue) => {
    if (!t4ListIndex.current) return;
    t4ListIndex.current.params.indexes = newValue;
    update();
  });

  const onMount = () => {
    if (!init) return;
    t4ready(() => {
      t4ListIndex.current = t4.listIndex.create({
        el: elRef.current,
        listEl,
        indexes,
        iosItemHeight,
        mdItemHeight,
        auroraItemHeight,
        scrollList,
        label,
        on: {
          select(index, itemContent, itemIndex) {
            emit(props, 'listIndexSelect', itemContent, itemIndex);
          },
        },
      });
    });
  };

  const onDestroy = () => {
    if (t4ListIndex.current && t4ListIndex.current.destroy) {
      t4ListIndex.current.destroy();
    }
    t4ListIndex.current = null;
  };

  useIsomorphicLayoutEffect(() => {
    onMount();
    return onDestroy;
  }, []);

  const classes = classNames(className, 'list-index', colorClasses(props));

  return (
    <div id={id} style={style} className={classes} ref={elRef} {...extraAttrs}>
      {children}
    </div>
  );
});

ListIndex.displayName = 't4-list-index';

export default ListIndex;
