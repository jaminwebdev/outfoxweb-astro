<script lang="ts">
	import { slide } from 'svelte/transition';
	import ProjectStep from './ProjectStep.svelte';
	import DescriptionStep from './DescriptionStep.svelte';
	import InfoStep from './InfoStep.svelte';
	import { Lottie } from 'lottie-svelte';

	interface Props {
		classes?: string;
		closeCallback?: () => void;
	}
  type ProjectTypes = 'New website' | 'SEO' | 'Design' | 'Other';

	let { classes, closeCallback }: Props = $props();

	const steps = ['project', 'description', 'info'];
	let currentStep = $state(0);
	// form fields
	let projectType = $state<ProjectTypes[]>([]);
	let description = $state('');
	let name = $state('');
	let email = $state('');

	let formStatus: 'initial' | 'submitting' | 'success' | 'error' = $state('initial');
  let errorMessage = $state<string>()
	let selfClose = $state(12);
	let closeInterval: ReturnType<typeof setInterval>;

	const submitForm = async () => {
    try {
      formStatus = 'submitting';

      const formItems = {
        projectType: projectType.join(', '),
        description,
        name,
        email
      };
      const response = await fetch('/api/project-form', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formItems)
        });

      const body = await response.json();

      if (body.status !== 200 && body.error) {
        throw new Error(body.message, { cause: body.error });
      }

      setTimeout(() => (formStatus = 'success'), 2000);
      closeInterval = setInterval(() => selfClose--, 1000);
    } catch (e) {
			formStatus = 'error';
			if (e instanceof Error) {
				console.error(e.cause);
				errorMessage = e.message;
			}
		}
	};

	const changeStep = (direction: 'prev' | 'next') => {
		if (direction === 'next' && currentStep < steps.length - 1) {
			currentStep++;
		}
		if (direction === 'prev' && currentStep >= 1) {
			currentStep--;
		}
	};

	$effect(() => {
		if (selfClose <= -1) {
			clearInterval(closeInterval);
			if (closeCallback) closeCallback();
		}
	});
</script>

<div class={classes}>

  {#if formStatus === 'error'}
    <div transition:slide>
      <p>{errorMessage}</p>
    </div>
  {/if}

	{#if formStatus === 'submitting'}
		<div in:slide={{ duration: 300 }}>
			<div class="max-w-[350px] block mx-auto">
				<Lottie path="/lottie/Loading_Droplet.json" loop={false} />
			</div>
			<p class="text-center">Submitting...</p>
		</div>
	{/if}

	{#if formStatus === 'success'}
		<div class="grid justify-center">
			{#if selfClose > 0}
				<div>
					<div class="max-w-[350px] block mx-auto">
						<Lottie path="/lottie/Successful.json" loop={false} />
					</div>
					<h3 class="text-center">Hooray we'll be in touch</h3>
					<span class="text-center">This message will self destruct in {selfClose} seconds 💣</span>
				</div>
			{:else}
				<div class="max-w-[350px]">
					<Lottie path="/lottie/Bubbles.json" loop={false} height={200} />
				</div>
			{/if}
		</div>
	{/if}

	{#if formStatus === 'initial'}
		<form class="w-full">
			{#if steps[currentStep] === 'project'}
				<div in:slide={{ duration: 300 }} out:slide={{ duration: 250 }}>
					<ProjectStep handleClick={changeStep} bind:projectType />
				</div>
			{:else if steps[currentStep] === 'description'}
				<div in:slide={{ duration: 300 }} out:slide={{ duration: 250 }}>
					<DescriptionStep handleClick={changeStep} bind:description />
				</div>
			{:else if steps[currentStep] === 'info'}
				<div in:slide={{ duration: 300 }} out:slide={{ duration: 250 }}>
					<InfoStep handleClick={changeStep} {submitForm} bind:name bind:email />
				</div>
			{/if}
		</form>
	{/if}
</div>
