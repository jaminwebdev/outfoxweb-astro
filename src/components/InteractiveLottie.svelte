<script lang="ts">
	import type { AnimationEvent, AnimationItem } from 'lottie-svelte/iface';
	import { onDestroy } from 'svelte';

	let Lottie: any = $state(null);

	interface Props {
		timeLoop?: number;
		repeat?: boolean;
		speed?: number;
		delay?: number;
		initialPlay?: boolean;
		path?: string;
		forceAnimate?: boolean;
	}

	let {
		timeLoop = 6000,
		repeat = false,
		speed = 1,
		delay = 0,
		initialPlay = false,
		path = '/lottie/Successful.json',
		forceAnimate = false
	}: Props = $props();

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

	$effect(() => {
		if (forceAnimate && animation) {
			animation.goToAndPlay(0);
		}
	});

	$effect(() => {
		import('lottie-svelte').then((mod) => {
			Lottie = mod.Lottie;
		});
	});

	onDestroy(() => {
		if (animationInterval) {
			clearInterval(animationInterval);
		}
	});
</script>

{#if Lottie}
	<Lottie {path} loop={false} on:animation={handler} {speed} />
{/if}

