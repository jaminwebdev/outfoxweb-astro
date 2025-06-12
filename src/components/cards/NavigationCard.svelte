<script lang="ts">
	import InteractiveLottie from '@components/InteractiveLottie.svelte';
  import type { Snippet } from 'svelte';

  interface Props {
    link: string;
    lottiePath: string;
    bgColor?: 'primary' | 'secondary' | 'tertiary' | 'orange';
    heading: Snippet;
    body?: Snippet;
    clickHandler: () => void;
    classes?: string;
  }

  let {
    link = '/',
    lottiePath = '',
    bgColor = 'primary',
    heading,
    body,
    clickHandler,
    classes
  }: Props = $props()


	let isHovering = $state(false);

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
  onclick={clickHandler}
	onmouseenter={mouseEntered}
	onmouseleave={mouseLeft}
	class="px-3 py-5 lg:p-12 text-body-text no-underline {bgColors[bgColor]} {classes}">
	<div class="grid gap-2">
		<div class={`flex items-center gap-2`}>
			<div class="max-w-[60px] max-h-[60px] -ml-2 md:mb-2">
				<InteractiveLottie path={lottiePath} bind:forceAnimate={isHovering} />
			</div>
			<h3 class="text-xl">
				{@render heading()}
			</h3>
		</div>
    {#if body}
      <p>
        {@render body()}
      </p>
    {/if}
	</div>
</a>
