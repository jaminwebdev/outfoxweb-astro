<script lang="ts">
  import Button from '@components/buttons/Button.svelte';
  import { emailRegex } from '@/utils/regex';
  import { slide } from 'svelte/transition';
  // import { Turnstile } from 'svelte-turnstile';

  // interface Props {
  //   turnstile?: string;
  // }

  // let { turnstile }: Props = $props()
  let formState = $state({
    name: '',
    nameTouched: false,
    email: '',
    emailTouched: false,
    message: '',
    messageTouched: false,
  });

  const MAX_MESSAGE_LENGTH = 500;

  type FormStatus = 'initial' | 'submitting' | 'fail' | 'success';
  let formStatus: FormStatus = $state('initial');

  let submitFailMessage = $state('');

  // let turnstile_success = $state(false);

  const nameValid = (name: string) => name.length;
  const emailValid = (email: string) => email.length && emailRegex.test(email);
  const messageValid = (message: string) => message.length && message.length < MAX_MESSAGE_LENGTH;

  let formValid = $derived(
    nameValid(formState.name) && emailValid(formState.email) && messageValid(formState.message),
  );

  const inputClasses = 'rounded-xl p-3 bg-body-color text-white';

  const submitForm = async () => {
    try {
      formStatus = 'submitting';

      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });
      const body = await response.json();

      if (body.status !== 200 && body.error) {
        throw new Error(body.message, { cause: body.error });
      }

      formStatus = 'success';
    } catch (e) {
      formStatus = 'fail';
      if (e instanceof Error) {
        console.error(e.cause);
        submitFailMessage = e.message;
      }
    }
  };
</script>

<div class="bg-body-color-secondary/50 p-14 rounded-xl relative z-10">
  {#if formStatus === 'success'}
    <div class="w-full h-full grid place-content-center">
      <h3 class="text-center">Thank you, {formState.name}!</h3>
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
            bind:value={formState.name}
            onblur={() => (formState.nameTouched = true)}
          />
          {#if formState.nameTouched && !nameValid(formState.name)}
            <span class="ml-2 text-primary">Please enter your name</span>
          {/if}
        </label>
        <label class="grid gap-1 font-medium">
          Your Email
          <input
            class={inputClasses}
            type="email"
            placeholder="Email"
            bind:value={formState.email}
            onblur={() => (formState.emailTouched = true)}
          />
          {#if formState.emailTouched && !emailValid(formState.email)}
            <span class="ml-2 text-primary">Please enter a valid email</span>
          {/if}
        </label>
        <label class="grid gap-1 font-medium">
          You Message
          <textarea
            class={inputClasses}
            rows="10"
            placeholder="Message"
            bind:value={formState.message}
            onblur={() => (formState.messageTouched = true)}
          >
          </textarea>
          {formState.message.length}/750 characters remaining
          {#if formState.messageTouched && !messageValid(formState.message) && formState.message.length <= MAX_MESSAGE_LENGTH}
            <span class="ml-2 text-primary">Please enter your message</span>
          {:else if formState.messageTouched && !messageValid(formState.message) && formState.message.length > MAX_MESSAGE_LENGTH}
            <span class="ml-2 text-primary"
              >Your message is too long. Please keep it under {MAX_MESSAGE_LENGTH} characters in length.</span
            >
          {/if}
        </label>
        <!-- <Turnstile
          siteKey={turnstile}
          theme="dark"
          on:turnstile-callback={() => (turnstile_success = true)} /> -->
        {#if formValid}
          <span transition:slide>
            <Button
              disabled={!formValid || formStatus === 'submitting'}
              flavor="normal"
              btnCallback={submitForm}
            >
              {formStatus === 'submitting' ? 'Submitting...' : 'Submit'}
            </Button>
          </span>
        {/if}
        {#if formStatus == 'fail'}
          <p class="text-primary">{submitFailMessage}</p>
        {/if}
      </form>
    </div>
  {/if}
</div>
