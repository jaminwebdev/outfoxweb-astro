<script lang="ts">
  import { type Snippet } from 'svelte';

  interface Props {
		active: boolean;
    btnCallback?: () => void;
    children: Snippet;
	}

	let { 
    active = false,
    btnCallback,
    children
   }: Props = $props();

	const pillColors = {
		active: 'bg-secondary/20 text-secondary',
		inactive: 'bg-body-color-tertiary'
	};
</script>

<button
	onclick={btnCallback}
	class={` ${active ? pillColors['active'] : pillColors['inactive']}
rounded-md py-[5px] px-[14px]`}>
	{@render children()}
</button>
