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

<article class="grid content-start gap-1 px-3 py-5 text-left">
  <div class="flex items-center gap-2.5 xl:min-h-15">
    <div class="size-10 shrink-0" aria-hidden="true">
      <InteractiveLottie path={lottiePath} repeat {delay} {timeLoop} {speed} {initialPlay} />
    </div>
    <h3 class="min-w-0 text-benefit font-demi text-balance text-foreground">
      {heading}
    </h3>
  </div>
  <p class="text-base leading-copy text-muted-foreground">
    {body}
  </p>
</article>
