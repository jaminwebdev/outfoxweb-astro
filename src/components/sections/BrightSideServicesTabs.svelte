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
    details: { label: string; description: string }[];
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
      details: [
        {
          label: 'What you receive',
          description: 'A custom, responsive website with a plan for launch and handoff.',
        },
        {
          label: 'What you bring',
          description: 'Your goals, existing content, brand assets, and feedback along the way.',
        },
        {
          label: 'Investment & timing',
          description:
            'Planned around your business goals, expected value, and the build’s complexity.',
        },
      ],
      image: DevelopmentImage,
      alt: 'Website development illustration with phone mockups and performance graphics',
      href: '/web-development',
      linkLabel: 'Explore web development',
      artwork: 'before:bg-mint-soft before:[border-radius:42%_35%_12%_18%_/_38%_48%_22%_26%]',
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
      details: [
        {
          label: 'What you receive',
          description: 'A visual direction and page layouts ready to guide development.',
        },
        {
          label: 'What you bring',
          description: 'Your offer, brand assets, content, and examples of what feels right.',
        },
        {
          label: 'Investment & timing',
          description: 'Shaped around the improvements that matter most for your business.',
        },
      ],
      image: DesignImage,
      alt: 'Tablet mockup showing a website design in Figma',
      href: '/web-design',
      linkLabel: 'Explore website design',
      artwork: 'before:bg-primary before:[border-radius:18%_24%_42%_35%_/_28%_18%_48%_42%]',
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
      details: [
        {
          label: 'What you receive',
          description: 'Explained findings and a prioritized set of practical next steps.',
        },
        {
          label: 'What you bring',
          description: 'Your website, business goals, and the questions you want answered.',
        },
        {
          label: 'Investment & timing',
          description: 'Scoped around the questions and decisions your business needs to resolve.',
        },
      ],
      image: ReviewImage,
      alt: 'Laptop mockup surrounded by website review and audit graphics',
      href: '/website-audit',
      linkLabel: 'Explore website reviews',
      artwork: 'before:bg-mint-soft before:[border-radius:35%_45%_22%_12%_/_45%_32%_18%_28%]',
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
    class="grid items-center gap-7 p-5.5 sm:p-8 md:grid-cols-[minmax(0,_1.1fr)_minmax(0,_1fr)] md:gap-9.5 lg:p-10.5"
  >
    <div class="min-w-0">
      <p
        class="text-caption leading-normal font-semibold tracking-eyebrow text-accent-foreground uppercase"
      >
        {service.fit}
      </p>
      <h3
        class="mt-4 text-title leading-title font-extrabold tracking-title text-balance text-foreground lg:text-service"
      >
        {service.headline[0]}<br /><span class="text-accent-foreground">{service.headline[1]}</span>
      </h3>
      <p class="mt-5 max-w-130 text-body leading-copy text-muted-foreground">
        {service.description}
      </p>
      <ul class="mt-6 grid gap-3.5">
        {#each service.benefits as benefit}
          <li class="flex items-start gap-3 text-sm leading-relaxed text-foreground">
            <svg
              class="mt-0.5 shrink-0"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="12" fill="var(--primary)" />
              <path
                d="m6.5 12 3.5 3.5 7.5-7.5"
                stroke="var(--ink)"
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
        class="mt-7 inline-flex min-h-13.5 items-center justify-between gap-5.5 rounded-md border border-primary bg-primary px-5 py-4 text-label leading-label font-medium text-primary-foreground no-underline hover:border-primary-hover hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-5 focus-visible:outline-ring"
        href={service.href}
      >
        {service.linkLabel}<span class="text-xl font-normal" aria-hidden="true">↗</span>
      </a>
    </div>
    <div
      class={`relative isolate grid aspect-square min-w-0 place-items-center p-3.5 before:absolute before:[inset:8%_0_6%] before:-z-1 ${service.artwork}`}
    >
      <img
        class="block h-auto w-full max-w-125"
        src={service.image.src}
        width={service.image.width}
        height={service.image.height}
        alt={service.alt}
        loading="lazy"
        decoding="async"
      />
    </div>
    <div class="border-t border-border pt-6 md:col-span-2">
      <dl class="grid gap-6 lg:grid-cols-3 lg:gap-8">
        {#each service.details as detail}
          <div class="min-w-0">
            <dt class="text-base font-semibold text-accent-foreground">{detail.label}</dt>
            <dd class="mt-2 text-base leading-relaxed text-muted-foreground">
              {detail.description}
            </dd>
          </div>
        {/each}
      </dl>
    </div>
  </div>
{/snippet}

<section {id} aria-labelledby={`${id}-heading`} class="mx-auto max-w-295 py-18 lg:py-24">
  <header class="mx-auto max-w-170 text-center">
    <p
      class="text-xs leading-normal font-semibold tracking-eyebrow text-accent-foreground uppercase"
    >
      What we do
    </p>
    <h2 id={`${id}-heading`} class="mt-4.5 text-section font-black text-balance text-foreground">
      The right help<br />for your website.
    </h2>
    <p class="mt-5 text-body leading-copy text-muted-foreground">
      Design, development, and an expert review when you need a clearer starting point.
    </p>
  </header>

  <div
    role="tablist"
    aria-label="Website services"
    class="mt-8 hidden justify-center gap-3 md:flex"
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
        class={`min-h-12 cursor-pointer rounded-full px-6.5 py-3  text-sm leading-label focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-4 ${
          activeService === service.id
            ? 'border border-primary bg-primary font-demi text-primary-foreground'
            : 'border border-border bg-card font-medium text-muted-foreground hover:bg-muted'
        }`}
        onclick={() => selectService(service.id)}
        onkeydown={(event) => navigateTabs(event, index)}
      >
        {service.label}
      </button>
    {/each}
  </div>

  <div class="mt-7 hidden md:block">
    {#each services as service}
      <div
        id={`${id}-panel-${service.id}`}
        role="tabpanel"
        aria-labelledby={`${id}-tab-${service.id}`}
        hidden={activeService !== service.id}
        class="rounded-2xl bg-muted"
      >
        {#if activeService === service.id}
          <div in:fade={{ duration: motionAllowed ? 160 : 0 }}>
            {@render serviceContent(service)}
          </div>
        {/if}
      </div>
    {/each}
  </div>

  <div class="mt-7.5 grid gap-3 md:hidden">
    {#each services as service}
      <details
        class="group rounded-2xl bg-muted"
        open
        ontoggle={(event) => toggleMobileService(event, service.id)}
      >
        <summary
          class="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 rounded-2xl px-5.5 py-4.5 text-base font-demi text-foreground group-open:rounded-b-none group-open:bg-primary group-open:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring [&::-webkit-details-marker]:hidden"
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
