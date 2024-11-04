<script lang="ts">
  import Accordion from '@components/Accordion.svelte'
</script>

<section id="FAQs" class="flex flex-col items-center mb-[125px]">
  <h2 class="text-center mb-5">How do we do it?</h2>
  <Accordion isOpen>
    {#snippet question()}
      <span>Why isn't my website ranking on Google?</span>
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
  <Accordion>
    {#snippet question()}
      <span>Why isn't my website ranking on Google?</span>
    {/snippet}
    {#snippet answer()}
      <span>It depends</span>
    {/snippet}
  </Accordion>
  <Accordion>
    {#snippet question()}
      <span>Wireframing & revisions</span>
    {/snippet}
    {#snippet answer()}
      <span>It depends</span>
    {/snippet}
  </Accordion>
  <Accordion>
    {#snippet question()}
      <span>Design & Revisions</span>
    {/snippet}
    {#snippet answer()}
      <span>It depends</span>
    {/snippet}
  </Accordion>
  <Accordion>
    {#snippet question()}
      <span>Delivery</span>
    {/snippet}
    {#snippet answer()}
      <span>It depends</span>
    {/snippet}
  </Accordion>
</section>

