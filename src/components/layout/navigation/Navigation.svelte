<script lang="ts">
	import MobileNav from './MobileNav.svelte';
	import DesktopNav from './DesktopNav.svelte';
  import SiteLogo from '@/components/SiteLogo.svelte';
	import { onMount, type Snippet } from 'svelte';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props()

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
		<DesktopNav>
      {#snippet siteLogo()}
        <SiteLogo/>
      {/snippet}
		</DesktopNav>
	</div>
	<div class="block lg:hidden">
		<MobileNav>
			{#snippet siteLogo()}
        <SiteLogo/>
      {/snippet}
		</MobileNav>
	</div>
</nav>
