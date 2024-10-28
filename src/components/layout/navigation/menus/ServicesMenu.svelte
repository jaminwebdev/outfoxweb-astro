<script lang="ts">
	import NavigationCard from '@components/cards/NavigationCard.svelte';
  interface Props {
    clickHandler: () => void
  }

  let {
    clickHandler
  }: Props = $props()
</script>

<div class="grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-0">
	<NavigationCard lottiePath="/lottie/Computer_primary.json" link="/web-development" clickHandler={clickHandler}>
    {#snippet heading()}
      <span>Web Development</span>
    {/snippet}
    {#snippet body()}
      <span>Decrease load times and increase customer conversions with a new site</span>
    {/snippet}
	</NavigationCard>
	<NavigationCard
		lottiePath="/lottie/Drawing_tertiary.json"
		bgColor="tertiary"
		link="/web-design"
		clickHandler={clickHandler}>
      {#snippet heading()}
        <span>Web Design</span>
      {/snippet}
      {#snippet body()}
        <span>Turn your web dud in to a web stud with best UX research and insights</span>
      {/snippet}
	</NavigationCard>
	<NavigationCard
		lottiePath="/lottie/BarChart_secondary.json"
		bgColor="secondary"
		link="/seo-services"
		clickHandler={clickHandler}>
      {#snippet heading()}
        <span>SEO</span>
      {/snippet}
      {#snippet body()}
        <span>Using the best UX research and insights, we can turn your web dud in to a web stud</span>
      {/snippet}
	</NavigationCard>
	<NavigationCard
		lottiePath="/lottie/Document_orange.json"
		bgColor="orange"
		link="/website-audit"
		clickHandler={clickHandler}>
      {#snippet heading()}
        <span>Web Audit</span>
      {/snippet}
      {#snippet body()}
        <span>Using the best UX research and insights, we can turn your web dud in to a web stud.</span>
      {/snippet}
	</NavigationCard>
</div>
