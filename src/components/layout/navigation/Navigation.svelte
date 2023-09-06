<script lang="ts">
	import MobileNav from './MobileNav.svelte';
	import DesktopNav from './DesktopNav.svelte';
	import { onMount } from 'svelte';
	let urlData = '';
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
		<DesktopNav {urlData}>
			<slot name="siteLogo" slot="siteLogo" />
		</DesktopNav>
	</div>
	<div class="block lg:hidden">
		<MobileNav>
			<slot name="siteLogo" slot="siteLogo" />
		</MobileNav>
	</div>
</nav>
