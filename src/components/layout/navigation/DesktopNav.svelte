<script lang="ts">
	import Dropdown from './Dropdown.svelte';
	import ServicesMenu from './menus/ServicesMenu.svelte';
	import ResourcesMenu from './menus/ResourcesMenu.svelte';
	import AboutMenu from './menus/AboutMenu.svelte';
  import type { Snippet } from 'svelte';
  interface Props {
    siteLogo: Snippet
  }

  let { siteLogo }: Props = $props()

	let selectedMenuItem = $state('none');

	const setSelectedMenuItem = (item: string) => {
		if (selectedMenuItem === item) {
			selectedMenuItem = 'none';
			return;
		}
		selectedMenuItem = item;
	};

</script>

<div class="py-[28px] grid grid-cols-[minmax(200px,_250px)_1fr]">
	{@render siteLogo()}
	<ul class="grid gap-12 grid-flow-col text-xl justify-self-end items-center">
		<li>
			<button
				type="button"
				class="p-5"
				onclick={() => setSelectedMenuItem('services')}
				aria-expanded={selectedMenuItem === 'services'}>Services</button>
			<Dropdown shown={selectedMenuItem === 'services'}>
				<ServicesMenu clickHandler={() => setSelectedMenuItem('none')} />
			</Dropdown>
		</li>
		<li>
			<button
				type="button"
				class="p-5"
				onclick={() => setSelectedMenuItem('resources')}
				aria-expanded={selectedMenuItem === 'resources'}>Resources</button>
			<Dropdown shown={selectedMenuItem === 'resources'}>
				<ResourcesMenu clickHandler={() => setSelectedMenuItem('none')} />
			</Dropdown>
		</li>
		<li>
			<button
				type="button"
				class="p-5"
				onclick={() => setSelectedMenuItem('about')}
				aria-expanded={selectedMenuItem === 'about'}>About</button>
			<Dropdown shown={selectedMenuItem === 'about'}>
				<AboutMenu clickHandler={() => setSelectedMenuItem('none')} />
			</Dropdown>
		</li>
		<li>
			<button class="rounded-lg bg-secondary text-body-text-light py-[12px] px-[28px]"
				>Let's Chat</button>
		</li>
	</ul>
</div>
