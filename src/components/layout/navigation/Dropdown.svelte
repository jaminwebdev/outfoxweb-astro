<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    shown: boolean;
    items: number;
    children: Snippet;
  }
  let { shown = false, children, items }: Props = $props();

  const widths = {
    2: 'max-w-[760px]',
    3: 'max-w-[1200px]',
    4: 'max-w-[1200px]',
  };
</script>

<div
  class:shown
  class="opacity-0 invisible absolute top-0 left-[50%] -translate-x-2/4 bg-body-color shadow-xl shadow-secondary/5 dark:shadow-none dark:bg-body-color-secondary z-50 rounded-[25px] overflow-hidden w-[calc(100vw-30px)] {widths[
    items
  ]}"
>
  {@render children()}
</div>

<style>
  .shown {
    opacity: 1;
    visibility: visible;
    top: 110px;
    transition: opacity 0.35s ease-out;
  }
</style>
