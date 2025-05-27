<script lang="ts">
  interface Props {
    open: boolean;
    handleClick: () => void
  }

  let { open = $bindable(), handleClick }: Props = $props()
</script>

<button
	class="text-body-text hover:text-primary cursor-pointer p-4 border-none focus:outline-hidden absolute top-4 -right-3"
	class:open
	onclick={handleClick}
  aria-label="mobile navigation trigger">
	<svg width="32" height="24">
		<line id="top" x1="0" y1="2" x2="32" y2="2" />
		<line id="middle" x1="6" y1="12" x2="32" y2="12" />
		<line id="bottom" x1="0" y1="22" x2="32" y2="22" />
	</svg>
</button>

<style>
	svg {
		min-height: 24px;
		transition: transform 0.3s ease-in-out;
		z-index: 20;
	}

	svg line {
		stroke: currentColor;
		stroke-width: 3;
		transition: transform 0.3s ease-in-out;
		float: right;
	}

	button {
		z-index: 100;
	}

	.open svg {
		transform: scale(0.7);
	}

	.open #top {
		transform: translate(6px, 0px) rotate(45deg);
	}

	.open #middle {
		opacity: 0;
	}

	.open #bottom {
		transform: translate(-12px, 9px) rotate(-45deg);
	}
</style>
