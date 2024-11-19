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
      <p>For the most part, a website audit covers:</p>
      <ul class="list-inside list-disc">
        <li>A website crawl</li>
        <li>Content and SEO analysis</li>
        <li>UX analysis</li>
        <li>An analysis of your site's analytics</li>
      </ul>
      <p class="mt-4">With these discoveries in hand, we can help you formulate a plan moving forward, and even implement the plan if you so choose.</p>
    {/snippet}
  </Accordion>
  <Accordion>
    {#snippet question()}
      <span>Do you also fix the issues you find?</span>
    {/snippet}
    {#snippet answer()}
      <p>
        It depends - if you don't have a team that already works on your website, and we're familiar with the technology used to build your site, absolutely we can.
      </p>
      <p class="mt-4">
        Otherwise, we're happy to provide a full list of suggestions to help your team fix any an all issues we find.
      </p>
    {/snippet}
  </Accordion>
  <!-- <Accordion>
    {#snippet question()}
      <span>Do you have an example report I can view?</span>
    {/snippet}
    {#snippet answer()}
      <span>It depends</span>
    {/snippet}
  </Accordion> -->
</section>
