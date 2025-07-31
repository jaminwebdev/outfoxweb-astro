<script lang="ts">
  import Accordion from '@components/Accordion.svelte';
</script>

<section id="FAQs" class="flex flex-col items-center mb-[125px]">
  <h2 class="text-center mb-5">How do we do it?</h2>
  <Accordion isOpen>
    {#snippet question()}
      <span>Discovery</span>
    {/snippet}
    {#snippet answer()}
      <p>
        In order to find out where you're going, we need to figure out where you've been. That's why
        our discovery starts with assessing your current rankings, keywords, UX, and design
        shortcomings.
      </p>
    {/snippet}
  </Accordion>
  <Accordion>
    {#snippet question()}
      <span>Market and competitor analysis</span>
    {/snippet}
    {#snippet answer()}
      <p>
        After exploring your website, we also assess your competition - whether local or online.
        What are they targeting? What is and isn't working for them? What's the market cap on your
        industry?
      </p>
    {/snippet}
  </Accordion>
  <Accordion>
    {#snippet question()}
      <span>Keyword Research</span>
    {/snippet}
    {#snippet answer()}
      <p>
        Identifying and analyzing the words and phrases that people enter into search engines (like
        Google) when looking for information, products, or services related to your business or
        website.
      </p>
      <p class="mt-4">
        The goal of keyword research is to understand the search intent behind these queries and
        select keywords that can help drive relevant traffic to your website, improve visibility in
        search engine results, and optimize content for better ranking. It can also inform us on how
        to restructure your site's content if necessary.
      </p>
    {/snippet}
  </Accordion>
  <Accordion>
    {#snippet question()}
      <span>Content Strategy</span>
    {/snippet}
    {#snippet answer()}
      <p>
        With the previous steps in mind, we move on to optimizing the text, images, videos, and
        other media—designed to achieve specific business goals.
      </p>
      <p class="mt-4">
        In doing so, we're creating valuable, relevant, and consistent content that resonates with a
        target audience, builds brand awareness, drives engagement, and increases conversions.
      </p>
    {/snippet}
  </Accordion>
  <Accordion>
    {#snippet question()}
      <span>On page optimizations</span>
    {/snippet}
    {#snippet answer()}
      <p>
        It's not only the content you see on the screen, but also what search engines see that
        matters. That's why we turn our focus on your title tags, meta descriptions, url structure,
        heading tags, schema markup, and linking opportunities.
      </p>
    {/snippet}
  </Accordion>
  <Accordion>
    {#snippet question()}
      <span>Delivery</span>
    {/snippet}
    {#snippet answer()}
      <p>
        The final package can come in two ways - a report with all our findings and recommendations
        for your team to act on, or we can do the work ourselves. Your choice.
      </p>
    {/snippet}
  </Accordion>
</section>
