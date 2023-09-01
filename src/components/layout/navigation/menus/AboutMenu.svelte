<script lang="ts">
	import NavigationCard from '../../../cards/NavigationCard.svelte';
</script>

<div class="grid grid-cols-1 lg:grid-cols-4">
	<NavigationCard lottiePath="/lottie/Conference_primary.json" link="/web-development" on:click>
		<span slot="heading">About the Company</span>
		<span slot="body"> Who we are, where we've been, and where we're going </span>
	</NavigationCard>
	<NavigationCard
		lottiePath="/lottie/Consult_tertiary.json"
		bgColor="tertiary"
		link="/web-design"
		on:click>
		<span slot="heading">Contact Us</span>
		<span slot="body"> We'd love to chat about anything you have in mind </span>
	</NavigationCard>
</div>
