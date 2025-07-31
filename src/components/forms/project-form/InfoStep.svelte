<script lang="ts">
  import Button from '@components/buttons/Button.svelte';
  import { fade } from 'svelte/transition';
  import { z } from 'zod';

  interface Props {
    name: string;
    email: string;
    handleClick: (direction: 'prev' | 'next') => void;
    submitForm: () => void;
  }

  let { name = $bindable(), email = $bindable(), handleClick, submitForm }: Props = $props();

  let nameTouched = $state(false);
  let nameBlurred = $state(false);
  let emailTouched = $state(false);
  let emailBlurred = $state(false);

  const emailSchema = z.string().email();
  let emailValid = $derived(emailSchema.safeParse(email));
</script>

<div class="grid gap-4 w-full mb-8">
  <label>
    What's your name, friend?
    <input
      type="text"
      bind:value={name}
      onfocus={() => (nameTouched = true)}
      onblur={() => (nameBlurred = true)}
      class="p-2 rounded-lg w-full bg-body-color"
    />
    {#if name.length < 1 && nameTouched && nameBlurred}
      <p transition:fade|global class="text-secondary">We need to know what to call you 😀.</p>
    {/if}
  </label>
  <label>
    What's your email {name}?
    <input
      type="email"
      bind:value={email}
      onfocus={() => (emailTouched = true)}
      onblur={() => (emailBlurred = true)}
      class="p-2 rounded-lg w-full bg-body-color"
    />
    {#if !emailValid.success && emailTouched && emailBlurred}
      <p transition:fade|global class="text-secondary">
        It's hard to email you without an email 😎.
      </p>
    {/if}
  </label>
</div>

<div class="grid grid-cols-[repeat(2,max-content)] justify-between gap-3">
  <Button flavor="ghost" color="tertiary" btnCallback={() => handleClick('prev')}>Prev</Button>
  {#if name.length > 0 && emailValid.success}
    <span transition:fade|global>
      <Button btnCallback={submitForm}>Submit</Button>
    </span>
  {/if}
</div>
