<script>
  import { createEventDispatcher, onMount, onDestroy } from 'svelte';
  import { colorClasses } from '../shared/mixins.js';
  import { classNames, noUndefinedProps, createEmitter } from '../shared/utils.js';
  import { restProps } from '../shared/rest-props.js';
  import { app, t4ready } from '../shared/t4.js';

  const emit = createEmitter(createEventDispatcher, $$props);

  let className = undefined;
  export { className as class };

  export let noShadow = false;
  export let noHairline = false;
  export let form = true;
  export let placeholder = 'Search';
  export let autocomplete = undefined;
  export let autocorrect = undefined;
  export let autocapitalize = undefined;
  export let spellcheck = undefined;
  export let disableButton = true;
  export let disableButtonText = 'Cancel';
  export let clearButton = true;
  // Input Value
  export let value = undefined;

  // SB Params
  export let inputEvents = 'change input compositionend';
  export let expandable = false;
  export let inline = false;
  export let searchContainer = undefined;
  export let searchIn = '.item-title';
  export let searchItem = 'li';
  export let searchGroup = '.list-group';
  export let searchGroupTitle = '.item-divider, .list-group-title';
  export let foundEl = '.searchbar-found';
  export let notFoundEl = '.searchbar-not-found';
  export let backdrop = undefined;
  export let backdropEl = undefined;
  export let hideOnEnableEl = '.searchbar-hide-on-enable';
  export let hideOnSearchEl = '.searchbar-hide-on-search';
  export let ignore = '.searchbar-ignore';
  export let customSearch = false;
  export let removeDiacritics = false;
  export let hideDividers = true;
  export let hideGroups = true;
  export let init = true;

  export let t4Slot = 'fixed';

  let el;
  let t4Searchbar;

  export function instance() {
    return t4Searchbar;
  }
  export function search(query) {
    if (!t4Searchbar) return undefined;
    return t4Searchbar.search(query);
  }
  export function enable() {
    if (!t4Searchbar) return undefined;
    return t4Searchbar.enable();
  }
  export function disable() {
    if (!t4Searchbar) return undefined;
    return t4Searchbar.disable();
  }
  export function toggle() {
    if (!t4Searchbar) return undefined;
    return t4Searchbar.toggle();
  }
  export function clear() {
    if (!t4Searchbar) return undefined;
    return t4Searchbar.clear();
  }

  $: classes = classNames(
    className,
    'searchbar',
    {
      'searchbar-inline': inline,
      'no-shadow': noShadow,
      'no-hairline': noHairline,
      'searchbar-expandable': expandable,
    },
    colorClasses($$props),
  );

  function onChange(event) {
    emit('change', [event]);
  }

  function onInput(event) {
    emit('input', [event]);
    value = event.target.value;
  }

  function onFocus(event) {
    emit('focus', [event]);
  }

  function onBlur(event) {
    emit('blur', [event]);
  }

  function onSubmit(event) {
    emit('submit', [event]);
  }

  function onClearButtonClick(event) {
    emit('click:clear', [event]);
  }

  function onDisableButtonClick(event) {
    emit('click:disable', [event]);
  }

  onMount(() => {
    if (!init) return;
    t4ready(() => {
      const params = noUndefinedProps({
        el,
        inputEvents,
        searchContainer,
        searchIn,
        searchItem,
        searchGroup,
        searchGroupTitle,
        hideOnEnableEl,
        hideOnSearchEl,
        foundEl,
        notFoundEl,
        backdrop,
        backdropEl,
        disableButton,
        ignore,
        customSearch,
        removeDiacritics,
        hideDividers,
        hideGroups,
        expandable,
        inline,
        on: {
          search(searchbar, query, previousQuery) {
            emit('searchbarSearch', [searchbar, query, previousQuery]);
          },
          clear(searchbar, previousQuery) {
            emit('searchbarClear', [searchbar, previousQuery]);
          },
          enable(searchbar) {
            emit('searchbarEnable', [searchbar]);
          },
          disable(searchbar) {
            emit('searchbarDisable', [searchbar]);
          },
        },
      });
      Object.keys(params).forEach((key) => {
        if (params[key] === '') {
          delete params[key];
        }
      });
      t4Searchbar = app.t4.searchbar.create(params);
    });
  });

  onDestroy(() => {
    if (t4Searchbar && t4Searchbar.destroy) {
      t4Searchbar.destroy();
      t4Searchbar = null;
    }
  });
</script>

{#if form}
  <form
    bind:this={el}
    class={classes}
    on:submit={onSubmit}
    data-t4-slot={t4Slot}
    {...restProps($$restProps)}
  >
    <slot searchbar={t4Searchbar} name="before-inner" />
    <div class="searchbar-inner">
      <slot searchbar={t4Searchbar} name="inner-start" />
      <div class="searchbar-input-wrap">
        <slot searchbar={t4Searchbar} name="input-wrap-start" />
        <input
          value={typeof value === 'undefined' ? '' : value}
          {placeholder}
          {autocomplete}
          {autocorrect}
          {autocapitalize}
          {spellcheck}
          type="search"
          on:input={onInput}
          on:change={onChange}
          on:focus={onFocus}
          on:blur={onBlur}
        />
        <i class="searchbar-icon" />
        {#if clearButton}<span on:click={onClearButtonClick} class="input-clear-button" />{/if}
        <slot searchbar={t4Searchbar} name="input-wrap-end" />
      </div>
      {#if disableButton}
        <span on:click={onDisableButtonClick} class="searchbar-disable-button"
          >{disableButtonText}</span
        >
      {/if}
      <slot searchbar={t4Searchbar} name="inner-end" />
      <slot searchbar={t4Searchbar} />
    </div>
    <slot searchbar={t4Searchbar} name="after-inner" />
  </form>
{:else}
  <div bind:this={el} class={classes} data-t4-slot={t4Slot} {...restProps($$restProps)}>
    <slot searchbar={t4Searchbar} name="before-inner" />
    <div class="searchbar-inner">
      <slot searchbar={t4Searchbar} name="inner-start" />
      <div class="searchbar-input-wrap">
        <slot searchbar={t4Searchbar} name="input-wrap-start" />
        <input
          value={typeof value === 'undefined' ? '' : value}
          {placeholder}
          {autocomplete}
          {autocorrect}
          {autocapitalize}
          {spellcheck}
          type="search"
          on:input={onInput}
          on:change={onChange}
          on:focus={onFocus}
          on:blur={onBlur}
        />
        <i class="searchbar-icon" />
        {#if clearButton}<span on:click={onClearButtonClick} class="input-clear-button" />{/if}
        <slot searchbar={t4Searchbar} name="input-wrap-end" />
      </div>
      {#if disableButton}
        <span on:click={onDisableButtonClick} class="searchbar-disable-button"
          >{disableButtonText}</span
        >
      {/if}
      <slot searchbar={t4Searchbar} name="inner-end" />
      <slot searchbar={t4Searchbar} />
    </div>
    <slot searchbar={t4Searchbar} name="after-inner" />
  </div>
{/if}
