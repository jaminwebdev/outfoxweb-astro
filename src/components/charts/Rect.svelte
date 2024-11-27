<!-- Rect.svelte -->
<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { interpolate } from 'd3-interpolate';

  let { x, value, yScale, width, height, i, fill } = $props()

  const tweenParams = {
    delay: 300 + i * 50,
    duration: 300,
    interpolate,
    easing: cubicOut
  };

  const tY = tweened(undefined, tweenParams);
  const tFill = tweened(undefined, { ...tweenParams, delay: 800 + i * 50 });

  $effect(() => {
    tY.set(value);
  })

  $effect(() => {
    tFill.set(fill);
  })
</script>

<rect
  {x}
  {width}
  y={yScale($tY)}
  height={yScale(0) - yScale($tY)}
  style="fill: url('#line-pattern-{i}'); stroke: white; stroke-width: 2;"/>