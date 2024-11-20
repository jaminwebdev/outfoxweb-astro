<script lang="ts">
  import MultiStepDialog from '@/components/dialogs/MultiStepDialog.svelte';
import Accordion from '@components/Accordion.svelte'
</script>

<section id="FAQs" class="flex flex-col items-center mt-[125px]">
  <h2 class="text-center mb-5">FAQs</h2>
  <Accordion>
    {#snippet question()}
      <span>How long does design take?</span>
    {/snippet}
    {#snippet answer()}
      <p>Much like our <a href='web-development'>web development</a> services, it very much depends. We believe in a fully collaborative process, so the more responsive you are, the faster we can move.</p>
      <p class="mt-4">
        On average a new website design can take anywhere from 2-3 weeks for a simple site to 12+ weeks for a more complex website.
      </p>
    {/snippet}
  </Accordion>
  <Accordion>
    {#snippet question()}
      <span>How many revisions do you allow?</span>
    {/snippet}
    {#snippet answer()}
      <p>
        For both wireframing and design steps, we typically limit revisions to three rounds. 
        That is, we ask that you look over the wireframe or design, sit on it for 24-48 hours, and then provide feedback in one fell swoop.
      </p>
      <p class="mt-4">
        With the provided feedback, we can meet together to discuss each and every item, then we deliver the next iteration for another round of comments/discussion.
        If more work is needed after that, we typically move to an hourly rate, at $120/hr.
      </p>
    {/snippet}
  </Accordion>
  <Accordion>
    {#snippet question()}
      <span>Do you provide copywriting or content as well?</span>
    {/snippet}
    {#snippet answer()}
      <p class="mb-4">
        Absolutely we do. Feel free to contact us below for more:
      </p>
      <MultiStepDialog>
        Contact Us
      </MultiStepDialog>
    {/snippet}
  </Accordion>
</section>