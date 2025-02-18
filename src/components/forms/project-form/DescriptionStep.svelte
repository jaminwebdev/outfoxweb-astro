<script lang="ts">
	import Button from '@components/buttons/Button.svelte';
	import { fade } from 'svelte/transition';

	interface Props {
		description: string;
		handleClick: (direction: 'prev' | 'next') => void;
	}

	let { description = $bindable(), handleClick }: Props = $props();

	let touched = $state(false);
	let blurred = $state(false);
</script>

<p>Great! Give me a brief overview of what you have in mind.</p>

<!-- svelte-ignore element_invalid_self_closing_tag -->
<div class="my-6">
	<textarea
		rows="6"
		class="w-full rounded-lg text-body-text p-3 text-base bg-body-color"
		bind:value={description}
		placeholder="Tell me more"
		onfocus={() => (touched = true)}
		onblur={() => (blurred = true)} />
	<p>Characters left: {750 - description.length}</p>
</div>

{#if description.length < 1 && touched && blurred}
	<p transition:fade|global class="text-secondary">
		We need a description of your project in order to serve your needs better 😀.
	</p>
{/if}

{#if description.length > 750}
	<p transition:fade|global class="text-secondary">
		Please keep the description to less than 750 characters.
	</p>
{/if}

<div class="grid grid-cols-[repeat(2,_max-content)] justify-between gap-3">
	<Button flavor="ghost" color="tertiary" btnCallback={() => handleClick('prev')}>Prev</Button>
	{#if description.length > 0}
		<span transition:fade|global>
			<Button btnCallback={() => handleClick('next')}>Next</Button>
		</span>
	{/if}
</div>
