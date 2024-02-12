<script>
  import { classNames } from '../shared/utils.js';
  import { restProps } from '../shared/rest-props.js';

  let className = undefined;
  export { className as class };

  export let t4Slot = 'fixed';

  $: classes = classNames(className, 'fab-backdrop');
</script>

<div class={classes} data-t4-slot={t4Slot} {...restProps($$restProps)} />
