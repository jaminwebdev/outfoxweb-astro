<script lang="ts">
  import { onMount, type Snippet } from 'svelte';

  interface Props {
    bodyClasses?: string;
    isOpen?: boolean;
    question: Snippet;
    answer: Snippet;
  }

  let { bodyClasses = '', isOpen = false, question, answer }: Props = $props();

  let borderColor = $state() as string;
  let panel: HTMLDivElement;

  onMount(() => {
    if (isOpen) {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
    borderColor = borderColors[Math.floor(Math.random() * 3)];
  });

  const toggle = () => {
    isOpen = !isOpen;
    if (isOpen) {
      panel.style.maxHeight = panel.scrollHeight + 30 + 'px';
      return;
    }
    panel.style.maxHeight = '0px';
  };

  const borderColors = ['border-primary', 'border-secondary', 'border-tertiary'];
</script>

<div class="w-full max-w-[900px] mt-4">
  <button
    onclick={toggle}
    aria-expanded={isOpen}
    class="grid grid-cols-[1fr_min-content] gap-2 items-center text-left w-full justify-between border-2 dark:border-none {borderColor} dark:bg-body-color-secondary rounded-lg p-5"
  >
    {@render question()}
    <svg
      style="tran"
      width="20"
      height="20"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      class="{isOpen ? '-rotate-90' : 'rotate-90'} transition-transform duration-200"
      stroke="currentColor"><path d="M9 5l7 7-7 7" /></svg
    >
  </button>
  <div
    bind:this={panel}
    class="text-left w-full max-w-[900px] max-h-0 overflow-hidden transition-all duration-200 ease-out px-5 {isOpen
      ? 'py-5'
      : ''} {bodyClasses}"
  >
    {@render answer()}
  </div>
</div>
