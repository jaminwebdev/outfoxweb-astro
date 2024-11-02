<script lang="ts">
	import Button from '@components/buttons/Button.svelte';
	import { fade } from 'svelte/transition';

	interface Props {
		projectType: string[];
		handleClick: (direction: 'prev' | 'next') => void;
	}

	let { projectType = $bindable([]), handleClick }: Props = $props();
</script>

<p>What kind of project do you need help with?</p>
<div class="grid">
	<label
		><input type="checkbox" bind:group={projectType} value={'New website'} /> New website</label>
	<label><input type="checkbox" bind:group={projectType} value={'SEO'} /> SEO</label>
	<label><input type="checkbox" bind:group={projectType} value={'Design'} /> Design</label>
</div>

{#if projectType.length > 0}
	<div transition:fade|global class="grid grid-cols-[repeat(2,_max-content)] justify-between gap-3">
		<Button classes="col-start-2" btnCallback={() => handleClick('next')}>Next</Button>
	</div>
{/if}
