<script lang="ts">
  import Accordion from '@components/Accordion.svelte';
  import ServicesMenu from './menus/ServicesMenu.svelte';
  import ResourcesMenu from './menus/ResourcesMenu.svelte';
  import AboutMenu from './menus/AboutMenu.svelte';

  interface Props {
    open: boolean;
  }

  let { open = $bindable() }: Props = $props();

  const handleMobileNav = () => (open = !open);
</script>

<aside
  class="fixed top-[100px] pt-10 pb-[350px] z-10 w-full h-screen bg-body-color text-body-text overflow-y-scroll"
  class:open
>
  <nav class="px-8 text-xl">
    <div class="bg-body-color">
      <Accordion bodyClasses="px-0">
        {#snippet question()}
          <span>Services</span>
        {/snippet}
        {#snippet answer()}
          <div>
            <ServicesMenu clickHandler={handleMobileNav} />
          </div>
        {/snippet}
      </Accordion>
      <Accordion bodyClasses="px-0">
        {#snippet question()}
          <span>Resources</span>
        {/snippet}
        {#snippet answer()}
          <div>
            <ResourcesMenu clickHandler={handleMobileNav} />
          </div>
        {/snippet}
      </Accordion>
      <Accordion bodyClasses="px-0">
        {#snippet question()}
          <span>About</span>
        {/snippet}
        {#snippet answer()}
          <div>
            <AboutMenu clickHandler={handleMobileNav} />
          </div>
        {/snippet}
      </Accordion>
    </div>
  </nav>
</aside>

<style>
  aside {
    right: -100%;
    transition: right 0.3s ease-in-out;
  }

  .open {
    right: 0;
  }
</style>
