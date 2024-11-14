<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    shown: boolean;
    items: number;
    children: Snippet;
  }
  let { shown = false, children, items }: Props = $props()

  const widths = {
    2: 'w-[50%]',
    3: 'w-[75%]',
    4: 'w-[calc(100vw-30px)]'
  }
</script>

<div
	class:shown
	class="opacity-0 invisible absolute top-0 left-[50%] -translate-x-2/4 bg-body-color shadow-xl shadow-secondary/5 dark:shadow-none dark:bg-body-color-secondary z-50 rounded-[25px] overflow-hidden {widths[items]}">
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
