<script lang="ts">
	import WebDevImg from '../images/Mobile_Score.png?format=webp&quality=100&w=475';
	import DesignImg from '../images/Figma_Tablet.png?format=webp&quality=100&w=475';
	import SEOImg from '../images/Laptop_Metrics_Right.png?format=webp&quality=100&w=475';
	import AuditImg from '../images/Laptop_Audit.png?format=webp&quality=100&w=475';

	import ImgBackground from '../components/ImgBackground.svelte';
	import Button from './buttons/Button.svelte';
	import { fade } from 'svelte/transition';
	import Checkmark from './Checkmark.svelte';

	const services = ['Development', 'Design', 'SEO', 'Web Audits'];
	let activeService = 'Development';
</script>

<section class="my-[125px] grid">
	<p class="bg-tertiary/20 text-tertiary py-[5px] px-[14px] rounded-md text-base mb-4 m-auto">
		WHAT WE DO
	</p>
	<h2 class="text-center mb-8 leading-tight">
		Powerful websites. <br />
		Made just for you.
	</h2>
	<!-- tabs -->
	<div class="grid grid-cols-2 gap-8 sm:gap-4 sm:grid-cols-4 max-w-4xl m-auto w-full mb-20 sm:mb-8">
		{#each services as service}
			<button
				class="p-4 underline underline-offset-4 text-lg {activeService === service
					? 'text-primary'
					: ''}"
				on:click={() => (activeService = service)}>{service}</button>
		{/each}
	</div>
	<div class="grid grid-cols-1 grid-rows-1">
		{#if activeService === 'Development'}
			<div class="col-start-1 row-start-1">
				<div
					class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-32 items-center"
					in:fade|global={{ duration: 150, delay: 200 }}
					out:fade|global={{ duration: 150 }}>
					<div class="py-14 grid gap-4 justify-items-start">
						<h3>Incredibly fast. <br />Incredibly engaging.</h3>
						<p>With our battle-tested technology stack, your audience never has to wait.</p>
						<Checkmark body="< 1 second load times" />
						<Checkmark body="99.9% uptime in over 3 years" />
						<Checkmark body="Feature rich and always interactive" />
						<Button classes="mt-4" type="link" link="/">Learn More</Button>
					</div>
					<div class="row-start-1 sm:row-start-auto relative justify-self-end">
						<img
							class="relative z-[1]"
							height="395"
							width="475"
							src={WebDevImg}
							alt="Mobile website design with Lighthouse performance score"
							loading="lazy" />
						<ImgBackground classes="absolute -z-0 top-[0%] -right-[20%] w-[150%] h-[110%]" />
					</div>
				</div>
			</div>
		{/if}
		{#if activeService === 'Design'}
			<div class="col-start-1 row-start-1">
				<div
					class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-32 items-center"
					in:fade|global={{ duration: 150, delay: 200 }}
					out:fade|global={{ duration: 150 }}>
					<div class="py-14 grid gap-4 justify-items-start">
						<h3>Design</h3>
						<p>With our battle-tested technology stack, your audience never has to wait.</p>
						<Checkmark body="< 1 second load times" />
						<Checkmark body="99.9% uptime in over 3 years" />
						<Checkmark body="Feature rich and always interactive" />
						<Button classes="mt-4" type="link" link="/">Learn More</Button>
					</div>
					<div class="row-start-1 sm:row-start-auto relative justify-self-end">
						<img
							class="relative z-[1]"
							src={DesignImg}
							alt="Website design in Figma"
							height="320"
							width="582" />
						<ImgBackground classes="absolute -z-0 -top-[30%] -right-[80%] w-[240%] h-[190%]" />
					</div>
				</div>
			</div>
		{/if}
		{#if activeService === 'SEO'}
			<div class="col-start-1 row-start-1">
				<div
					class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-32 items-center"
					in:fade|global={{ duration: 150, delay: 200 }}
					out:fade|global={{ duration: 150 }}>
					<div class="py-14 grid gap-4 justify-items-start">
						<h3>SEO</h3>
						<p>With our battle-tested technology stack, your audience never has to wait.</p>
						<Checkmark body="< 1 second load times" />
						<Checkmark body="99.9% uptime in over 3 years" />
						<Checkmark body="Feature rich and always interactive" />
						<Button classes="mt-4" type="link" link="/">Learn More</Button>
					</div>
					<div class="row-start-1 sm:row-start-auto relative justify-self-end">
						<img
							class="relative z-[1] max-w-[425px] w-full"
							src={SEOImg}
							alt="Graphic showing improved SEO graphs overlaying website design"
							height="512"
							width="500" />
						<ImgBackground classes="absolute -z-0 -top-[10%] -right-[60%] w-[220%] h-[140%]" />
					</div>
				</div>
			</div>
		{/if}
		{#if activeService === 'Web Audits'}
			<div class="col-start-1 row-start-1">
				<div
					class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-32 items-center"
					in:fade|global={{ duration: 150, delay: 200 }}
					out:fade|global={{ duration: 150 }}>
					<div class="py-14 grid gap-4 justify-items-start">
						<h3>Audits</h3>
						<p>With our battle-tested technology stack, your audience never has to wait.</p>
						<Checkmark body="< 1 second load times" />
						<Checkmark body="99.9% uptime in over 3 years" />
						<Checkmark body="Feature rich and always interactive" />
						<Button classes="mt-4" type="link" link="/">Learn More</Button>
					</div>
					<div class="row-start-1 sm:row-start-auto relative justify-self-end">
						<img
							class="relative z-[1] max-w-[425px] w-full"
							src={AuditImg}
							alt="Laptop with audit metric graphics overlayed"
							height="372"
							width="504" />
						<ImgBackground classes="absolute -z-0 -top-[40%] -right-[70%] w-[220%] h-[220%]" />
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>
