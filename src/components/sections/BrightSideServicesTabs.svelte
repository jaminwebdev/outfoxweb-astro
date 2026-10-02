<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import type { ImageMetadata } from 'astro';
  import DevelopmentImage from '@/images/Laptop_Audit.webp';
  import DesignImage from '@/images/Figma_Tablet.webp';
  import ReviewImage from '@/images/Laptop_Metrics_Right.webp';

  interface Props {
    id?: string;
  }

  type ServiceId = 'development' | 'design' | 'review';
  type Service = {
    id: ServiceId;
    label: string;
    fit: string;
    headline: [string, string];
    description: string;
    benefits: string[];
    image: ImageMetadata;
    alt: string;
    href: string;
    linkLabel: string;
    artwork: string;
  };

  let { id = 'services' }: Props = $props();

  const services: Service[] = [
    {
      id: 'development',
      label: 'Development',
      fit: 'For a new website or a rebuild',
      headline: ['Built for people.', 'Ready for your business.'],
      description:
        'A custom website with a clear structure, responsive pages, and a build you can understand and manage.',
      benefits: [
        'Make the next step easy on any screen.',
        'Keep pages focused, fast, and straightforward to use.',
        'Get a clear plan for launch, access, and handoff.',
      ],
      image: DevelopmentImage,
      alt: 'Website development illustration with phone mockups and performance graphics',
      href: '/web-development',
      linkLabel: 'Explore web development',
      artwork:
        'before:bg-[var(--green-soft)] before:[border-radius:42%_35%_12%_18%_/_38%_48%_22%_26%]',
    },
    {
      id: 'design',
      label: 'Website design',
      fit: 'For a site that no longer reflects your business',
      headline: ['Make your offer clear.', 'Make your website feel like you.'],
      description:
        'Bring your message, layout, and visual identity together so visitors can understand your business and find their next step.',
      benefits: [
        'Give your services and contact actions a clear hierarchy.',
        'Create a distinctive look around your brand.',
        'See the design direction before development begins.',
      ],
      image: DesignImage,
      alt: 'Tablet mockup showing a website design in Figma',
      href: '/web-design',
      linkLabel: 'Explore website design',
      artwork:
        'before:bg-[var(--brand-primary)] before:[border-radius:18%_24%_42%_35%_/_28%_18%_48%_42%]',
    },
    {
      id: 'review',
      label: 'Website review',
      fit: 'For an existing website with unanswered questions',
      headline: ['Know what needs work.', 'Know where to start.'],
      description:
        'An expert look at your current website, with practical priorities for usability, messaging, and technical improvements.',
      benefits: [
        'Find friction in the paths people need to take.',
        'Separate urgent fixes from useful later improvements.',
        'Get recommendations explained in plain language.',
      ],
      image: ReviewImage,
      alt: 'Laptop mockup surrounded by website review and audit graphics',
      href: '/website-audit',
      linkLabel: 'Explore website reviews',
      artwork:
        'before:bg-[var(--green-soft)] before:[border-radius:35%_45%_22%_12%_/_45%_32%_18%_28%]',
    },
  ];

  let activeService = $state<ServiceId>('development');
  let openMobileService = $state<ServiceId | null>('development');
  let motionAllowed = $state(false);
  const tabs: HTMLButtonElement[] = [];

  function selectService(serviceId: ServiceId) {
    activeService = serviceId;
    openMobileService = serviceId;
  }

  function navigateTabs(event: KeyboardEvent, index: number) {
    let nextIndex: number;
    switch (event.key) {
      case 'ArrowRight':
        nextIndex = (index + 1) % services.length;
        break;
      case 'ArrowLeft':
        nextIndex = (index - 1 + services.length) % services.length;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = services.length - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    selectService(services[nextIndex].id);
    tabs[nextIndex]?.focus();
  }

  function toggleMobileService(event: Event, serviceId: ServiceId) {
    const details = event.currentTarget as HTMLDetailsElement;
    if (details.open) {
      selectService(serviceId);
    } else if (openMobileService === serviceId) {
      openMobileService = null;
    }
  }

  onMount(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => (motionAllowed = !preference.matches);
    updateMotion();
    preference.addEventListener('change', updateMotion);
    return () => preference.removeEventListener('change', updateMotion);
  });
</script>

