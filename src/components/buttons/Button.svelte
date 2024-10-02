<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let type: 'button' | 'link' = 'button';
    export let flavor: 'plain' | 'glow' = 'glow';
	export let color: 'primary' | 'secondary' | 'tertiary' = 'primary';
	export let link: string = '/';
	export let classes = '';

	const glowColorVariants = {
		primary:
			'bg-primary shadow-[0_0_0.5em_0] shadow-primary after:shadow-[0_0_2.25rem] after:shadow-primary text-body-text-light dark:text-body-text-dark',
		secondary:
			'bg-secondary shadow-[0_0_.5em_0] shadow-secondary after:shadow-[0_0_2.25rem] after:shadow-secondary text-body-text-light',
		tertiary:
			'bg-tertiary shadow-[0_0_.5em_0] shadow-tertiary after:shadow-[0_0_2.25rem] after:shadow-tertiary text-body-text-dark dark:text-body-text-light'
	};

    const plainColorVariants = {
        primary: 'bg-primary/40 hover:bg-primary text-primary hover:text-body-text-light hover:dark:text-body-text-dark',
        secondary: 'bg-secondary/20 hover:bg-secondary text-secondary hover:text-body-text-light',
        tertiary: 'bg-tertiary/20 hover:bg-tertiary text-tertiary hover:text-body-text-dark hover:dark:text-body-text-light'
    }
</script>

{#if type === 'button'}
	<button
		type="button"
		on:click={() => dispatch('btnClicked')}
		class={`
            py-[16px] 
            px-[28px] 
            rounded-lg 
            flex
            justify-center
            relative 
            font-medium 
            cursor-pointer
            transition-all
            duration-300
            ${flavor === 'glow' ? 'glowBtn' : 'plain'}
            ${flavor === 'glow' ? glowColorVariants[color] : plainColorVariants[color]} 
            ${classes}`}>
		<slot />
	</button>
{:else if type === 'link'}
	<a
		href={link}
		class={`
            py-[16px] 
            px-[28px] 
            rounded-lg 
            justify-center
            inline-block
            relative 
            font-medium 
            cursor-pointer
            transition-all
            duration-300
            ${flavor === 'glow' ? 'glowBtn' : 'plain'}
            ${flavor === 'glow' ? glowColorVariants[color] : plainColorVariants[color]} 
            ${classes}`}>
		<slot />
	</a>
{/if}

<style>
	.glowBtn::before {
		pointer-events: none;
		content: '';
		position: absolute;
		background: inherit;
		top: 80%;
		left: 0;
		width: 100%;
		height: 100%;

		transform: perspective(40px) rotateX(40deg) scale(1, 0.35);
		filter: blur(20px);
		opacity: 0.3;
		transition: opacity 100ms linear;
	}

	.glowBtn::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border-radius: inherit;
		z-index: -1;
		opacity: 0;
		transition: opacity 100ms linear;
	}

	.glowBtn:hover::before,
	.glowBtn:focus::before {
		opacity: .75;
	}
	.glowBtn:hover::after,
	.glowBtn:focus::after {
		opacity: 0.5;
	}
</style>
