<script lang="ts">
  import Accordion from '@components/Accordion.svelte'
</script>

<section id="processFAQs" class="flex flex-col items-center mb-[125px]">
  <h2 class="text-center mb-5">How do we do it?</h2>
  <Accordion isOpen>
    {#snippet question()}
      <span>Website crawl</span>
    {/snippet}
    {#snippet answer()}
      <span>It depends</span>
    {/snippet}
  </Accordion>
  <Accordion>
    {#snippet question()}
      <span>UX Analysis</span>
    {/snippet}
    {#snippet answer()}
      <span>It depends</span>
    {/snippet}
  </Accordion>
  <Accordion>
    {#snippet question()}
      <span>Content and SEO Analysis</span>
    {/snippet}
    {#snippet answer()}
      <span>It depends</span>
    {/snippet}
  </Accordion>
  <Accordion>
    {#snippet question()}
      <span>Analytics Analysis</span>
    {/snippet}
    {#snippet answer()}
      <span>It depends</span>
    {/snippet}
  </Accordion>
</section>

