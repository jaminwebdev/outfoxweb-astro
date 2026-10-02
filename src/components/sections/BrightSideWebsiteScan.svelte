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

<section
  {id}
  aria-labelledby={`${id}-heading`}
  class="mx-auto py-[72px] min-[640px]:[width:min(100%_-_80px,_1180px)] min-[900px]:py-[95px]"
>
  <div
    class="grid items-center gap-[36px] rounded-[24px] bg-[var(--green-pale)] px-[24px] py-[36px] min-[640px]:px-[36px] min-[800px]:grid-cols-[minmax(0,_1.1fr)_minmax(0,_1fr)] min-[800px]:gap-[48px] min-[1100px]:p-[52px]"
  >
    <div class="min-w-0">
      <div class="flex items-center gap-[12px]">
        <span
          class="grid h-[44px] w-[44px] shrink-0 place-items-center rounded-[14px] bg-[var(--brand-primary)]"
          aria-hidden="true"
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <circle cx="11" cy="11" r="7" stroke="var(--on-light)" stroke-width="1.8" />
            <path
              d="m16 16 6 6M8 11l2 2 4-4"
              stroke="var(--on-light)"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <p
          class="m-0 text-[12px] font-semibold uppercase tracking-[0.045em] leading-[1.5] text-[color:var(--accent-on-light)]"
        >
          A free first look
        </p>
      </div>
      <h2
        id={`${id}-heading`}
        class="m-0 mt-[22px] [font-family:var(--sans)] [font-size:clamp(30px,_3.3vw,_43px)] font-black tracking-[-0.055em] leading-[1.13] text-balance text-[color:var(--ink)]"
      >
        Not sure where<br /><span class="text-[color:var(--accent-on-light)]">to start?</span>
      </h2>
      <p class="m-0 mt-[20px] max-w-[470px] text-[15px] leading-[1.8] text-[color:var(--muted)]">
        A simple website scan could help you spot the basics worth checking before you commit to a
        bigger project.
      </p>
      <p
        class="m-0 mt-[24px] text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--accent-on-light)]"
      >
        What the scan will cover
      </p>
      <ul
        class="m-0 mt-[12px] grid gap-[12px] p-0 list-none text-[14px] leading-[1.6] text-[color:var(--ink)]"
      >
        {#each ['Page speed and basic technical checks', 'Mobile usability and accessibility signals', 'A short list of useful next steps'] as check}
          <li class="flex items-start gap-[12px]">
            <svg
              class="mt-[3px] shrink-0"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="9" cy="9" r="9" fill="var(--brand-primary)" />
              <path
                d="m5 9 2.5 2.5L13 6"
                stroke="var(--on-light)"
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

    <div
      class="min-w-0 rounded-[18px] [border:1px_solid_var(--rule)] bg-[var(--paper)] p-[24px] min-[1100px]:p-[30px]"
    >
      <div class="flex flex-wrap items-center justify-between gap-[12px]">
        <h3
          class="m-0 text-[21px] [font-weight:650] tracking-[-0.035em] leading-[1.35] text-[color:var(--ink)]"
        >
          Get your free website scan
        </h3>
        <span
          class="rounded-full bg-[var(--green-pale)] px-[10px] py-[5px] text-[10px] font-semibold uppercase tracking-[0.04em] text-[color:var(--accent-on-light)]"
        >
          Coming soon
        </span>
      </div>
      <p
        id={`${id}-preview-note`}
        class="m-0 mt-[12px] text-[12px] leading-[1.65] text-[color:var(--muted)]"
      >
        Preview only. This form does not send or save your details.
      </p>
      <form
        class="mt-[24px] grid gap-[18px]"
        onsubmit={previewScan}
        aria-describedby={`${id}-preview-note`}
      >
        <div class="grid gap-[7px]">
          <label for={`${id}-website`} class="text-[13px] font-semibold text-[color:var(--ink)]"
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
            class="box-border min-h-[52px] w-full min-w-0 rounded-[8px] [border:1px_solid_hsl(240,_6%,_55%)] bg-[var(--paper)] px-[14px] py-[12px] [font-family:var(--sans)] text-[14px] leading-[1.5] text-[color:var(--ink)] placeholder:text-[color:var(--muted)] focus-visible:[outline:2px_solid_var(--accent-on-light)] focus-visible:[outline-offset:2px]"
          />
          <p id={`${id}-website-help`} class="m-0 text-[11px] text-[color:var(--muted)]">
            Include https:// at the beginning.
          </p>
        </div>
        <div class="grid gap-[7px]">
          <label for={`${id}-email`} class="text-[13px] font-semibold text-[color:var(--ink)]"
            >Email address</label
          >
          <input
            id={`${id}-email`}
            type="email"
            inputmode="email"
            autocomplete="email"
            placeholder="you@yourbusiness.com"
            required
            class="box-border min-h-[52px] w-full min-w-0 rounded-[8px] [border:1px_solid_hsl(240,_6%,_55%)] bg-[var(--paper)] px-[14px] py-[12px] [font-family:var(--sans)] text-[14px] leading-[1.5] text-[color:var(--ink)] placeholder:text-[color:var(--muted)] focus-visible:[outline:2px_solid_var(--accent-on-light)] focus-visible:[outline-offset:2px]"
          />
        </div>
        <button
          type="submit"
          disabled={!ready}
          class="mt-[2px] flex min-h-[54px] w-full cursor-pointer items-center justify-between gap-[16px] rounded-[8px] [border:1px_solid_var(--brand-primary)] bg-[var(--brand-primary)] px-[18px] py-[14px] [font-family:var(--sans)] text-[13px] font-semibold leading-[1.4] text-[color:var(--on-light)] hover:bg-[var(--accent-hover)] disabled:cursor-default focus-visible:[outline:2px_solid_var(--ink)] focus-visible:[outline-offset:4px]"
        >
          Get my free analysis <span class="text-[20px] font-normal" aria-hidden="true">↗</span>
        </button>
      </form>
      <p
        role="status"
        aria-live="polite"
        class="m-0 text-[13px] leading-[1.65] text-[color:var(--accent-on-light)]"
        class:mt-[16px]={previewShown}
      >
        {#if previewShown}
          The free scan is coming soon. This preview hasn’t sent your website or email address.
        {/if}
      </p>
    </div>
  </div>
</section>
