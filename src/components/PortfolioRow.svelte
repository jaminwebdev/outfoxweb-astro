<script lang="ts">
	import Button from './buttons/Button.svelte';
	import { fade } from 'svelte/transition';
	import PillButton from './buttons/PillButton.svelte';
	// @ts-ignore
	import SaasImg from '../images/Saas_header.png?format=webp&quality=100&w=550';
	// @ts-ignore
	import CoworkImg from '../images/Cowork_Header.png?format=webp&quality=100&w=550';
	// @ts-ignore
	import NonprofitImg from '../images/Nonprofit_Header.png?format=webp&quality=100&w=550';
	// @ts-ignore
	import FinanceImg from '../images/Finance_Header.png?format=webp&quality=100&w=550';

	const categories = ['Saas', 'Finance', 'Workspace', 'Nonprofit'];
	let activeCategory = 'Saas';

	const setActiveCategory = (category: string) => (activeCategory = category);
</script>

<section
	class="rounded-xl bg-body-color-secondary px-6 py-10 md:p-[60px] grid grid-cols-1 lg:grid-cols-2 gap-4 items-center overflow-hidden min-h-[790px] lg:min-h-0">
	<!-- Left column -->
	<div>
		<p
			class="bg-primary/20 text-primary py-[5px] px-[14px] rounded-md inline-block text-base mb-2">
			CHECK IT OUT
		</p>
		<h2 class="mb-4">Our latest work</h2>
		<p class="mb-8 lg:mb-4">
			We don’t like to toot our own horn, but we’re fond of our designs and UX capabilities. Click
			the categories below to peruse our latest endeavors.
		</p>
		<div class="mt-3 flex flex-wrap gap-5">
			{#each categories as category}
				<PillButton
					active={activeCategory === category}
					on:pillClicked={() => setActiveCategory(category)}>{category}</PillButton>
			{/each}
		</div>
		<Button
			type="link"
			link="/"
			classes="px-[24px] py-[12px] mt-10 mb-14 lg:mb-0"
			color="tertiary">See More</Button>
	</div>
	<!-- Right column -->
	<div class="grid grid-cols-1 grid-rows-1">
		{#if activeCategory === 'Saas'}
			<img
				src={SaasImg}
				alt="Saas website design"
				class="max-h-[380px] lg:max-h-[470px] -mb-[80px] lg:ml-[80px] object-contain col-start-1 row-start-1 justify-self-center lg:justify-self-auto"
				in:fade|global={{ duration: 150, delay: 200 }}
				out:fade|global={{ duration: 150 }} />
		{/if}
		{#if activeCategory === 'Finance'}
			<img
				src={FinanceImg}
				alt="Financial advisor & fiduciary website design"
				class="max-h-[380px] lg:max-h-[470px] -mb-[80px] lg:ml-[80px] object-contain col-start-1 row-start-1 justify-self-center lg:justify-self-auto"
				in:fade|global={{ duration: 150, delay: 200 }}
				out:fade|global={{ duration: 150 }} />
		{/if}
		{#if activeCategory === 'Workspace'}
			<img
				src={CoworkImg}
				alt="Cowork space website design"
				class="max-h-[380px] lg:max-h-[470px] -mb-[80px] lg:ml-[80px] object-contain col-start-1 row-start-1 justify-self-center lg:justify-self-auto"
				in:fade|global={{ duration: 150, delay: 200 }}
				out:fade|global={{ duration: 150 }} />
		{/if}
		{#if activeCategory === 'Nonprofit'}
			<img
				src={NonprofitImg}
				alt="Nonprofit website design"
				class="max-h-[380px] lg:max-h-[470px] -mb-[80px] lg:ml-[80px] object-contain col-start-1 row-start-1 justify-self-center lg:justify-self-auto"
				in:fade|global={{ duration: 150, delay: 200 }}
				out:fade|global={{ duration: 150 }} />
		{/if}
	</div>
</section>
