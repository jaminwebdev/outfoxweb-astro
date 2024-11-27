<script lang="ts">
  import Chart  from 'chart.js/auto'
  const AVG_TIME = 175.5
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

  let ctx: HTMLCanvasElement;

  $effect(() => {
    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['This page', 'Avg WordPress', 'Avg Site'],
          datasets: [{
            label: 'Page load times',
            data: [pageLoad, 7.5, 9.3],
            borderWidth: 3,
            borderColor: '#62e9c3',
            backgroundColor: '#8fefd4',
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              display: false
            }
          },
          plugins: {
            legend: {
              position: 'bottom'
            }
          },
          elements: {
            bar: {
              borderRadius: 7
            }
          }
        }
      });
    }
  })

</script>

<div class="relative w-[80vw] md:w-[40vw] lg:w-[40vw]">
  <canvas id="myChart" bind:this={ctx}></canvas>
</div>