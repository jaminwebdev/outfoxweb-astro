<script lang="ts">
  import { scaleLinear } from 'd3-scale';

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

  const points = [
    { title: 'This page', time: pageLoad },
    { title: 'WordPress', time: 7.5 },
    { title: 'Avg site', time: 9.3 },
  ];

  // Dimensions, Margins & Scales
  const yTicks = [0, 2, 4, 6, 8, 10];
  const padding = { top: 20, right: 15, bottom: 40, left: 25 };

  let width = '100%';
  let height = 375;

  $: xScale = scaleLinear()
    .domain([0, points.length])
    .range([padding.left, width - padding.right]);

  let yScale = scaleLinear()
    .domain([0, Math.max.apply(null, yTicks)])
    .range([height - padding.bottom, padding.top]);

  $: innerWidth = width - (padding.left + padding.right);
  $: barWidth = innerWidth / points.length;
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
        <rect
          x={xScale(i) + 2}
          y={yScale(point.time)}
          width={barWidth * 0.9}
          height={yScale(0) - yScale(point.time)} 
          style="fill: url('#line-pattern-{i}'); stroke: white; stroke-width: 2;"/>
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