<script lang="ts">
	import Hamburger from './Hamburger.svelte';
	import Sidebar from './Sidebar.svelte';
	import { onMount } from 'svelte';

	let open = false;
	let body: HTMLBodyElement | null;
	onMount(() => {
		body = document.querySelector('body');
	})
	const toggleOpen = () => (open = !open);
	$: if(body) {
		open ? (body!.style.overflowY = 'hidden') : (body!.style.overflowY = 'auto');
	}
</script>

<div class="py-4 relative">
	<div class="w-[65%] max-w-[170px]">
		<slot name="siteLogo" />
	</div>
	<Hamburger bind:open on:mobileMenuOpenToggle={toggleOpen} />
	<Sidebar bind:open />
</div>
