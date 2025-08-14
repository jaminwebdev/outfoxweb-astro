<script lang="ts">
  import { cn } from '@/lib/utils';
  import type { Testimonial } from '@/utils/testimonials';

  interface Props {
    testimonial: Testimonial;
    classes: string;
  }

  let { testimonial, classes }: Props = $props();
</script>

<div
  class={cn(
    'rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-[85px_1fr] gap-0 sm:gap-5 items-center bg-body-color-secondary',
    classes,
  )}
>
  <div
    class="rounded-full overflow-hidden w-[80px] h-[80px] -mt-[65px] sm:mt-0 justify-self-center sm:justify-self-start"
  >
    <img src={testimonial.imgPath} alt="{testimonial.name}'s headshot" class="object-cover" />
  </div>
  <div>
    <h4 class="text-center sm:text-left mt-2 sm:mt-0 mb-4 sm:mb-0">{testimonial.name}</h4>
    <p>{testimonial.body}</p>
  </div>
</div>
