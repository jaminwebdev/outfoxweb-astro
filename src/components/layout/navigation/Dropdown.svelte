<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    shown: boolean;
    children: Snippet;
  }
  let { shown = false, children }: Props = $props()
</script>

<div
	class:shown
	class="opacity-0 invisible absolute top-0 left-[50%] -translate-x-2/4 bg-body-color shadow-xl shadow-secondary/5 dark:shadow-none dark:bg-body-color-secondary w-[calc(100vw-30px)] z-50 rounded-[25px] overflow-hidden">
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
