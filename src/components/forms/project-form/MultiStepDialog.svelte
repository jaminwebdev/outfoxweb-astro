<script lang="ts">
	import Button, { type ButtonFlavors } from '@components/buttons/Button.svelte';
	import type { Snippet } from 'svelte';
	import MultiStepProjectForm from './MultiStepProjectForm.svelte';
	import { scale } from 'svelte/transition';
	import PillButton from '@components/buttons/PillButton.svelte';

  interface Props {
    flavor?: ButtonFlavors;
    classes?: string;
    children?: Snippet;
  }

  let { children, flavor = 'normal', classes }: Props = $props()

	let dialog: HTMLDialogElement;

	let isOpen = $state(false);

	const openDialog = () => {
		dialog.showModal();
		setTimeout(() => (isOpen = true), 100);
	};

	const closeDialog = () => {
		isOpen = false;
		setTimeout(() => dialog.close(), 200);
	};
</script>

<Button btnCallback={openDialog} {flavor} classes="px-[20px] py-[12px] text-base {classes}">
  {#if children}
    {@render children()}
  {:else}
    Let's Chat
  {/if}
</Button>

<dialog bind:this={dialog} class="rounded-xl bg-transparent w-[75%] lg:w-[600px]">
	{#if isOpen}
		<div
			transition:scale={{ duration: 200 }}
			class="p-10 pt-16 rounded-xl bg-body-color-secondary relative w-full">
			<PillButton
				btnCallback={closeDialog}
        active={false}
				classes="absolute top-4 right-6 text-body-text-dark dark:text-body-text-light text-base bg-primary/20">
				close x
      </PillButton>
			<MultiStepProjectForm classes="text-body-text-light w-full" closeCallback={closeDialog} />
		</div>
	{/if}
</dialog>
