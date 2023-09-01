<script lang="ts">
	import { Lottie } from 'lottie-svelte'
	import type { AnimationEvent, AnimationItem } from 'lottie-svelte/iface';
	import { onDestroy } from 'svelte';

	export let timeLoop = 6000;
	export let repeat = false;
	export let speed = 1;
	export let delay = 0;
	export let initialPlay = false;
	export let path = '/lottie/Successful.json';
	export let forceAnimate = false;

	let animation: AnimationItem;
	let animationInterval: ReturnType<typeof setInterval>;

	const handler = (event: AnimationEvent) => {
		animation = event.detail;
		initialPlay ? animation.goToAndPlay(0) : animation.goToAndStop(0);
		if (repeat) {
			setTimeout(() => {
				animationInterval = setInterval(() => animation.goToAndPlay(0), timeLoop);
			}, delay);
		}
	};

	$: if (forceAnimate) {
		animation.goToAndPlay(0);
	}

	onDestroy(() => {
		if (animationInterval) {
			clearInterval(animationInterval);
		}
	});
</script>

<!-- Lottie file is located at static/heart.json -->
<Lottie bind:path loop={false} on:animation={handler} bind:speed />
