<script lang="ts">
  import { onMount } from 'svelte';

  interface Props {
    id?: string;
  }

  let { id = 'free-scan' }: Props = $props();
  let ready = $state(false);
  let previewShown = $state(false);

  function previewScan(event: SubmitEvent) {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    if (!form.reportValidity()) return;
    // Design preview only: no request, contact capture, or fabricated scan result.
    previewShown = true;
  }

  onMount(() => {
    ready = true;
  });
</script>

<section {id} aria-labelledby={`${id}-heading`} class="mx-auto max-w-295 py-18 lg:py-24">
  <div
    class="grid items-center gap-9 rounded-3xl bg-muted px-6 py-9 sm:px-9 md:grid-cols-[minmax(0,_1.1fr)_minmax(0,_1fr)] md:gap-12 xl:p-13"
  >
    <div class="min-w-0">
      <div class="flex items-center gap-3">
        <span
          class="grid size-11 shrink-0 place-items-center rounded-2xl bg-primary"
          aria-hidden="true"
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <circle cx="11" cy="11" r="7" stroke="var(--ink)" stroke-width="1.8" />
            <path
              d="m16 16 6 6M8 11l2 2 4-4"
              stroke="var(--ink)"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <p
          class="text-xs leading-normal font-semibold tracking-eyebrow text-accent-foreground uppercase"
        >
          A free first look
        </p>
      </div>
      <h2 id={`${id}-heading`} class="mt-5.5 text-section font-black text-balance text-foreground">
        Not sure where<br /><span class="text-accent-foreground">to start?</span>
      </h2>
      <p class="mt-5 max-w-117.5 text-body leading-copy text-muted-foreground">
        A simple website scan could help you spot the basics worth checking before you commit to a
        bigger project.
      </p>
      <p class="mt-6 text-caption font-semibold tracking-label text-accent-foreground uppercase">
        What the scan will cover
      </p>
      <ul class="mt-3 grid gap-3 text-sm leading-relaxed text-foreground">
        {#each ['Page speed and basic technical checks', 'Mobile usability and accessibility signals', 'A short list of useful next steps'] as check}
          <li class="flex items-start gap-3">
            <svg
              class="mt-1 shrink-0"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="9" cy="9" r="9" fill="var(--primary)" />
              <path
                d="m5 9 2.5 2.5L13 6"
                stroke="var(--ink)"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>{check}</span>
          </li>
        {/each}
      </ul>
    </div>

    <div class="min-w-0 rounded-2xl border border-border bg-card p-6 xl:p-7.5">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <h3 class="text-card-title font-demi text-foreground">Get your free website scan</h3>
        <span
          class="rounded-full bg-muted px-2.5 py-1.5 text-2xs font-semibold tracking-eyebrow text-accent-foreground uppercase"
        >
          Coming soon
        </span>
      </div>
      <p id={`${id}-preview-note`} class="mt-3 text-xs leading-relaxed text-muted-foreground">
        Preview only. This form does not send or save your details.
      </p>
      <form
        class="mt-6 grid gap-4.5"
        onsubmit={previewScan}
        aria-describedby={`${id}-preview-note`}
      >
        <div class="grid gap-2">
          <label for={`${id}-website`} class="text-label font-semibold text-foreground"
            >Website URL</label
          >
          <input
            id={`${id}-website`}
            type="url"
            inputmode="url"
            autocomplete="url"
            placeholder="https://yourbusiness.com"
            required
            aria-describedby={`${id}-website-help`}
            class="min-h-13 w-full min-w-0 rounded-md border border-input bg-card px-3.5 py-3 text-sm leading-normal text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          />
          <p id={`${id}-website-help`} class="text-caption text-muted-foreground">
            Include https:// at the beginning.
          </p>
        </div>
        <div class="grid gap-2">
          <label for={`${id}-email`} class="text-label font-semibold text-foreground"
            >Email address</label
          >
          <input
            id={`${id}-email`}
            type="email"
            inputmode="email"
            autocomplete="email"
            placeholder="you@yourbusiness.com"
            required
            class="min-h-13 w-full min-w-0 rounded-md border border-input bg-card px-3.5 py-3 text-sm leading-normal text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          />
        </div>
        <button
          type="submit"
          disabled={!ready}
          class="mt-0.5 flex min-h-13.5 w-full cursor-pointer items-center justify-between gap-4 rounded-md border border-primary bg-primary px-4.5 py-3.5 text-label leading-label font-semibold text-primary-foreground hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring disabled:cursor-default"
        >
          Get my free analysis <span class="text-xl font-normal" aria-hidden="true">↗</span>
        </button>
      </form>
      <p
        role="status"
        aria-live="polite"
        class="text-label leading-relaxed text-accent-foreground"
        class:mt-4={previewShown}
      >
        {#if previewShown}
          The free scan is coming soon. This preview hasn’t sent your website or email address.
        {/if}
      </p>
    </div>
  </div>
</section>
