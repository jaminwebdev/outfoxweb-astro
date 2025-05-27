<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import createGlobe from 'cobe';

  export let size: number = 400;
  export let baseColor: [number, number, number] = [1, 1, 1];
  export let markerColor: [number, number, number] = [0.1, 0.8, 1];
  export let glowColor: [number, number, number] = [1, 1, 1];
  export let markers: { location: [number, number], size: number }[] = [
    { location: [37.7749, -122.4194], size: 0.1 }
  ];

  let canvas: HTMLCanvasElement;
  let globe: any;
  let phi = 0;

  onMount(() => {
    let width = 0;
    let animationFrame: number;

    function onResize() {
      width = size;
      canvas.width = width * devicePixelRatio;
      canvas.height = width * devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${width}px`;
    }

    window.addEventListener('resize', onResize);
    onResize();

    globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: size * 2,
      height: size * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor,
      markerColor,
      glowColor,
      markers,
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      }
    });

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrame);
      globe.destroy();
    };
  });

  onDestroy(() => {
    if (globe) globe.destroy();
  });
</script>

<canvas bind:this={canvas} style="width: {size}px; height: {size}px; aspect-ratio: 1;" />
