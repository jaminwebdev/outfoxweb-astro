<script lang="ts">
  import Accordion from '@components/Accordion.svelte'
</script>

<section id="FAQs" class="flex flex-col items-center mt-[125px]">
  <h2 class="text-center mb-5">FAQs</h2>
  <Accordion>
    {#snippet question()}
      <span>How long does SEO take to see results?</span>
    {/snippet}
    {#snippet answer()}
      <span>It depends</span>
    {/snippet}
  </Accordion>
  <Accordion>
    {#snippet question()}
      <span>How many words should a page or blog be?</span>
    {/snippet}
    {#snippet answer()}
      <span>It depends</span>
    {/snippet}
  </Accordion>
  <Accordion>
    {#snippet question()}
      <span>Why isn't my website ranking on Google?</span>
    {/snippet}
    {#snippet answer()}
      <span>It depends</span>
    {/snippet}
  </Accordion>
</section>