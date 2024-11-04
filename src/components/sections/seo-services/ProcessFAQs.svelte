<script lang="ts">
  import Accordion from '@components/Accordion.svelte'
</script>

<section id="FAQs" class="flex flex-col items-center mb-[125px]">
  <h2 class="text-center mb-5">How do we do it?</h2>
  <Accordion isOpen>
    {#snippet question()}
      <span>Discovery</span>
    {/snippet}
    {#snippet answer()}
      <span>It depends</span>
    {/snippet}
  </Accordion>
  <Accordion>
    {#snippet question()}
      <span>Market and competitor analysis</span>
    {/snippet}
    {#snippet answer()}
      <div>
        <p>
          Absolutely! Not only can we manage your hosting needs, but we prefer it. This allows us to
          seamlessly update your website monthly, with 0 effort on your part.
        </p>
        <p class="mt-5">
          On top of that, we don’t just launch your website and leave it up to chance. We monitor your
          website by crawling it every 10 minutes to ensure your pages are always up and available. In
          the event a page goes down, we’re notified in 10 minutes or less.
        </p>
      </div>
    {/snippet}
  </Accordion>
  <Accordion>
    {#snippet question()}
      <span>Keyword Research</span>
    {/snippet}
    {#snippet answer()}
      <span>It depends</span>
    {/snippet}
  </Accordion>
  <Accordion>
    {#snippet question()}
      <span>Content Strategy</span>
    {/snippet}
    {#snippet answer()}
      <span>It depends</span>
    {/snippet}
  </Accordion>
  <Accordion>
    {#snippet question()}
      <span>On page optimizations</span>
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