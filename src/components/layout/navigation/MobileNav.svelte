<script lang="ts">
	import SiteLogo from '@/components/SiteLogo.svelte';
import Hamburger from './Hamburger.svelte';
	import Sidebar from './Sidebar.svelte';

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
		<SiteLogo />
	</div>
	<Hamburger bind:open handleClick={toggleOpen} />
	<Sidebar bind:open />
</div>
