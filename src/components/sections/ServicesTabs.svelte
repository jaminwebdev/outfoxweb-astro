<script lang="ts">
	import WebDevImg from '@images/Mobile_Score.png';
	import DesignImg from '@images/Figma_Tablet.png';
	import SEOImg from '@images/Laptop_Metrics_Right.png';
	import AuditImg from '@images/Laptop_Audit.png';

	import ImgBackground from '@components/ImgBackground.svelte';
	import Button from '@components/buttons/Button.svelte';
	import { fade } from 'svelte/transition';
	import Checkmark from '@components/Checkmark.svelte';

  type Services = 'Development' | 'Design' | 'SEO' | 'Web Audits'

	const services: Services[] = ['Development', 'Design', 'SEO', 'Web Audits'];

	let activeService = $state('Development');
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
				onclick={() => (activeService = service)}>{service}</button>
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
						<p>Fast websites that captivate and convert—no waiting, just results.</p>
            <Checkmark body="Improve engagement" />
            <Checkmark body="Reduce bounce rates" />
            <Checkmark body="Feature rich & interactive" />
						<Button classes="mt-4" type="link" link="/web-development">Learn More</Button>
					</div>
					<div class="row-start-1 sm:row-start-auto relative justify-self-end">
						<img
							class="relative z-1"
							height="395"
							width="475"
							src={WebDevImg.src}
							alt="Mobile website design with Lighthouse performance score"
							loading="lazy" />
						<ImgBackground classes="absolute -z-0 -top-[0%] -right-[20%] w-[150%] h-[110%]" />
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
            <h3>Designed for impact. <br />Optimized for results.</h3>
            <p>Engaging, user-friendly designs that great and boost your bottom line.</p>
						<Checkmark body="Increase your traffic" />
						<Checkmark body="Convert more users" />
						<Checkmark body="Increase customer retention" />
						<Button classes="mt-4" type="link" link="/web-design">Learn More</Button>
					</div>
					<div class="row-start-1 sm:row-start-auto relative justify-self-end">
						<img
							class="relative z-1"
							src={DesignImg.src}
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
            <h3>Higher visibility. <br />Higher engagement.</h3>
            <p>Proven SEO techniques that rank your site higher and bring in the right audience.</p>
						<Checkmark body="Reach more users" />
						<Checkmark body="2x your traffic (on average)" />
						<Checkmark body="Get quality users that convert" />
						<Button classes="mt-4" type="link" link="/seo-services">Learn More</Button>
					</div>
					<div class="row-start-1 sm:row-start-auto relative justify-self-end">
						<img
							class="relative z-1 max-w-[425px] w-full"
							src={SEOImg.src}
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
            <h3>Identify problems. <br />Unlock potential.</h3>
            <p>Our audits find hidden issues and offer solutions that boost speed, enhance usability, and increase conversions.</p>
						<Checkmark body="Fix broken links and images" />
						<Checkmark body="Find performance bottlenecks" />
						<Checkmark body="Discover conversion opportunities" />
						<Button classes="mt-4" type="link" link="/website-audit">Learn More</Button>
					</div>
					<div class="row-start-1 sm:row-start-auto relative justify-self-end">
						<img
							class="relative z-1 max-w-[425px] w-full"
							src={AuditImg.src}
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
