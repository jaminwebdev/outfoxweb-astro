<script lang="ts">
	import TestimonialCard from '@components/cards/TestimonialCard.svelte';
  import { type Testimonial } from '@/utils/testimonials';

  interface Props {
    testimonials: [Testimonial, Testimonial]
  }
  let { testimonials }: Props = $props()
</script>

<section
	class="rounded-xl px-6 py-12 md:pt-[60px] md:px-[50px] md:pb-[150px] grid grid-cols-1 lg:grid-cols-2 gap-16 content-center bg-cover bg-center"
	style="background-image: url('/images/Testimonials_Bg.webp')">
	<div class="grid gap-4">
		<h3 class="text-4xl">What our happy clients have to say</h3>
		<p>We pride ourselves in our clients’ ongoing successes.</p>
	</div>
	<div class="relative grid justify-center gap-10 sm:gap-5">
		<TestimonialCard
			testimonial={testimonials[0]}
			classes="lg:absolute lg:-top-[90%] lg:-right-[5%] max-w-[480px]" />
		<TestimonialCard
			testimonial={testimonials[1]}
			classes="lg:absolute lg:top-[30%] max-w-[480px]" />
	</div>
</section>
