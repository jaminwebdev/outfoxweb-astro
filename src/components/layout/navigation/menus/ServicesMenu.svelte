<script lang="ts">
	import NavigationCard from '@components/cards/NavigationCard.svelte';
</script>

<div class="grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-0">
	<NavigationCard lottiePath="/lottie/Computer_primary.json" link="/web-development" on:click>
		<span slot="heading">Web Development</span>
		<span slot="body"> Decrease load times and increase customer conversions with a new site </span>
	</NavigationCard>
	<NavigationCard
		lottiePath="/lottie/Drawing_tertiary.json"
		bgColor="tertiary"
		link="/web-design"
		on:click>
		<span slot="heading">Web Design</span>
		<span slot="body"> Turn your web dud in to a web stud with best UX research and insights </span>
	</NavigationCard>
	<NavigationCard
		lottiePath="/lottie/BarChart_secondary.json"
		bgColor="secondary"
		link="/seo-services"
		on:click>
		<span slot="heading">SEO</span>
		<span slot="body">
			Using the best UX research and insights, we can turn your web dud in to a web stud.
		</span>
	</NavigationCard>
	<NavigationCard
		lottiePath="/lottie/Document_orange.json"
		bgColor="orange"
		link="/website-audit"
		on:click>
		<span slot="heading">Web Audit</span>
		<span slot="body">
			Using the best UX research and insights, we can turn your web dud in to a web stud.
		</span>
	</NavigationCard>
</div>
