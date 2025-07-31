<script lang="ts">
  import MultiStepDialog from '@/components/dialogs/MultiStepDialog.svelte';
  import Accordion from '@components/Accordion.svelte';
</script>

<section id="FAQs" class="flex flex-col items-center mt-[125px]">
  <h2 class="text-center mb-5">FAQs</h2>
  <Accordion>
    {#snippet question()}
      <span>How long does SEO take to see results?</span>
    {/snippet}
    {#snippet answer()}
      <p>
        The time it takes to see results from SEO (Search Engine Optimization) can vary
        significantly depending on several factors. On average, it may take 3 to 6 months to start
        seeing noticeable improvements in rankings, traffic, and conversions. However, here are some
        key elements that influence the timeline:
      </p>
      <ul class="list-disc list-inside mt-2">
        <li>Website age and authority</li>
        <li>Competition</li>
        <li>Keyword difficulty</li>
        <li>Backlinks</li>
        <li>and many more factors</li>
      </ul>
    {/snippet}
  </Accordion>
  <Accordion>
    {#snippet question()}
      <span>How many words should a page or blog be?</span>
    {/snippet}
    {#snippet answer()}
      <p>
        There's no hard and fast rule on blog post length. In general, longer posts do tend to
        perform better, but the most important factor to keep in mind is quality. Well-written and
        well-planned posts will rank higher every time.
      </p>
      <p class="mt-4">
        With that said, on average most posts should be between 750-1,500 words. Blog posts that are
        1,500-3,000 are the longer posts that generally rank well, but only if the content is
        consitently valuable to users.
      </p>
    {/snippet}
  </Accordion>
  <Accordion>
    {#snippet question()}
      <span>Why isn't my website ranking on Google?</span>
    {/snippet}
    {#snippet answer()}
      <p class="mb-4">There could be many, many factors. Let's figure it out together!</p>
      <MultiStepDialog>Let's connect</MultiStepDialog>
    {/snippet}
  </Accordion>
</section>
