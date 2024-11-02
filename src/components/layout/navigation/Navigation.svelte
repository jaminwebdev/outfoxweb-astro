<script lang="ts">
	import MobileNav from './MobileNav.svelte';
	import DesktopNav from './DesktopNav.svelte';
  import SiteLogo from '@/components/SiteLogo.svelte';
	import { onMount } from 'svelte';

	let urlData = $state('');

	onMount(() => {
		const observer = new MutationObserver(function(mutations) {
			if (location.href !== urlData) {
				urlData = location.href;
			}
		});
		observer.observe(document, {subtree: true, childList: true});
	})
</script>

<nav>
	<div class="hidden lg:block">
		<DesktopNav/>
	</div>
	<div class="block lg:hidden">
		<MobileNav />
	</div>
</nav>
