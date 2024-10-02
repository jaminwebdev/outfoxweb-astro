<script lang="ts">
	import InteractiveLottie from "../InteractiveLottie.svelte";

	export let lottiePath = '';
	export let delay = 0;
	export let timeLoop = 4000;
	export let speed = 1;
	export let initialPlay = false;
</script>

<div
	class="bg-body-color-secondary p-[25px] rounded-lg grid gap-2">
	<div class="max-w-[60px]">
		<InteractiveLottie
			path={lottiePath}
			repeat
			bind:delay
			bind:timeLoop
			bind:speed
			bind:initialPlay />
	</div>
	<h3 class="text-xl">
		<slot name="heading" />
	</h3>
	<p>
		<slot name="body" />
	</p>
</div>
