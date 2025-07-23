<script lang="ts">
	import Button from '@components/buttons/Button.svelte';
	import { fade } from 'svelte/transition';

	interface Props {
		projectType: string[];
		handleClick: (direction: 'prev' | 'next') => void;
	}

	let { projectType = $bindable([]), handleClick }: Props = $props();
</script>

<p>Hi there. What kind of project do you need help with?</p>
<div class="grid w-full my-8 gap-4">
	<label class="cursor-pointer flex gap-3">
		<input
			type="checkbox"
			class="w-6 h-6 accent-primary text-primary cursor-pointer rounded-xl focus:ring-primary dark:focus:ring-primary"
			bind:group={projectType}
			value={'New website'} />
		New website
	</label>
	<label class="cursor-pointer flex gap-3">
		<input
			type="checkbox"
			class="w-6 h-6 accent-primary text-primary cursor-pointer rounded-xl focus:ring-primary dark:focus:ring-primary"
			bind:group={projectType}
			value={'SEO'} /> SEO</label>
	<label class="cursor-pointer flex gap-3">
		<input
			type="checkbox"
			class="w-6 h-6 accent-primary text-primary cursor-pointer rounded-xl focus:ring-primary dark:focus:ring-primary"
			bind:group={projectType}
			value={'Design'} /> Design</label>
      <label class="cursor-pointer flex gap-3">
        <input
          type="checkbox"
          class="w-6 h-6 accent-primary text-primary cursor-pointer rounded-xl focus:ring-primary dark:focus:ring-primary"
          bind:group={projectType}
          value={'Website in a weekend'} /> Website in a Weekend</label>
      <label class="cursor-pointer flex gap-3">
        <input
          type="checkbox"
          class="w-6 h-6 accent-primary text-primary cursor-pointer rounded-xl focus:ring-primary dark:focus:ring-primary"
          bind:group={projectType}
          value={'Automations'} /> Automations</label>
	<label class="cursor-pointer flex gap-3">
		<input
			type="checkbox"
			class="w-6 h-6 accent-primary text-primary cursor-pointer rounded-xl focus:ring-primary dark:focus:ring-primary"
			bind:group={projectType}
			value={'Other'} /> Other</label>
</div>

{#if projectType.length > 0}
	<div transition:fade|global class="grid grid-cols-[repeat(2,max-content)] justify-between gap-3">
		<Button classes="col-start-2" btnCallback={() => handleClick('next')}>Next</Button>
	</div>
{/if}
