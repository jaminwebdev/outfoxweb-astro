<script lang="ts">
	import NavigationCard from '@components/cards/NavigationCard.svelte';

  interface Props {
    clickHandler: () => void
  }

  let {
    clickHandler
  }: Props = $props()
</script>

<div class="grid grid-cols-1 lg:grid-cols-3">
	<NavigationCard lottiePath="/lottie/Pencil_primary.json" link="/blog" clickHandler={clickHandler}>
    {#snippet heading()}
      <span>Blog</span>
    {/snippet}
    {#snippet body()}
      <span>Stay up to date with the latest trends in dev, design and SEO</span>
    {/snippet}
	</NavigationCard>
	<NavigationCard
		lottiePath="/lottie/Lab_Bottle_primary.json"
		bgColor="primary"
		link="/"
		clickHandler={clickHandler}
    classes="pointer-events-none">
      {#snippet heading()}
      <span>Web Design Tools</span><br>
      <span>(coming soon)</span>
      {/snippet}
      {#snippet body()}
        <span>Use our free wireframe system to increase your design velocity.</span>
      {/snippet}
	</NavigationCard>
  <NavigationCard
    lottiePath="/lottie/Magnet_secondary.json"
    bgColor="secondary"
    link="/"
    clickHandler={clickHandler}
    classes="pointer-events-none">
      {#snippet heading()}
      <span>SEO Tools</span><br>
      <span>(coming soon)</span>
      {/snippet}
      {#snippet body()}
        <span>Leverage our free tools to boost your website search performance</span>
      {/snippet}
  </NavigationCard>
</div>
