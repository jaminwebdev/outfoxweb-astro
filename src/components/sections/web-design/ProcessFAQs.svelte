<script lang="ts">
  import Accordion from '@components/Accordion.svelte'
</script>

<section id="FAQs" class="flex flex-col items-center mb-[125px]">
  <h2 class="text-center mb-5">How do we do it?</h2>
  <Accordion isOpen>
    {#snippet question()}
      <span>Discovery & Market Analysis</span>
    {/snippet}
    {#snippet answer()}
      <p>
        In order to find out where you're going, we need to figure out where you've been. 
        That's why our discovery starts with assessing your current rankings, keywords, UX, and design shortcomings.
      </p>
      <p class='mt-4'>
        With that in mind, we also assess your competition - whether local or online. What are they targeting? What is and isn't working for them?
      </p>
    {/snippet}
  </Accordion>
  <Accordion>
    {#snippet question()}
      <span>Sitemap and Wireframe</span>
    {/snippet}
    {#snippet answer()}
      <p>
        Leveraging the keywords and discoveries made in the previous step, we create a sitemap of your new site.
        A sitemap for a website is a structured list or blueprint that outlines the pages, sections, and content of the site, helping both users and search engines navigate and understand its structure. It serves as a roadmap for the website's layout and content hierarchy.
      </p>
      <p class="mt-4">
        With the sitemap in hand, we go about creating a wireframe of each individual page. 
        A wireframe is a low-fidelity, visual representation or blueprint of a website or application's layout and structure. It outlines the basic design elements and functionality of the site, such as the placement of navigation menus, buttons, images, text, and other key components, without focusing on visual design details like colors or fonts.
      </p>
    {/snippet}
  </Accordion>
  <Accordion>
    {#snippet question()}
      <span>Design</span>
    {/snippet}
    {#snippet answer()}
      <p>
        The wirefame is then iterated on while following some agreed upon desgin principles, colors, branding, and feel to create a high fidelity design.
        This is the final product you're used to seeing on social media and other platforms.
      </p>
    {/snippet}
  </Accordion>
  <Accordion>
    {#snippet question()}
      <span>Delivery</span>
    {/snippet}
    {#snippet answer()}
      <p>Whether we're delivering a design to your team of developers, or developing your site ourselves, we deliver your design in full with a packet containing all the previous steps.</p>
    {/snippet}
  </Accordion>
</section>

