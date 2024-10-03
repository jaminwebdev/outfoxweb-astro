<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let active = false;

	const handleClick = () => dispatch('pillClicked');

	const pillColors = {
		active: 'bg-secondary/20 text-secondary',
		inactive: 'bg-body-color-tertiary'
	};
</script>

<button
	on:click={handleClick}
	class={` ${active ? pillColors['active'] : pillColors['inactive']}
rounded-md py-[5px] px-[14px]`}>
	<slot />
</button>
