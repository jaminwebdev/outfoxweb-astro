<script lang="ts">
	import type { Snippet } from 'svelte';
  import Dialog from '@components/dialogs/Dialog.svelte';
  import WorkSpace from '@images/Workspace_Design.webp';
  import InteriorDesign from '@images/Interior_Design.webp';
  import LGGTM from '@images/LGGTM_Design.webp';
  import Agency from '@images/Agency_Design.webp';
  import Mortgage from '@images/Mortgage_Design.webp';
  import DigitalAgency from '@images/Digital_Agency_Design.webp';
  import Finance from '@images/Financial_Design.webp';
  import Agency2 from '@images/Agency_2_Design.webp';
  import Dental from '@images/Dental_Design.webp';

  const imgMap = {
    "LGGTM": LGGTM.src,
    "workspace": WorkSpace.src,
    "interiorDesign": InteriorDesign.src,
    "agency": Agency.src,
    "mortgage": Mortgage.src,
    "digitalAgency": DigitalAgency.src,
    "finance": Finance.src,
    "agency2": Agency2.src,
    "dental": Dental.src,
  }

  interface Props {
    children: Snippet;
    design: keyof typeof imgMap;
  }
  
  let { children, design }: Props = $props()
  
  let isOpen = $state(false);

  let openDialog = () => isOpen = true
  let closeDialog = () => isOpen = false
</script>

<button onclick={openDialog} aria-label="open design dialog">
  {@render children()}
</button>

<Dialog {isOpen} clickHandler={closeDialog} classes="max-h-[600px]">
  <img src={imgMap[design]} alt="Cover" />
</Dialog>


