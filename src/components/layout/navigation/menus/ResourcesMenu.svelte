<script lang="ts">
	import NavigationCard from '@components/cards/NavigationCard.svelte';

  interface Props {
    clickHandler: () => void
  }

  let {
    clickHandler
  }: Props = $props()
</script>

<div class="grid grid-cols-1 lg:grid-cols-4">
	<NavigationCard lottiePath="/lottie/Pencil_primary.json" link="/blog" clickHandler={clickHandler}>
    {#snippet heading()}
      <span>Blog</span>
    {/snippet}
    {#snippet body()}
      <span>Stay up to date with the latest trends in dev, design and SEO</span>
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
</div>
