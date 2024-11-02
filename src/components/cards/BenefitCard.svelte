<script lang="ts">
	import InteractiveLottie from "@components/InteractiveLottie.svelte";
  
  interface Props {
		lottiePath: string;
    delay?: number;
    timeLoop?: number;
    speed?: number;
    initialPlay?: boolean;
    heading: string;
    body: string;
	}

	let { 
    lottiePath = '',
    delay = 0,
    timeLoop = 4000,
    speed = 1,
    initialPlay = false,
    heading,
    body
   }: Props = $props();
</script>

<div
	class="bg-body-color-secondary p-[25px] rounded-lg grid gap-2">
	<div class="max-w-[60px]">
		<InteractiveLottie
			path={lottiePath}
			repeat
			bind:delay
			bind:timeLoop
			bind:speed
			bind:initialPlay />
	</div>
    <h3 class="text-xl">
      {heading}
    </h3>
    <p>
      {body}
    </p>
</div>
