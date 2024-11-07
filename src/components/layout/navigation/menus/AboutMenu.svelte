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
	<NavigationCard lottiePath="/lottie/Conference_primary.json" link="/about" clickHandler={clickHandler}>
    {#snippet heading()}
      <span>About the Company</span>
    {/snippet}
    {#snippet body()}
		  <span> Who we are, where we've been, and where we're going </span>
    {/snippet}
	</NavigationCard>
	<NavigationCard
		lottiePath="/lottie/Consult_tertiary.json"
		bgColor="tertiary"
		link="/contact"
		clickHandler={clickHandler}>
      {#snippet heading()}
        <span>Contact Us</span>
      {/snippet}
      {#snippet body()}
        <span> We'd love to chat about anything you have in mind </span>
      {/snippet}
	</NavigationCard>
</div>
