<script lang="ts">
	import NavigationCard from '@components/cards/NavigationCard.svelte';
  interface Props {
    clickHandler: () => void
  }

  let {
    clickHandler
  }: Props = $props()
</script>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-0">
	<NavigationCard lottiePath="/lottie/Computer_primary.json" link="/web-development" clickHandler={clickHandler} >
    {#snippet heading()}
      <span>Web Development</span>
    {/snippet}
    {#snippet body()}
      <span>High-performance, custom websites tailored to your business needs</span>
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
        <span>Stunning, user-friendly designs that enhance your online presence</span>
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
        <span>Improve search engine rankings and drive organic traffic</span>
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
        <span>A comprehensive analysis of your website's performance</span>
    {/snippet}
	</NavigationCard>
  <NavigationCard 
    lottiePath="/lottie/shootingStar_primary.json" 
    link="/web-development" 
    clickHandler={clickHandler} 
    classes="pointer-events-none">
    {#snippet heading()}
      <span>Website in a Weekend</span>
      <br>
      <span class="text-base">(Coming Soon)</span>
    {/snippet}
    {#snippet body()}
      <span>Launch a professional website quickly (48-72 hours)</span>
    {/snippet}
	</NavigationCard>
	<NavigationCard
		lottiePath="/lottie/servers_tertiary.json"
		bgColor="tertiary"
		link="/web-design"
		clickHandler={clickHandler}
    classes="pointer-events-none">
      {#snippet heading()}
        <span>Automations</span>
        <br>
        <span class="text-base">(Coming Soon)</span>
      {/snippet}
      {#snippet body()}
        <span>Streamline your business with custom automations</span>
    {/snippet}
	</NavigationCard>
</div>
