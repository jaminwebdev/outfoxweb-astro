<script lang="ts">
	export let shown = false;
</script>

<div
	class:shown
	class="opacity-0 invisible absolute top-0 left-[50%] -translate-x-2/4 bg-body-color shadow-xl shadow-secondary/5 dark:shadow-none dark:bg-body-secondary w-[calc(100vw-30px)] z-50 rounded-[25px] overflow-hidden">
	<slot />
</div>

<style>
	.shown {
		opacity: 1;
		visibility: visible;
		top: 110px;
		transition: opacity 0.35s ease-out;
	}
</style>
