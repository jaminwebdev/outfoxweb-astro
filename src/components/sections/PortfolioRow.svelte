<script lang="ts">
	import { fade } from 'svelte/transition';
	import Button from '@components/buttons/Button.svelte';
	import PillButton from '@components/buttons/PillButton.svelte';
	import SaasImg from '@images/Saas_header.webp';
	import CoworkImg from '@images/Cowork_Header.webp';
	import NonprofitImg from '@images/Nonprofit_Header.webp';
	import FinanceImg from '@images/Finance_Header.webp';

  type Category = 'Saas' | 'Finance' | 'Workspace' | 'Nonprofit'
  const categories: Category[] = ['Saas', 'Finance', 'Workspace', 'Nonprofit'];
  
  let activeCategory: Category = $state('Saas');

	const setActiveCategory = (category: Category) => (activeCategory = category);
</script>

<section
	class="rounded-xl bg-body-color-secondary px-6 py-10 md:p-[60px] grid grid-cols-1 lg:grid-cols-2 gap-4 items-center overflow-hidden min-h-[790px] lg:min-h-0">
	<!-- Left column -->
	<div>
		<p
			class="bg-primary/20 text-primary py-[5px] px-[14px] rounded-md inline-block text-base mb-2">
			CHECK OUT
		</p>
		<h2 class="mb-4">Our latest work</h2>
		<p class="mb-8 lg:mb-4">
			Our proven designs elevate brands and turn visitors into loyal customers. Click
			the categories below to see some of our latest work.
		</p>
		<div class="mt-3 flex flex-wrap gap-5">
			{#each categories as category}
				<PillButton
					active={activeCategory === category}
					btnCallback={() => setActiveCategory(category)}>{category}</PillButton>
			{/each}
		</div>
		<Button
			type="link"
			link="/web-design"
			classes="px-[24px] py-[12px] mt-10 mb-14 lg:mb-0"
			color="tertiary">See More</Button>
	</div>
	<!-- Right column -->
	<div class="grid grid-cols-1 grid-rows-1">
		{#if activeCategory === 'Saas'}
			<img
				src={SaasImg.src}
				alt="Saas website design"
				class="max-h-[380px] lg:max-h-[470px] -mb-[80px] lg:ml-[80px] object-contain col-start-1 row-start-1 justify-self-center lg:justify-self-auto"
				in:fade|global={{ duration: 150, delay: 200 }}
				out:fade|global={{ duration: 150 }} />
		{/if}
		{#if activeCategory === 'Finance'}
			<img
				src={FinanceImg.src}
				alt="Financial advisor & fiduciary website design"
				class="max-h-[380px] lg:max-h-[470px] -mb-[80px] lg:ml-[80px] object-contain col-start-1 row-start-1 justify-self-center lg:justify-self-auto"
				in:fade|global={{ duration: 150, delay: 200 }}
				out:fade|global={{ duration: 150 }} />
		{/if}
		{#if activeCategory === 'Workspace'}
			<img
				src={CoworkImg.src}
				alt="Cowork space website design"
				class="max-h-[380px] lg:max-h-[470px] -mb-[80px] lg:ml-[80px] object-contain col-start-1 row-start-1 justify-self-center lg:justify-self-auto"
				in:fade|global={{ duration: 150, delay: 200 }}
				out:fade|global={{ duration: 150 }} />
		{/if}
		{#if activeCategory === 'Nonprofit'}
			<img
				src={NonprofitImg.src}
				alt="Nonprofit website design"
				class="max-h-[380px] lg:max-h-[470px] -mb-[80px] lg:ml-[80px] object-contain col-start-1 row-start-1 justify-self-center lg:justify-self-auto"
				in:fade|global={{ duration: 150, delay: 200 }}
				out:fade|global={{ duration: 150 }} />
		{/if}
	</div>
</section>
