# Image guidance for this Astro project

Use `src/images` as the default for local website imagery. The existing folder name is fine; Astro does not require `src/assets`.

## Where images belong

| Location        | Use                                                                                                                |
| --------------- | ------------------------------------------------------------------------------------------------------------------ |
| `src/images`    | Hero artwork, transparent device mockups, headshots, blog covers, and other component images. Import these assets. |
| `public/images` | Images that need predictable URLs or should be served unchanged. Reference them by URL.                            |

For example, `public/images/share-card.png` is available at `/images/share-card.png`. Do not include `public` in the URL. Files in `public` are copied unchanged.

Transparent PNG and WebP mockups can live in `src/images` with either rendering approach below.

## Astro components

Use Astro's `Image` component when image processing is wanted:

```astro
---
import { Image } from 'astro:assets';
import WebDevImg from '@/images/mobile_metrics_2.webp';
---

<Image src={WebDevImg} alt="Website displayed on mobile devices" />
```

Pass the imported metadata object to `Image`. Astro can infer dimensions and process the image; responsive variants depend on the component's settings.

## Svelte components

The import approach in `src/components/sections/ServicesTabs.svelte` is valid:

```svelte
<script lang="ts">
  import WebDevImg from '@/images/mobile_metrics_2.webp';
</script>

<img
  src={WebDevImg.src}
  width={WebDevImg.width}
  height={WebDevImg.height}
  alt="Website displayed on mobile devices"
/>
```

Use `.src` for a native `img`. Dimensions help reserve space while loading; CSS can still control the displayed size.

Importing handles asset bundling, but a native `img` does not automatically resize, compress, or generate responsive image variants.

Astro's `Image` component cannot be rendered directly inside Svelte. When optimization is needed, call `getImage()` in a parent `.astro` file and pass the resulting URL and attributes to Svelte as props. Keep this processing on the server.

## References

- [Astro: Where to store images](https://docs.astro.build/en/guides/images/#where-to-store-images)
- [Astro: Images in UI framework components](https://docs.astro.build/en/guides/images/#images-in-ui-framework-components)
- [Astro: Generating images with getImage()](https://docs.astro.build/en/guides/images/#generating-images-with-getimage)
