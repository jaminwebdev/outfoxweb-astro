<script lang="ts">
	import Button from '@components/buttons/Button.svelte';
	import { emailRegex } from '@/utils/regex';
	import { slide } from 'svelte/transition';
	// import { Turnstile } from 'svelte-turnstile';

  interface Props {
    turnstile?: string;
  }

  let { turnstile }: Props = $props()

	let name = $state('');
	let email = $state('');
  let message = $state('');

	let nameTouched = $state(false);
	let emailTouched = $state(false);
	let messageTouched = $state(false);

	const MAX_MESSAGE_LENGTH = 500;

	let formInvalid = $state(true);

	let isSubmitting = $state(false);
	let submitFail = $state(false);
	let submitFailMessage = $state('');
	let success = $state(false);

	let turnstile_success = $state(false);

  $effect(() => {
    nameValid(name) && emailValid(email) && messageValid(message)
      ? (formInvalid = false)
      : (formInvalid = true);
  })

	const nameValid = (name: string) => name.length;
	const emailValid = (email: string) => email.length && emailRegex.test(email);
	const messageValid = (message: string) => message.length && message.length < MAX_MESSAGE_LENGTH;

	const inputClasses = 'rounded-xl p-2 bg-body-color text-white';

	const submitForm = async () => {
		try {
			isSubmitting = true;

      console.log({
        name,
        email,
        message
      })
			// const response = await fetch('/api/contact-form', {
			// 	method: 'POST',
			// 	headers: { 'Content-Type': 'application/json' },
			// 	body: JSON.stringify({ name, email, message })
			// });
			// const body = await response.json();

			// if (body.status !== 200 && body.error) {
			// 	throw new Error(body.message, { cause: body.error });
			// }

			success = true;
		} catch (e) {
			submitFail = true;
			isSubmitting = false;
			if (e instanceof Error) {
				console.error(e.cause);
				submitFailMessage = e.message;
			}
		}
	};
</script>

<div class="bg-body-color-secondary/50 p-14 rounded-xl relative z-10">
  {#if success}
    <div class="w-full h-full grid place-content-center">
      <h3 class="text-center">Thank you, {name}!</h3>
      <p class="text-center">We'll be in touch</p>
    </div>
  {:else}
    <div>
      <form class="grid grid-cols-1 gap-4">
        <label class="grid gap-1 font-medium">
          Your name
          <input
            class={inputClasses}
            type="text"
            placeholder="Name"
            bind:value={name}
            onblur={() => (nameTouched = true)} />
          {#if nameTouched && !nameValid(name)}
            <span class="ml-2 text-primary">Please enter your name</span>
          {/if}
        </label>
        <label class="grid gap-1 font-medium">
          Your Email
          <input
            class={inputClasses}
            type="email"
            placeholder="Email"
            bind:value={email}
            onblur={() => (emailTouched = true)} />
          {#if emailTouched && !emailValid(email)}
            <span class="ml-2 text-primary">Please enter a valid email</span>
          {/if}
        </label>
        <label class="grid gap-1 font-medium">
          You Message
          <textarea
            class={inputClasses}
            rows="10"
            placeholder="Message"
            bind:value={message}
            onblur={() => (messageTouched = true)}>
          </textarea>
          {message.length}/750 characters remaining
          {#if messageTouched && !messageValid(message) && message.length <= MAX_MESSAGE_LENGTH}
            <span class="ml-2 text-primary">Please enter your message</span>
          {:else if messageTouched && !messageValid(message) && message.length > MAX_MESSAGE_LENGTH}
            <span class="ml-2 text-primary"
              >Your message is too long. Please keep it under {MAX_MESSAGE_LENGTH} characters in length.</span>
          {/if}
        </label>
        <!-- <Turnstile
          siteKey={turnstile}
          theme="dark"
          on:turnstile-callback={() => (turnstile_success = true)} /> -->
        {#if !formInvalid}
          <span transition:slide>
            <Button
              disabled={formInvalid || isSubmitting}
              flavor="normal"
              btnCallback={submitForm}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </span>
        {/if}
        {#if submitFail}
          <p class="text-primary">{submitFailMessage}</p>
        {/if}
      </form>
    </div>
  {/if}
</div>
