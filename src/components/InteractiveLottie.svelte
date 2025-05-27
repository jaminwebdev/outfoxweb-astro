<script lang="ts">
	import { onMount } from 'svelte';
	import type { AnimationEvent, AnimationItem } from 'lottie-svelte/iface';
	import { onDestroy } from 'svelte';

	let Lottie: any = $state(null);
	let mounted = $state(false);

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
		timeLoop = $bindable(6000),
		repeat = false,
		speed = $bindable(1),
		delay = $bindable(0),
		initialPlay = $bindable(false),
		path = '/lottie/Successful.json',
		forceAnimate = $bindable(false),
	}: Props = $props()

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
	})

	onMount(async () => {
		mounted = true;
		const mod = await import('lottie-svelte');
		Lottie = mod.Lottie;
	});

	onDestroy(() => {
		if (animationInterval) {
			clearInterval(animationInterval);
		}
	});
</script>

{#if mounted && Lottie}
	<Lottie bind:path loop={false} on:animation={handler} bind:speed />
{/if}
