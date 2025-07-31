<script lang="ts">
  import WebDevImg from '@images/mobile_metrics_2.webp';
  import DesignImg from '@images/Figma_Tablet.webp';
  import SEOImg from '@images/organic_laptop.webp';
  import AuditImg from '@images/laptop_site_audit.webp';

  import ImgBackground from '@components/ImgBackground.svelte';
  import Button from '@components/buttons/Button.svelte';
  import { fade } from 'svelte/transition';
  import Checkmark from '@components/Checkmark.svelte';
  import PillButton from '../buttons/PillButton.svelte';

  type Services = 'Development' | 'Design' | 'SEO' | 'Web Audits';

  const services: Services[] = ['Development', 'Design', 'SEO', 'Web Audits'];

  let activeService = $state('Development');
</script>

<section class="my-[125px] grid">
  <p class="bg-tertiary/20 text-tertiary py-[5px] px-[14px] rounded-md text-base mb-4 m-auto">
    WHAT WE DO
  </p>
  <h2 class="text-center mb-8 leading-tight">
    Powerful websites. <br />
    Made just for you.
  </h2>
  <!-- tabs -->
  <div class="grid grid-cols-2 gap-8 sm:gap-4 sm:grid-cols-4 max-w-3xl m-auto w-full mb-20 sm:mb-8">
    {#each services as service}
      <PillButton active={service === activeService} btnCallback={() => (activeService = service)}
        >{service}</PillButton
      >
    {/each}
  </div>
  <div class="grid grid-cols-1 grid-rows-1">
    {#if activeService === 'Development'}
      <div class="col-start-1 row-start-1">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-32 items-center"
          in:fade|global={{ duration: 150, delay: 200 }}
          out:fade|global={{ duration: 150 }}
        >
          <div class="py-14 grid gap-4 justify-items-start">
            <h3>Incredibly fast. <br />Incredibly engaging.</h3>
            <p>
              Custom‑built websites that are fast, secure, and designed to grow with your business.
            </p>
            <Checkmark body="Win more customers with sites that load instantly" />
            <Checkmark body="Stay online 24/7 with rock‑solid reliability" />
            <Checkmark body="Grow without limits thanks to scalable builds" />
            <Button classes="mt-4" type="link" link="/web-development"
              >Let’s Build Something Powerful</Button
            >
          </div>
          <div class="row-start-1 sm:row-start-auto relative">
            <img
              class="relative z-1"
              src={WebDevImg.src}
              alt="Mobile website design with Lighthouse performance score"
              loading="lazy"
            />
            <ImgBackground classes="absolute -z-0 -top-[0%] -right-[20%] w-[150%] h-[110%]" />
          </div>
        </div>
      </div>
    {/if}
    {#if activeService === 'Design'}
      <div class="col-start-1 row-start-1">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-32 items-center"
          in:fade|global={{ duration: 150, delay: 200 }}
          out:fade|global={{ duration: 150 }}
        >
          <div class="py-14 grid gap-4 justify-items-start">
            <h3>Designed for impact. <br />Optimized for conversion.</h3>
            <p>
              Beautiful, intuitive designs crafted to engage users and drive measurable business
              results
            </p>
            <Checkmark body="Attract more visitors with designs that stand out." />
            <Checkmark body="Turn clicks into customers with user‑friendly interfaces." />
            <Checkmark body="Keep them coming back through memorable experiences." />
            <Button classes="mt-4" type="link" link="/web-design">Revamp My Site</Button>
          </div>
          <div class="row-start-1 sm:row-start-auto relative justify-self-end">
            <img
              class="relative z-1"
              src={DesignImg.src}
              alt="Website design in Figma"
              height="320"
              width="582"
            />
            <ImgBackground classes="absolute -z-0 -top-[30%] -right-[80%] w-[240%] h-[190%]" />
          </div>
        </div>
      </div>
    {/if}
    {#if activeService === 'SEO'}
      <div class="col-start-1 row-start-1">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-32 items-center"
          in:fade|global={{ duration: 150, delay: 200 }}
          out:fade|global={{ duration: 150 }}
        >
          <div class="py-14 grid gap-4 justify-items-start">
            <h3>SEO That Delivers</h3>
            <p>
              Get found by the right people with proven strategies that increase traffic and drive
              real business growth.
            </p>
            <Checkmark body="Rank higher where your customers are searching." />
            <Checkmark body="Double your traffic with data‑driven optimization." />
            <Checkmark body="Get leads that convert — not just empty clicks." />
            <Button classes="mt-4" type="link" link="/seo-services">Boost My Rankings</Button>
          </div>
          <div class="row-start-1 sm:row-start-auto relative justify-self-end">
            <img
              class="relative z-1 w-full"
              src={SEOImg.src}
              alt="Graphic showing improved SEO graphs overlaying website design"
            />
            <ImgBackground classes="absolute -z-0 -top-[10%] -right-[60%] w-[220%] h-[140%]" />
          </div>
        </div>
      </div>
    {/if}
    {#if activeService === 'Web Audits'}
      <div class="col-start-1 row-start-1">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-32 items-center"
          in:fade|global={{ duration: 150, delay: 200 }}
          out:fade|global={{ duration: 150 }}
        >
          <div class="py-14 grid gap-4 justify-items-start">
            <h3>Identify problems. <br />Unlock potential.</h3>
            <p>
              Uncover what’s holding your site back and get clear steps to boost speed, usability,
              and conversions.
            </p>
            <Checkmark body="Eliminate hidden issues that frustrate users." />
            <Checkmark body="Speed up your site by fixing performance drains." />
            <Checkmark body="Spot untapped opportunities to increase revenue." />
            <Button classes="mt-4" type="link" link="/website-audit">Audit My Website</Button>
          </div>
          <div class="row-start-1 sm:row-start-auto relative justify-self-end">
            <img
              class="relative z-1 w-full"
              src={AuditImg.src}
              alt="Laptop with audit metric graphics overlayed"
            />
            <ImgBackground classes="absolute -z-0 -top-[40%] -right-[70%] w-[220%] h-[220%]" />
          </div>
        </div>
      </div>
    {/if}
  </div>
</section>
