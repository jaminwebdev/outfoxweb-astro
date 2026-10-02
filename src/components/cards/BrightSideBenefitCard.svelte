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

<article class="grid content-start gap-1 px-[12px] py-[20px] text-left">
  <div class="flex items-center gap-[12px] min-[1100px]:min-h-[60px]">
    <div class="h-[40px] w-[40px] shrink-0" aria-hidden="true">
      <InteractiveLottie path={lottiePath} repeat {delay} {timeLoop} {speed} {initialPlay} />
    </div>
    <h3
      class="m-0 min-w-0 text-[22px] [font-weight:650] leading-[1.35] tracking-[-0.035em] text-balance text-[color:var(--ink)]"
    >
      {heading}
    </h3>
  </div>
  <p class="m-0 text-[14px] leading-[1.8] text-[color:var(--muted)]">
    {body}
  </p>
</article>
