<script lang="ts">
	import InteractiveLottie from '../InteractiveLottie.svelte';

	export let link = '/';
	export let lottiePath = '';
	export let bgColor: 'primary' | 'secondary' | 'tertiary' | 'orange' = 'primary';

	let isHovering = false;
	$: play = isHovering;
	const mouseEntered = () => (isHovering = true);
	const mouseLeft = () => (isHovering = false);

	const bgColors = {
		primary: 'dark:hover:bg-primary/10',
		secondary: 'dark:hover:bg-secondary/10',
		tertiary: 'dark:hover:bg-tertiary/10',
		orange: 'dark:hover:bg-orange/10'
	};
</script>

<a
	href={link}
	on:click
	on:mouseenter={mouseEntered}
	on:mouseleave={mouseLeft}
	class="px-5 py-7 lg:p-[70px_40px] {bgColors[bgColor]} ">
	<div class="grid gap-2">
		<div class="flex lg:block items-center gap-2">
			<div class="max-w-[60px] max-h-[60px] -ml-2 md:mb-2">
				<InteractiveLottie path={lottiePath} bind:forceAnimate={play} />
			</div>
			<h3 class="text-xl">
				<slot name="heading" />
			</h3>
		</div>
		<p>
			<slot name="body" />
		</p>
	</div>
</a>
