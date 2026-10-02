<script lang="ts">
  import InteractiveLottie from '@/components/InteractiveLottie.svelte';

  interface Props {
    lottiePath: string;
    heading: string;
    body: string;
    delay?: number;
    timeLoop?: number;
    speed?: number;
    initialPlay?: boolean;
  }

  let {
    lottiePath,
    heading,
    body,
    delay = 0,
    timeLoop = 4000,
    speed = 1,
    initialPlay = false,
  }: Props = $props();
</script>

<article
  class="grid grid-cols-1 content-start gap-[16px] px-[12px] py-[20px] min-[640px]:grid-cols-[64px_minmax(0,_1fr)] min-[640px]:gap-[20px]"
>
  <div class="h-[72px] w-[72px] min-[640px]:h-[64px] min-[640px]:w-[64px]" aria-hidden="true">
    <InteractiveLottie path={lottiePath} repeat {delay} {timeLoop} {speed} {initialPlay} />
  </div>
  <div class="min-w-0">
    <h3
      class="m-0 text-[22px] [font-weight:650] leading-[1.35] tracking-[-0.035em] text-balance text-[color:var(--ink)]"
    >
      {heading}
    </h3>
    <p class="m-0 mt-[10px] text-[14px] leading-[1.8] text-[color:var(--muted)]">
      {body}
    </p>
  </div>
</article>
