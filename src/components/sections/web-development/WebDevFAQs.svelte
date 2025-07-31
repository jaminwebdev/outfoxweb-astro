<script lang="ts">
  import MultiStepDialog from '@/components/dialogs/MultiStepDialog.svelte';
  import Accordion from '@components/Accordion.svelte';
</script>

<Accordion isOpen>
  {#snippet question()}
    <span>How long does it take to build a new site?</span>
  {/snippet}
  {#snippet answer()}
    <p>
      It depends. Our process is very much a collaborative one, where you're involved in every
      decision every step of the way. The more responsive you are, the faster we can move. In these
      situations, it can be as little as 8 weeks for "simple" sites.
    </p>
    <p class="my-4">
      For more complex & complicated websites with a large array of business needs, it can be
      anywhere from 12-36 weeks. The spectrum is wide here, so it's difficult to say.
    </p>
    <p>
      On the other hand, for extremely simple sites that can be built with a hand-selected template
      in mind, it can cut these times down to a few weeks.
    </p>
  {/snippet}
</Accordion>
<Accordion>
  {#snippet question()}
    <span>Do you offer hosting and maintenance</span>
  {/snippet}
  {#snippet answer()}
    <p>
      We do in fact offer hosting and maintenance for as little as $100/mo and as much as $300/mo
      for websites with higher demands. What's included? I'm glad you asked:
    </p>
    <ul class="list-disc list-inside mt-2">
      <li>
        <strong>Uptime monitoring 📊:</strong>
        We sick a robot on your site every 5 minutes to make sure none of your pages are down or unresponsive.
        This means that your website would be down at most 5 minutes before we knew something was awry.
      </li>
      <li>
        <strong>Monthly security scans and upgrades 🔐:</strong>
        We update website dependencies and plugins on a monthly basis (at least). We perform these updates
        in an isolated sandbox as to not break anything before we deploy to your live website.
      </li>
      <li>
        <strong>Testing, testing 1-2-3 🎤:</strong>
        Our development process includes writing tests that run befor every deployment, so we know whatever
        it is we're deploying, it's not breaking your website.
      </li>
    </ul>
  {/snippet}
</Accordion>
<Accordion>
  {#snippet question()}
    <span>What are Google Core Web Vitals?</span>
  {/snippet}
  {#snippet answer()}
    <p>
      Google’s Core Web Vitals are a set of user-centered metrics that measure how well a webpage
      performs in terms of speed, responsiveness, and visual stability. These include Largest
      Contentful Paint (LCP), which measures loading performance, First Input Delay (FID), which
      measures interactivity, and Cumulative Layout Shift (CLS), which gauges visual stability.
    </p>
    <p class="mt-4">
      Together, these metrics help Google assess the overall user experience of a website.
      Optimizing for Core Web Vitals is crucial for improving both user satisfaction and search
      engine rankings, as Google now factors these scores into its search algorithm.
    </p>
  {/snippet}
</Accordion>
<Accordion>
  {#snippet question()}
    <span>Do you offer design and writing services as well?</span>
  {/snippet}
  {#snippet answer()}
    <p>
      Absolutely we do. In fact, having everything done in-house makes it a far more seamless and
      friction-free process.
    </p>
    <p class="my-4">
      Check out our design services <a href="/web-design">here</a>, or
    </p>
    <MultiStepDialog color="tertiary">Contact us here</MultiStepDialog>
  {/snippet}
</Accordion>
