<script>
  import { colorClasses } from '../shared/mixins.js';
  import { classNames } from '../shared/utils.js';
  import { restProps } from '../shared/rest-props.js';
  import { app } from '../shared/t4.js';

  let className = undefined;
  export { className as class };

  export let progress = 0;
  export let infinite = false;

  let el;

  export function set(progress, speed) {
    if (!app.t4) return;
    app.t4.progressbar.set(el, progress, speed);
  }

  $: classes = classNames(
    className,
    'progressbar',
    {
      'progressbar-infinite': infinite,
    },
    colorClasses($$props),
  );

  $: transformStyle = {
    transform: progress ? `translate3d(${-100 + progress}%, 0, 0)` : '',
    WebkitTransform: progress ? `translate3d(${-100 + progress}%, 0, 0)` : '',
  };
</script>

<span bind:this={el} class={classes} data-progress={progress} {...restProps($$restProps)}>
  <span style={transformStyle} />
</span>
