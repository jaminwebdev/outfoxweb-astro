<script lang="ts">
	import Hamburger from './Hamburger.svelte';
	import Sidebar from './Sidebar.svelte';
	import { type Snippet } from 'svelte';

  interface Props {
    siteLogo: Snippet
  }

  let { siteLogo }: Props = $props()

	let open = $state(false);
	let body: HTMLBodyElement | null;

	const toggleOpen = () => (open = !open);

  $effect(() => {
    body = document.querySelector('body');
    if(body) {
      open ? (body!.style.overflowY = 'hidden') : (body!.style.overflowY = 'auto');
    }
  })
</script>

<div class="py-4 relative">
	<div class="w-[65%] max-w-[170px]">
		{@render siteLogo()}
	</div>
	<Hamburger bind:open on:mobileMenuOpenToggle={toggleOpen} />
	<Sidebar bind:open />
</div>
