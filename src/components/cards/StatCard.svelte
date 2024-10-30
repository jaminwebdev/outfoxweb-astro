<script lang="ts">
  interface Props {
    color: 'primary' | 'secondary' | 'tertiary' | 'orange';
    stat: string;
    subtitle: string;
    body: string;
  }
	let { color = 'primary', stat, subtitle, body }: Props = $props()

	const bgGradients = {
		primary: 'to-primary/10 text-primary',
		secondary: 'to-secondary/10 text-secondary',
		tertiary: 'to-tertiary/10 text-tertiary',
		orange: 'to-orange/10 text-orange'
	};
</script>

<div
	class="p-[25px] rounded-lg bg-gradient-to-br from-body-color-secondary {bgGradients[
		color
	]}">
	<h3 class="text-[32px] md:text-[36px]">
    {stat}
	</h3>
	<h4 class="text-[20px] mb-3">
    {subtitle}
	</h4>
	<p class="text-body-text-dark dark:text-body-text-light">
		{body}
	</p>
</div>
