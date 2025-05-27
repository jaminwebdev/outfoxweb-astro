<script lang="ts">
	import Button, { type ButtonFlavors } from '@components/buttons/Button.svelte';
	import type { Snippet } from 'svelte';
	import MultiStepProjectForm from '@components/forms/project-form/MultiStepProjectForm.svelte'
  import Dialog from '@components/dialogs/Dialog.svelte';

  interface Props {
    flavor?: ButtonFlavors;
    color?: 'primary' | 'secondary' | 'tertiary';
    classes?: string;
    children?: Snippet;
  }

  let { children, flavor = 'normal', classes, color }: Props = $props()

  let isOpen = $state(false);

  let openDialog = () => isOpen = true
  let closeDialog = () => isOpen = false
</script>

<Button btnCallback={openDialog} {flavor} {color} classes="px-[20px] py-[12px] {classes}">
  {#if children}
    {@render children()}
  {:else}
    Let's Chat
  {/if}
</Button>

<Dialog {isOpen} clickHandler={closeDialog}>
  <MultiStepProjectForm classes=" w-full" closeCallback={closeDialog} />
</Dialog>

