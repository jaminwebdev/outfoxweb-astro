<script lang="ts">
  import Accordion from '@/components/Accordion.svelte';
</script>

<Accordion isOpen>
  {#snippet question()}
    <span>What can you deliver in a weekend?</span>
  {/snippet}
  {#snippet answer()}
    <p>
      Most projects include up to 5–7 core pages, basic automations (forms, scheduling, analytics),
      and SEO optimization.
    </p>
  {/snippet}
</Accordion>
<Accordion>
  {#snippet question()}
    <span>Can I expand the site later?</span>
  {/snippet}
  {#snippet answer()}
    <p>
      Absolutely. We design with scalability in mind, so adding pages, features, or automations is
      simple.
    </p>
  {/snippet}
</Accordion>
