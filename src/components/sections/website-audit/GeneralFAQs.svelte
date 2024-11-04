<script lang="ts">
  import Accordion from '@components/Accordion.svelte'
</script>

<section id="generalFAQs" class="flex flex-col items-center mt-[125px]">
  <h2 class="text-center mb-5">FAQs</h2>
  <Accordion isOpen>
    {#snippet question()}
      <span>What does a website audit cover?</span>
    {/snippet}
    {#snippet answer()}
      <span>It depends</span>
    {/snippet}
  </Accordion>
  <Accordion>
    {#snippet question()}
      <span>Do you also fix the issues you find?</span>
    {/snippet}
    {#snippet answer()}
      <span>It depends</span>
    {/snippet}
  </Accordion>
  <Accordion>
    {#snippet question()}
      <span>Do you have an example report I can view?</span>
    {/snippet}
    {#snippet answer()}
      <span>It depends</span>
    {/snippet}
  </Accordion>
</section>