{#snippet serviceContent(service: Service)}
  <div
    class="grid items-center gap-[28px] p-[22px] min-[640px]:p-[32px] min-[800px]:gap-[38px] min-[800px]:grid-cols-[minmax(0,_1.1fr)_minmax(0,_1fr)] min-[900px]:p-[42px]"
  >
    <div class="min-w-0">
      <p
        class="m-0 text-[11px] font-semibold uppercase tracking-[0.045em] leading-[1.5] text-[color:var(--accent-on-light)]"
      >
        {service.fit}
      </p>
      <h3
        class="m-0 mt-[16px] text-[28px] min-[900px]:text-[35px] font-extrabold tracking-[-0.045em] leading-[1.15] text-balance text-[color:var(--ink)]"
      >
        {service.headline[0]}<br /><span class="text-[color:var(--accent-on-light)]"
          >{service.headline[1]}</span
        >
      </h3>
      <p class="m-0 mt-[20px] max-w-[520px] text-[15px] leading-[1.8] text-[color:var(--muted)]">
        {service.description}
      </p>
      <ul class="m-0 mt-[24px] grid gap-[14px] p-0 list-none">
        {#each service.benefits as benefit}
          <li
            class="flex items-start gap-[12px] text-[14px] leading-[1.65] text-[color:var(--ink)]"
          >
            <svg
              class="mt-[2px] shrink-0"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="12" fill="var(--brand-primary)" />
              <path
                d="m6.5 12 3.5 3.5 7.5-7.5"
                stroke="var(--on-light)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>{benefit}</span>
          </li>
        {/each}
      </ul>
      <a
        class="mt-[28px] inline-flex min-h-[54px] items-center justify-between gap-[22px] rounded-[7px] [border:1px_solid_var(--brand-primary)] bg-[var(--brand-primary)] px-[19px] py-[15px] text-[13px] font-medium leading-[1.4] text-[color:var(--on-light)] no-underline hover:bg-[var(--accent-hover)] hover:[border-color:var(--accent-hover)] hover:no-underline focus-visible:[outline:2px_solid_var(--ink)] focus-visible:[outline-offset:5px] focus-visible:[box-shadow:0_0_0_3px_var(--paper)]"
        href={service.href}
      >
        {service.linkLabel}<span class="text-[20px] font-normal" aria-hidden="true">↗</span>
      </a>
    </div>
    <div
      class={`relative isolate grid aspect-square min-w-0 place-items-center p-[14px] before:absolute before:[inset:8%_0_6%] before:z-[-1] before:content-[''] ${service.artwork}`}
    >
      <img
        class="block h-auto w-full max-w-[500px]"
        src={service.image.src}
        width={service.image.width}
        height={service.image.height}
        alt={service.alt}
        loading="lazy"
        decoding="async"
      />
    </div>
  </div>
{/snippet}

<section
  {id}
  aria-labelledby={`${id}-heading`}
  class="mx-auto py-[72px] [width:min(100%_-_25px,_1180px)] min-[640px]:[width:min(100%_-_80px,_1180px)] min-[900px]:py-[95px]"
>
  <header class="mx-auto max-w-[680px] text-center">
    <p
      class="m-0 text-[12px] font-semibold uppercase tracking-[0.045em] leading-[1.5] text-[color:var(--accent-on-light)]"
    >
      What we do
    </p>
    <h2
      id={`${id}-heading`}
      class="m-0 mt-[18px] [font-family:var(--sans)] [font-size:clamp(30px,_3.3vw,_43px)] font-black tracking-[-0.055em] leading-[1.13] text-balance text-[color:var(--ink)]"
    >
      The right help<br />for your website.
    </h2>
    <p class="m-0 mt-[20px] text-[15px] leading-[1.8] text-[color:var(--muted)]">
      Design, development, and an expert review when you need a clearer starting point.
    </p>
  </header>

  <div
    role="tablist"
    aria-label="Website services"
    class="mt-[32px] hidden justify-center gap-[12px] min-[800px]:flex"
  >
    {#each services as service, index}
      <button
        bind:this={tabs[index]}
        id={`${id}-tab-${service.id}`}
        type="button"
        role="tab"
        aria-selected={activeService === service.id}
        aria-controls={`${id}-panel-${service.id}`}
        tabindex={activeService === service.id ? 0 : -1}
        class={`min-h-[48px] cursor-pointer rounded-full px-[25px] py-[12px] [font-family:var(--sans)] text-[14px] leading-[1.4] focus-visible:[outline:2px_solid_var(--ink)] focus-visible:[outline-offset:4px] ${
          activeService === service.id
            ? '[border:1px_solid_var(--brand-primary)] bg-[var(--brand-primary)] [font-weight:650] text-[color:var(--on-light)]'
            : '[border:1px_solid_var(--rule)] bg-[var(--paper)] font-medium text-[color:var(--muted)] hover:bg-[var(--green-pale)]'
        }`}
        onclick={() => selectService(service.id)}
        onkeydown={(event) => navigateTabs(event, index)}
      >
        {service.label}
      </button>
    {/each}
  </div>

  <div class="mt-[28px] hidden min-[800px]:block">
    {#each services as service}
      <div
        id={`${id}-panel-${service.id}`}
        role="tabpanel"
        aria-labelledby={`${id}-tab-${service.id}`}
        hidden={activeService !== service.id}
        class="rounded-[16px] bg-[var(--green-pale)]"
      >
        {#if activeService === service.id}
          <div in:fade={{ duration: motionAllowed ? 160 : 0 }}>
            {@render serviceContent(service)}
          </div>
        {/if}
      </div>
    {/each}
  </div>

  <div class="mt-[30px] grid gap-[12px] min-[800px]:hidden">
    {#each services as service}
      <details
        class="group rounded-[16px] bg-[var(--green-pale)]"
        open={openMobileService === service.id}
        ontoggle={(event) => toggleMobileService(event, service.id)}
      >
        <summary
          class="flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-[20px] rounded-[16px] px-[22px] py-[18px] text-[16px] [font-weight:650] text-[color:var(--ink)] group-open:rounded-b-none group-open:bg-[var(--brand-primary)] [&::-webkit-details-marker]:hidden focus-visible:[outline:2px_solid_var(--ink)] focus-visible:[outline-offset:4px]"
        >
          {service.label}
          <svg
            class="shrink-0 group-open:rotate-45 motion-safe:transition-transform motion-safe:duration-150"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path d="M8 2v12M2 8h12" stroke="currentColor" stroke-width="1.5" />
          </svg>
        </summary>
        {@render serviceContent(service)}
      </details>
    {/each}
  </div>
</section>
