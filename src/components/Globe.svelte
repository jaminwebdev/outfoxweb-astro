<script lang="ts">
	import createGlobe from 'cobe';

	let {
		size = 400,
		baseColor = [1, 1, 1],
		markerColor = [0.1, 0.8, 1],
		glowColor = [1, 1, 1],
		markers = [{ location: [37.7749, -122.4194], size: 0.1 }]
	} = $props<{
		size?: number;
		baseColor?: [number, number, number];
		markerColor?: [number, number, number];
		glowColor?: [number, number, number];
		markers?: { location: [number, number]; size: number }[];
	}>();

	let canvas: HTMLCanvasElement;
	let phi = 0;

	$effect(() => {
		if (!canvas) return;

		const globe = createGlobe(canvas, {
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
			globe.destroy();
		};
	});
</script>

<canvas
	bind:this={canvas}
	style="width: {size}px; height: {size}px; aspect-ratio: 1;"
	width={size * 2}
	height={size * 2}>
</canvas>
