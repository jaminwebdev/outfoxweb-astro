<script lang="ts">
	import NavigationCard from '../../../cards/NavigationCard.svelte';
</script>

<div class="grid grid-cols-1 lg:grid-cols-4">
	<NavigationCard lottiePath="/lottie/Pencil_primary.json" link="/blog" on:click>
		<span slot="heading">Blog</span>
		<span slot="body"> Stay up to date with the latest trends in dev, design and SEO </span>
	</NavigationCard>
	<NavigationCard
		lottiePath="/lottie/Drawing_tertiary.json"
		bgColor="tertiary"
		link="/web-design"
		on:click>
		<span slot="heading">Web Design</span>
		<span slot="body"> Turn your web dud in to a web stud with best UX research and insights </span>
	</NavigationCard>
</div>
