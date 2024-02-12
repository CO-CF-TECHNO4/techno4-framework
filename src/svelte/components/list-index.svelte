<script>
  import { createEventDispatcher, onMount, onDestroy } from 'svelte';
  import { colorClasses } from '../shared/mixins.js';
  import { classNames, createEmitter } from '../shared/utils.js';
  import { restProps } from '../shared/rest-props.js';
  import { app, t4ready } from '../shared/t4.js';

  const emit = createEmitter(createEventDispatcher, $$props);

  let className = undefined;
  export { className as class };

  export let init = true;
  export let listEl = undefined;
  export let indexes = 'auto';
  export let scrollList = true;
  export let label = false;
  export let iosItemHeight = 14;
  export let mdItemHeight = 14;
  export let auroraItemHeight = 14;

  export let t4Slot = 'fixed';

  let el;
  let t4ListIndex;

  export function instance() {
    return t4ListIndex;
  }

  $: classes = classNames(className, 'list-index', colorClasses($$props));

  export function update() {
    if (!t4ListIndex) return;
    t4ListIndex.update();
  }

  export function scrollListToIndex(indexContent) {
    if (!t4ListIndex) return;
    t4ListIndex.scrollListToIndex(indexContent);
  }

  let initialWatched = false;
  function watchIndexes() {
    if (!initialWatched) {
      initialWatched = true;
      return;
    }
    if (!t4ListIndex) return;
    t4ListIndex.params.indexes = indexes;
    update();
  }

  $: watchIndexes(indexes);

  onMount(() => {
    if (!init || !el) return;
    t4ready(() => {
      t4ListIndex = app.t4.listIndex.create({
        el,
        listEl,
        indexes,
        iosItemHeight,
        mdItemHeight,
        auroraItemHeight,
        scrollList,
        label,
        on: {
          select(index, itemContent, itemIndex) {
            emit('listIndexSelect', [itemContent, itemIndex]);
          },
        },
      });
    });
  });

  onDestroy(() => {
    if (t4ListIndex && t4ListIndex.destroy) t4ListIndex.destroy();
  });
</script>

<div bind:this={el} class={classes} data-t4-slot={t4Slot} {...restProps($$restProps)}>
  <slot listIndex={t4ListIndex} />
</div>
