<script lang="ts">
  import Accordion from '@components/Accordion.svelte'
</script>

<section id="processFAQs" class="flex flex-col items-center mb-[125px]">
  <h2 class="text-center mb-5">How do we do it?</h2>
  <Accordion isOpen>
    {#snippet question()}
      <span>1. Website crawl</span>
    {/snippet}
    {#snippet answer()}
      <p>
        First we crawl your entire website looking for broken links, images, and improperly structured HTML-related problems.
        Nothing else matters as much as fixing broken links, identifying missing pages or images, and overall getting a survey of where your site stands.
      </p>
    {/snippet}
  </Accordion>
  <Accordion>
    {#snippet question()}
      <span>2. UX Analysis</span>
    {/snippet}
    {#snippet answer()}
      <p>
        A UX (User Experience) analysis is a comprehensive evaluation of how users interact with a website or app. 
        It examines the overall usability, navigation, design, and functionality to identify any pain points or barriers that might hinder a positive user experience. 
      </p>
      <p class="mt-4">
        The goal is to uncover areas where users may get frustrated, confused, or leave the site, and recommend improvements to make the experience smoother, more intuitive, and engaging. By analyzing user behavior and feedback, a UX analysis helps create a more efficient and enjoyable experience, ultimately improving conversion rates and customer satisfaction.
      </p>
    {/snippet}
  </Accordion>
  <Accordion>
    {#snippet question()}
      <span>3. Content and SEO Analysis</span>
    {/snippet}
    {#snippet answer()}
      <p>
        Leveraging the website crawl, we can identify pages with "thin content" (low word count), missing h1 tags, slow load times, and poorly written page tiles & meta descriptions.
      </p>
      <p class="mt-4">
        With our expertise, we can formulate a plan to enhance your website's SEO content in the present and going forward.
      </p>
    {/snippet}
  </Accordion>
  <Accordion>
    {#snippet question()}
      <span>4. Analytics Analysis</span>
    {/snippet}
    {#snippet answer()}
      <p>
        We also use your past and present analytics to help with figuring out where users are bouncing from your site, how they're using your navigation, and discover unforeseen wins lurking beneath.
      </p>
    {/snippet}
  </Accordion>
</section>

