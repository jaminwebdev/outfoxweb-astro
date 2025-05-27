<script module lang="ts">
  export type ButtonFlavors = 'normal' | 'outline-solid' | 'ghost' | 'glow'
  export interface ButtonProps {
		type?: 'button' | 'link';
    flavor?: ButtonFlavors;
    color?: 'primary' | 'secondary' | 'tertiary';
    link?: string;
    classes?: string;
    disabled?: boolean;
    btnCallback?: () => void;
    children: Snippet;
	}
</script>

<script lang="ts">
	import { type Snippet } from 'svelte';

	let { 
    type = 'button',
    flavor = 'glow',
    color = 'primary',
    link = '/',
    classes,
    disabled = false,
    btnCallback,
    children,
   }: ButtonProps = $props();

	const glowColorVariants = {
		primary:
			'bg-primary shadow-[0_0_0.5em_0] shadow-primary after:shadow-[0_0_2.25rem] after:shadow-primary text-background',
		secondary:
			'bg-secondary shadow-[0_0_.5em_0] shadow-secondary after:shadow-[0_0_2.25rem] after:shadow-secondary text-background dark:text-body-text',
		tertiary:
			'bg-tertiary shadow-[0_0_.5em_0] shadow-tertiary after:shadow-[0_0_2.25rem] after:shadow-tertiary text-background dark:text-body-text'
	};

  const variants = {
		normal: {
			primary: 'bg-primary hover:scale-[1.05] text-background',
			secondary: 'bg-secondary hover:scale-[1.05] text-background dark:text-body-text',
			tertiary: 'bg-tertiary hover:scale-[1.05] text-background dark:text-body-text'
		},
		outline: {
			primary: 'border-2 border-primary text-primary hover:bg-primary dark:hover:text-background hover:text-foreground',
			secondary: 'border-2 border-secondary text-secondary hover:bg-secondary hover:text-foreground',
			tertiary: 'border-2 border-tertiary text-tertiary hover:bg-tertiary hover:text-foreground'
		},
		ghost: {
			primary: 'bg-primary/10 text-primary hover:bg-primary/30 hover:scale-[1.05]',
			secondary: 'bg-secondary/10 text-secondary hover:bg-secondary/30 hover:scale-[1.05]',
			tertiary: 'bg-tertiary/10 text-tertiary hover:bg-tertiary/30 hover:scale-[1.05]'
		}
	};
</script>

{#if type === 'button'}
	<button
		type="button"
		onclick={btnCallback}
    {disabled}
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
            ${flavor === 'glow' ? glowColorVariants[color] : variants[flavor][color]} 
            ${classes}`}>
		{@render children()}
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
            no-underline
            ${flavor === 'glow' ? 'glowBtn' : ''}
            ${flavor === 'glow' ? glowColorVariants[color] : variants[flavor][color]} 
            ${classes}`}>
		{@render children()}
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
