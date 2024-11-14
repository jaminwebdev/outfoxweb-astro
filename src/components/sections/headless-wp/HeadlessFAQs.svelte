<script lang="ts">
  import Accordion from '@components/Accordion.svelte'
</script>

<Accordion isOpen>
  {#snippet question()}
    <span>How long does it take to build a new site?</span>
  {/snippet}
  {#snippet answer()}
    <span>It depends</span>
  {/snippet}
</Accordion>
<Accordion>
  {#snippet question()}
    <span>Do you offer hosting and maintenance</span>
  {/snippet}
  {#snippet answer()}
    <span>It depends</span>
  {/snippet}
</Accordion>
<Accordion>
  {#snippet question()}
    <span>What are Google Core Web Vitals?</span>
  {/snippet}
  {#snippet answer()}
    <span>It depends</span>
  {/snippet}
</Accordion>
<Accordion>
  {#snippet question()}
    <span>Do you offer design and writing services as well?</span>
  {/snippet}
  {#snippet answer()}
    <span>It depends</span>
  {/snippet}
</Accordion>