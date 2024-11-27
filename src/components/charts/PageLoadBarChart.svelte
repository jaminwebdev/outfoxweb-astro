<script lang="ts">
  import { scaleLinear } from 'd3-scale';
  import Rect from './Rect.svelte';

  const AVG_TIME = 175.5;
  const getPageLoadTime = () => {
    if (typeof window !== 'undefined') {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const timing = navigation.domContentLoadedEventEnd - navigation.startTime;
      if (timing > 500) {
        return AVG_TIME
      }
      return timing
    }
    return 0;
  };

  const pageLoad = (getPageLoadTime() || AVG_TIME) / 1000;
  const COLORS = ['stroke-primary', 'stroke-secondary', 'stroke-tertiary']

  let points = $state([
    { title: 'This page', time: 0 },
    { title: 'WordPress', time: 0 },
    { title: 'Avg site', time: 0 },
  ]);

  setTimeout(() => {
    points = [
      { title: 'This page', time: pageLoad },
      { title: 'WordPress', time: 7.5 },
      { title: 'Avg site', time: 9.3 },
    ];
  }, 200);

  // Dimensions, Margins & Scales
  const yTicks = [0, 2, 4, 6, 8, 10];
  const padding = { top: 20, right: 15, bottom: 40, left: 25 };

  let width = $state(500);
  let height = $state(375);


  let xScale = $derived(
    scaleLinear()
      .domain([0, points.length])
      .range([padding.left, width - padding.right])
  );

  let yScale = scaleLinear()
    .domain([0, Math.max.apply(null, yTicks)])
    .range([height - padding.bottom, padding.top]);

    let innerWidth = $derived(width - (padding.left + padding.right));
    let barWidth = $derived(innerWidth / points.length);
</script>

<div class="w-full" bind:clientWidth={width}>
  <svg {height} class='w-full'>
    <!-- 4. Design the bars -->
     <defs>
      {#each points as point, i}
        <pattern id="line-pattern-{i}" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="10" class="{COLORS[i]}" stroke-width="5"></line>
        </pattern>
      {/each}
     </defs>
    <g class="bars">
      {#each points as point, i}
        {@const fill = "url('#line-pattern-{i}')"}
        <Rect
          {i}
          {yScale}
          value={point.time}
          x={xScale(i) + 2}
          width={barWidth * 0.9}
          {fill} />
      {/each}
    </g>
    <!-- Design y axis -->
    <g class="axis y-axis">
      {#each yTicks as tick}
        <g class="tick tick-{tick}" transform="translate(0, {yScale(tick)})">
          <line x2="100%" class='stroke-primary/70'/>
          <text y="-4" class="fill-white text-base font-normal">
            {tick}
          </text>
        </g>
      {/each}
    </g>

    <!-- Design x axis -->
    <g class="axis x-axis">
      {#each points as point, i}
        <g class="tick" transform="translate({xScale(i)}, {height})">
          <text x={barWidth / 2} y="-15" class="text-base md:text-large md:font-semibold fill-white">
            {point.title}
          </text>
        </g>
      {/each}
    </g>
  </svg>
</div>

<style>
  .x-axis .tick text {
    text-anchor: middle;
  }

  .tick text {
    text-anchor: start;
  }

  .tick line {
    stroke-dasharray: 2;
  }

  .tick.tick-0 line {
    display: inline-block;
    stroke-dasharray: 0;
  }
</style>