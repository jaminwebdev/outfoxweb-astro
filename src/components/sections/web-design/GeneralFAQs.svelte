<script lang="ts">
  import Accordion from '@components/Accordion.svelte'
</script>

<section id="FAQs" class="flex flex-col items-center mt-[125px]">
  <h2 class="text-center mb-5">FAQs</h2>
  <Accordion>
    {#snippet question()}
      <span>How long does design take?</span>
    {/snippet}
    {#snippet answer()}
      <span>It depends</span>
    {/snippet}
  </Accordion>
  <Accordion>
    {#snippet question()}
      <span>How many revisions do you allow?</span>
    {/snippet}
    {#snippet answer()}
      <span>It depends</span>
    {/snippet}
  </Accordion>
  <Accordion>
    {#snippet question()}
      <span>Do you provide copywriting or content as well?</span>
    {/snippet}
    {#snippet answer()}
      <span>It depends</span>
    {/snippet}
  </Accordion>
</section>