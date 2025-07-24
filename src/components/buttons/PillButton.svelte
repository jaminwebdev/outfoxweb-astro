<script lang="ts">
  import { cn } from '@/lib/utils';
  import { type Snippet } from 'svelte';

  interface Props {
		active?: boolean;
    classes?: string;
    btnCallback?: () => void;
    children: Snippet;
	}

	let { 
    active = false,
    classes,
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
	class={cn(classes, `${active ? pillColors['active'] : pillColors['inactive']}
rounded-md py-[5px] px-[14px]`)}>
	{@render children()}
</button>
