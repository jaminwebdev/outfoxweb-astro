<script lang="ts">
  import Accordion from '@/components/Accordion.svelte'
</script>

<Accordion isOpen>
  {#snippet question()}
    <span>What platforms can you automate?</span>
  {/snippet}
  {#snippet answer()}
    <p>
      We work with CRMs, email marketing tools, forms, scheduling systems, AI APIs, and more. If it has an API, we can automate it.
    </p>
  {/snippet}
</Accordion>
<Accordion>
  {#snippet question()}
    <span>Do I need to know how to code?</span>
  {/snippet}
  {#snippet answer()}
    <p>
      No. We handle the build. You just tell us what’s taking too long—and we’ll streamline it.
    </p>
  {/snippet}
</Accordion>
<Accordion>
  {#snippet question()}
    <span>Is this the same as Zapier?</span>
  {/snippet}
  {#snippet answer()}
    <p>
      We use tools like Zapier and n8n, but go far beyond basic “If this, then that” logic. Our flows can handle branching logic, conditional steps, API calls, and error recovery. 
    </p>
  {/snippet}
</Accordion>