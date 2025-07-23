<script lang="ts">
	import Dropdown from './Dropdown.svelte';
	import ServicesMenu from './menus/ServicesMenu.svelte';
	import ResourcesMenu from './menus/ResourcesMenu.svelte';
	import AboutMenu from './menus/AboutMenu.svelte';
  import SiteLogo from '@/components/SiteLogo.svelte';
  import MultiStepDialog from '@components/dialogs/MultiStepDialog.svelte';

	let selectedMenuItem = $state('none');

	const setSelectedMenuItem = (item: string) => {
		if (selectedMenuItem === item) {
			selectedMenuItem = 'none';
			return;
		}
		selectedMenuItem = item;
	};
</script>

<div class="py-[28px] grid grid-cols-[minmax(200px,250px)_1fr]">
	<SiteLogo />
	<ul class="grid gap-12 grid-flow-col text-xl justify-self-end items-center">
		<li>
			<button
				type="button"
				class="p-5"
				onclick={() => setSelectedMenuItem('services')}
				aria-expanded={selectedMenuItem === 'services'}>Services</button>
			<Dropdown shown={selectedMenuItem === 'services'} items={3}>
				<ServicesMenu clickHandler={() => setSelectedMenuItem('none')} />
			</Dropdown>
		</li>
		<li>
			<button
				type="button"
				class="p-5"
				onclick={() => setSelectedMenuItem('resources')}
				aria-expanded={selectedMenuItem === 'resources'}>Resources</button>
			<Dropdown shown={selectedMenuItem === 'resources'} items={3}>
				<ResourcesMenu clickHandler={() => setSelectedMenuItem('none')} />
			</Dropdown>
		</li>
		<li>
			<button
				type="button"
				class="p-5"
				onclick={() => setSelectedMenuItem('about')}
				aria-expanded={selectedMenuItem === 'about'}>About</button>
			<Dropdown shown={selectedMenuItem === 'about'} items={2}>
				<AboutMenu clickHandler={() => setSelectedMenuItem('none')} />
			</Dropdown>
		</li>
		<li>
			<MultiStepDialog classes="text-base" flavor="outline" color="tertiary"/>
		</li>
	</ul>
</div>
