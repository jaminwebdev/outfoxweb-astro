<script lang="ts">
  import type { Snippet } from 'svelte';

  type Props = {
    children?: Snippet;
  };

  let { children }: Props = $props();

  $effect(() => console.log('initializing Convex'));
</script>

{@render children?.()}
