<script lang="ts">
	import type { Snippet } from 'svelte';
  import { scale } from 'svelte/transition';
  import PillButton from '@components/buttons/PillButton.svelte';

  interface Props {
    children: Snippet;
    isOpen: boolean;
    classes?: string;
    clickHandler: () => void;
  }

  let { children, clickHandler, isOpen, classes }: Props = $props();
  
  let dialog: HTMLDialogElement;

  $effect(() => {
    isOpen ? openDialog() : closeDialog()
  })

  const openDialog = () => {
    dialog.showModal();
    setTimeout(() => (isOpen = true), 100);
  };

  const closeDialog = () => {
    clickHandler()
    setTimeout(() => dialog.close(), 200);
  };

  const handleDialogDiv = (e: MouseEvent) => e.stopPropagation();
</script>
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<dialog bind:this={dialog} 
  onclick={closeDialog} 
  class="rounded-xl bg-transparent w-[85%] lg:w-[600px] {classes}">
  {#if isOpen}
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <div
      onclick={handleDialogDiv}
      transition:scale={{ duration: 200 }}
      class="p-5 md:p-10 pt-16 rounded-xl bg-body-color-secondary relative w-full">
      <PillButton
        btnCallback={closeDialog}
        active={false}
        classes="absolute top-4 right-6 text-body-text-dark dark:text-body-text-light text-base bg-primary/20">
        close x
      </PillButton>
      {@render children()}
    </div>
  {/if}
</dialog>