# Outfox Web design system — Bright Side

Updated: 6 October 2026.

Bright Side is the chosen visual direction for bringing the new Outfox Web design across the site. This guide records the current implementation, the reasoning behind it, and the rules to use when adapting existing pages.

The implementation reference is [bright-side.astro](../src/pages/codex-non-specialist-lab/bright-side.astro). [tailwind.css](../src/styles/tailwind.css) is the source of truth for token values. The guide describes source-level choices; it is not a completed visual or accessibility audit. Patterns for other page types below are adoption guidance, rather than already implemented pages.

## 1. Design character and intent

**Thoughtful, approachable, confident, playful, spacious, and crisp.**

| Character    | How it appears                                                                 | Why it belongs                                                                                                           |
| ------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| Thoughtful   | Clear headlines, useful explanations, visible priorities, and a simple process | The business offers judgment as well as design and development. Visitors should understand the thinking behind the work. |
| Approachable | A light canvas, mint surfaces, rounded panels, and conversational copy         | Asking for help with a website should feel like starting a useful conversation.                                          |
| Confident    | Dark ink, substantial headings, direct actions, and restrained navigation      | Expertise comes through clarity and evidence, without an overwhelming sales pitch.                                       |
| Playful      | Diagonal capsules, organic image frames, small drawn marks, and animated icons | The site should have personality and visual interest alongside its professional structure.                               |
| Spacious     | Generous section rhythm, limited reading widths, and clearly grouped content   | Space makes the offer and next steps easier to scan.                                                                     |
| Crisp        | Solid colors, clear edges, light borders, and consistent typography            | The interface stays legible even when the artwork is expressive.                                                         |

The central message is **a better website starts with better judgment**. AI can support the work, but the positioning rests on human responsibility, careful decisions, and an understandable result. The homepage currently focuses on website development, design, and expert review. Broader legacy offerings do not automatically become part of the new homepage hierarchy.

### Core design decisions

- **A light site with green as its identity.** Paper and ink carry most reading; mint and primary green make the brand visible. The dark green testimonial panel creates a deliberate change in rhythm.
- **An orderly layout with expressive artwork.** Text, controls, and spacing use consistent rules. Whimsy comes from the imagery, shapes, and a few motion accents.
- **Comfortable reading sizes.** General explanations use approximately 17.6–18px text, with deliberate 16px treatments where appropriate. Small labels and captions provide hierarchy without becoming the default for useful content.
- **Immersive imagery.** Transparent device mockups appear within the page composition. Organic backdrops and image windows give photography a considered setting.
- **Evidence before detail.** Examples and testimonials precede the service selector and process explanation.
- **A useful next step at several levels of commitment.** Visitors can explore examples, understand a service, eventually use a free scan, or start a conversation.

Use solid surfaces as the default. Broad gradients, glass panels, large blurred glows, heavy drop shadows, and decorative effects on every card are outside the chosen direction. Shadows already present within device artwork can help it feel physical. Keep the founder portrait for the About page; homepage portraits belong to authentic customer proof.

## 2. Color system

Colors have two layers: **brand primitives** describe a particular color; **semantic roles** describe its purpose. Use a primitive for intentional art direction, such as `bg-mint`. Use a semantic role for a reusable interface, such as `bg-background text-foreground`.

The CSS registers colors through `@theme inline`. Each registered color supports the relevant Tailwind color utilities, including `bg-*`, `text-*`, `border-*`, `fill-*`, and `stroke-*`. See [Tailwind theme variables](https://tailwindcss.com/docs/theme).

### Brand primitives

| Token suffix      | Exact value          | Main use                                                                               |
| ----------------- | -------------------- | -------------------------------------------------------------------------------------- |
| `primary`         | `hsl(162, 72%, 65%)` | Main action fills, selected service pills, brand artwork, and highlights on dark green |
| `primary-hover`   | `hsl(162, 72%, 76%)` | Hover fill and border for primary actions                                              |
| `primary-strong`  | `hsl(162, 50%, 25%)` | Readable green headings, labels, and focus outlines on light surfaces                  |
| `mint`            | `hsl(162, 35%, 93%)` | Hero, service, scan, and contact surfaces                                              |
| `mint-soft`       | `hsl(162, 40%, 86%)` | Organic backdrops and supporting green surfaces                                        |
| `green`           | `hsl(162, 45%, 45%)` | Mid-tone green in decorative artwork                                                   |
| `dark-green`      | `hsl(162, 28%, 16%)` | Testimonial surface and deliberate dark contrast blocks                                |
| `secondary`       | `hsl(206, 81%, 50%)` | Blue punctuation and small artwork accents; the wordmark dot                           |
| `secondary-light` | `hsl(210, 38%, 93%)` | Process band and supporting editorial panels                                           |
| `secondary-soft`  | `hsl(210, 44%, 85%)` | Stronger pale-blue supporting surface; available for adoption                          |
| `tertiary`        | `hsl(259, 81%, 64%)` | Sparse purple capsules, dots, and illustration details                                 |
| `orange`          | `hsl(15, 92%, 63%)`  | Available legacy accent; not a defining homepage color                                 |
| `paper`           | `hsl(240, 7%, 96%)`  | Light canvas and light text inside dark panels                                         |
| `ink`             | `hsl(240, 6%, 12%)`  | Main text, primary button text, and strong outlines                                    |
| `ink-muted`       | `hsl(240, 6%, 30%)`  | Supporting copy on paper and mint                                                      |
| `muted-on-light`  | `hsl(162, 20%, 28%)` | Green-toned supporting copy on light surfaces                                          |
| `muted-on-dark`   | `hsl(162, 12%, 74%)` | Secondary text within dark green panels                                                |

Green should remain the dominant chromatic family. Blue gives a section a change of pace; purple supplies small moments of contrast. A page can use only the green family and neutrals. There is no requirement to use every available color or to distribute accents equally.

### Semantic roles in the light theme

| Utilities / role                             | Value or pairing           | Use                                                                                       |
| -------------------------------------------- | -------------------------- | ----------------------------------------------------------------------------------------- |
| `bg-background text-foreground`              | Paper / ink                | Page shell                                                                                |
| `bg-card text-card-foreground`               | Paper / ink                | Neutral cards                                                                             |
| `bg-popover text-popover-foreground`         | Paper / ink                | Popovers, when needed                                                                     |
| `bg-primary text-primary-foreground`         | Primary / ink              | Main actions                                                                              |
| `bg-secondary text-secondary-foreground`     | Secondary / ink            | Deliberate blue-filled controls, when needed                                              |
| `bg-muted text-muted-foreground`             | Mint / ink-muted           | Quiet surface and supporting text                                                         |
| `bg-accent text-accent-foreground`           | Mint-soft / primary-strong | Green supporting emphasis                                                                 |
| `bg-destructive text-destructive-foreground` | `hsl(0, 70%, 40%)` / paper | Destructive action treatment; error messages also need text and an appropriate background |
| `border-border`                              | `hsl(240, 7%, 82%)`        | Decorative dividers and neutral card edges                                                |
| `border-input`                               | `hsl(240, 6%, 55%)`        | Visible form boundaries                                                                   |
| `outline-ring`, `ring-ring`                  | Primary-strong             | Focus color; use a visible width and offset                                               |

`--surface-muted` and `--surface-accent` are internal surface variables. Their registered utility names are `muted` and `accent`; there are currently no `bg-surface-muted` or `bg-surface-accent` utilities.

Chart roles `chart-1` through `chart-5` map to primary, secondary, tertiary, green, and orange respectively. Sidebar roles are also available: `sidebar` uses secondary-light, `sidebar-foreground` uses foreground, `sidebar-primary` uses primary, `sidebar-accent` uses the accent surface, and their foreground, border, and ring roles follow the corresponding semantic values. These are compatibility capabilities, not instructions to add charts or sidebars to marketing pages.

### Light mode and dark preview

The new marketing direction is **light by default**. Both lab pages have a **Dark mode** toggle for inspecting the existing theme tokens. The button exposes its state through `aria-pressed`, and the lab layout restores an explicit choice before the page is painted. The choice is saved under `outfox-non-specialist-lab-theme` in browser local storage and applies only to the non-specialist lab. Without a saved choice, or when storage is unavailable on a fresh visit, the default remains light; the operating system preference does not override it.

The layout switches the root `light`/`dark` and `scheme-light`/`scheme-dark` classes together, so browser controls follow the selected scheme. The toggle still works within the current page if saving the preference fails. Without JavaScript, the page remains light and the unavailable toggle is hidden. The browser theme color follows the computed background token.

Main reading text uses `text-foreground` and `text-muted-foreground`. Hero, service, scan, and contact panels use `bg-muted`, which is mint in light mode and the darker muted surface in dark mode. Their green emphasis uses `text-accent-foreground`, which changes from primary-strong to primary. The scan form and neutral editorial card use `bg-card`; blue section surfaces use `bg-secondary-light dark:bg-card`. Supporting green-toned copy can use `text-muted-on-light dark:text-muted-on-dark`.

Brand primitives retain their exact colors: primary actions and the featured green blog card keep dark text on primary fill; decorative capsules, device artwork, and organic backdrops retain their colors. The testimonial remains an intentional `bg-dark-green text-paper` panel in either scheme. Use semantic roles for interfaces that follow the theme, and fixed primitive pairings for artwork or deliberate contrast blocks.

The `.dark` theme retains the same primary, blue, and purple primitives while changing semantic roles:

| Role                                 | Dark value                                                  |
| ------------------------------------ | ----------------------------------------------------------- |
| Background / foreground              | Ink / paper                                                 |
| Card and popover / their foregrounds | Dark-green / paper                                          |
| Muted surface / foreground           | `hsl(162, 20%, 22%)` / muted-on-dark                        |
| Accent surface / foreground          | `hsl(162, 28%, 23%)` / primary                              |
| Destructive / foreground             | `hsl(0, 80%, 70%)` / ink                                    |
| Border                               | `hsl(162, 18%, 34%)`                                        |
| Input                                | `hsl(162, 12%, 55%)`                                        |
| Ring                                 | Primary                                                     |
| Sidebar                              | Dark-green; its other roles follow the dark semantic values |

Primary and secondary foregrounds remain ink. Fixed primitives such as `paper` do not change with the theme. The lab's dark preview now demonstrates these role changes across the page; it does not establish dark mode as the default marketing direction or certify a complete dark-mode accessibility audit. See [ThemeToggle](../src/components/non-specialist-lab/ThemeToggle.astro) and [Tailwind's manual dark-mode guidance](https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually).

### Contrast rules

Use at least **4.5:1 for normal text** and **3:1 for qualifying large text**. Large text means at least 18pt regular or 14pt bold under WCAG's definition; a heading tag alone does not qualify. See [WCAG text contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html). Essential control boundaries and meaningful graphics also need appropriate contrast, typically 3:1 against adjacent colors; decorative shapes do not carry the same requirement. See [WCAG non-text contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html).

These ratios were calculated from the current solid, opaque token values using the WCAG sRGB luminance formula. They describe these pairings, not whole-page conformance:

| Foreground / background    | Approximate ratio | Guidance                                         |
| -------------------------- | ----------------- | ------------------------------------------------ |
| Ink / paper                | 15.35:1           | Default reading pair                             |
| Ink / primary              | 10.94:1           | Primary button pair                              |
| Primary-strong / mint      | 6.55:1            | Green text on mint                               |
| Paper / dark-green         | 12.05:1           | Main text in dark panels                         |
| Muted-on-dark / dark-green | 7.36:1            | Supporting text in dark panels                   |
| Input boundary / paper     | 3.30:1            | Form boundary                                    |
| Primary / paper            | 1.40:1            | Decorative color; unsuitable for meaningful text |
| Primary / mint             | 1.36:1            | Decorative color; unsuitable for meaningful text |

The brand's bright green is preserved. For readable green text on light surfaces, use `text-primary-strong`, or `text-accent-foreground` when it should follow the theme. The reference still contains bright-green section labels, process numbers, and hover text on light surfaces; those are known contrast gaps to address during adoption, not examples to reproduce for meaningful text. Check actual backgrounds, opacity, hover, focus, selected, and error states in both schemes.

## 3. Typography

### Families and weight

| Utility          | Family                       | Role and rationale                                                                                                                                                                  |
| ---------------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `font-display`   | Manrope, Arial, sans-serif   | The Bright Side page's default family, including headings and copy. Its rounded forms support the friendly geometric direction. The utility name does not restrict it to headlines. |
| `font-sans`      | Inter, system-ui, sans-serif | Current wordmark family and general UI/legacy fallback. Use deliberately rather than allowing sections to switch families accidentally.                                             |
| `font-editorial` | Newsreader, Georgia, serif   | Available editorial option. Not used by the current homepage; reserve for a considered article or quote treatment rather than adding a third family throughout.                     |

Fonts are local variable files with `font-display: swap`. Main hero and section headings use `font-black` (900); service titles use `font-extrabold` (800); many card headings use `font-demi` (650); labels generally use `font-semibold` (600). Manrope's declared weight range is 200–800, so the current 900 request is beyond that declared range. During production migration, choose an available weight or deliberately resolve the font configuration; do not assume a separate true 900 face exists.

### Current size tokens

Pixel equivalents below assume a 16px root size. Preserve rem-based sizing and user zoom.

| Utility              | Token value                                   | Intended role                                                        |
| -------------------- | --------------------------------------------- | -------------------------------------------------------------------- |
| `text-2xs`           | `0.625rem` / 10px                             | Tiny status badges only                                              |
| `text-caption`       | `0.6875rem` / 11px                            | Brief captions and metadata                                          |
| `text-label`         | `0.8125rem` / 13px                            | Deliberately compact controls and short labels; not general prose    |
| `text-body`          | `1.1rem` / 17.6px                             | Introductory and descriptive copy                                    |
| `text-card-title`    | `1.3125rem` / 21px                            | Card and process headings                                            |
| `text-benefit`       | `1.375rem` / 22px                             | Benefit headings beside animated icons                               |
| `text-card-title-lg` | `1.4375rem` / 23px                            | Work captions and small editorial cards                              |
| `text-quote`         | `1.5625rem` / 25px                            | Testimonial copy and editorial emphasis                              |
| `text-step`          | `1.6875rem` / 27px                            | Process step numerals                                                |
| `text-title`         | `1.75rem` / 28px                              | Service title at smaller widths                                      |
| `text-service`       | `2.1875rem` / 35px                            | Service and featured-card title at larger widths                     |
| `text-display`       | `clamp(2.375rem, 4.8vw, 3.875rem)` / 38–62px  | Available fluid display role; not currently applied to the hero      |
| `text-section`       | `clamp(1.875rem, 3.3vw, 2.6875rem)` / 30–43px | Main section headings                                                |
| `text-contact`       | `clamp(2.125rem, 4.5vw, 3.4375rem)` / 34–55px | Closing invitation                                                   |
| `text-editorial`     | `clamp(3rem, 6.3vw, 5.375rem)` / 48–86px      | Available editorial display role; not currently used on the homepage |

**General prose should use the larger reading scale.** Use `text-body` (17.6px) or the global paragraph size, `text-lg` (18px), for main explanations. Use `text-base` (16px) for a deliberate more compact treatment, as in the benefit cards and FAQ questions. For new long articles and substantial explanations, start with `text-body leading-copy` or `text-lg leading-copy`. `text-sm` (14px) and `text-label` (13px) are specific compact exceptions, not general supporting-copy defaults. These sizes express the chosen readability direction; they are not a universal accessibility minimum.

### Current global defaults and page usage

The page now deliberately relies on some global typography in [tailwind.css](../src/styles/tailwind.css). Removing a size class does not necessarily mean inheriting the body's 16px size: the `body p` base rule applies `text-lg` to paragraphs. Explicit size utilities override that base rule. The layout's `text-base/relaxed` remains the default for other elements without a size rule.

| Context                                              | Current treatment                                                                                                                                              | Consequence for adoption                                                                                                                                                                                            |
| ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hero h1                                              | Global `body h1`: `text-4xl` / 36px, then `md:text-[3.55rem]` / 56.8px; `leading-tight` / 1.25 and `font-black`                                                | The hero no longer uses `text-display`. Match this global h1 treatment when carrying the current hero style to another page; an explicit display token would introduce different sizing, tracking, and line-height. |
| Hero, work, service, scan, and contact introductions | `text-body` / 17.6px                                                                                                                                           | The hero uses the same size at larger widths; the former `lg:text-base` reduction is gone.                                                                                                                          |
| Work-example explanations                            | Paragraphs without a size utility use global `text-lg` / 18px                                                                                                  | Preserve the larger explanation text when reusing these figures.                                                                                                                                                    |
| Benefit explanations                                 | `text-base leading-copy` / 16px with 1.8 line-height                                                                                                           | This is an intentional compact reading treatment beneath the icon and heading.                                                                                                                                      |
| FAQ questions                                        | Summary inherits the body's 16px size, with `leading-normal` / 1.5                                                                                             | Removing `text-sm` raises the question to the normal interface size.                                                                                                                                                |
| FAQ answers                                          | Paragraphs without a size utility use 18px, with `leading-copy` / 1.8                                                                                          | Removing `text-sm` raises the answer to the larger paragraph scale.                                                                                                                                                 |
| Featured blog teaser                                 | Paragraph without a size utility uses 18px, with `leading-copy`                                                                                                | The prominent article's explanation gets a larger reading treatment.                                                                                                                                                |
| Compact exceptions                                   | Process descriptions, service/scan benefit lists, and smaller blog teasers retain `text-sm`; selected navigation, form labels, and actions retain `text-label` | Record these as specific current choices. Do not spread their smaller sizes to main explanations by default.                                                                                                        |
| Eyebrows and metadata                                | `text-xs` / 12px, `text-caption` / 11px, and occasional `text-2xs` / 10px                                                                                      | Keep these brief and secondary; do not use them for substantial instructions or paragraphs.                                                                                                                         |

The global paragraph default also provides Tailwind's `text-lg` line-height, approximately 1.56 (28px at an 18px font), unless a leading utility overrides it. `leading-copy` explicitly sets 1.8. Keep this distinction when documenting or extracting a component; a paragraph with only a color class still has typography supplied by the base layer.

`text-display`, `text-section`, and `text-contact` include line-height **1.13** and tracking **−0.055em**. `text-card-title`, `text-benefit`, and `text-card-title-lg` include line-height **1.35** and tracking **−0.035em**. `text-editorial` includes line-height **1.08** and tracking **−0.035em**. Avoid repeating those properties unless a component deliberately differs.

### Supporting type tokens

| Utility             | Value    | Use                                   |
| ------------------- | -------- | ------------------------------------- |
| `leading-copy`      | 1.8      | Comfortable supporting paragraphs     |
| `leading-card`      | 1.35     | Compact card headings                 |
| `leading-label`     | 1.4      | Button and tab labels                 |
| `leading-title`     | 1.15     | Service titles                        |
| `leading-editorial` | 1.08     | Large editorial headings              |
| `tracking-eyebrow`  | 0.045em  | Short uppercase section introductions |
| `tracking-label`    | 0.06em   | Short uppercase supporting labels     |
| `tracking-card`     | −0.035em | Compact title treatment               |
| `tracking-title`    | −0.045em | Service and featured titles           |
| `tracking-wordmark` | −0.065em | Inter wordmark only                   |

Use one clear h1 and descriptive h2/h3 relationships. Eyebrows name the subject; they no longer carry decorative section numbers such as “01 / a closer look.” Numbers remain appropriate in an actual ordered process. Use `text-balance` for short titles and keep explanatory paragraphs left aligned. Centering is reserved for focused service introductions and the closing invitation. Green emphasis is upright in the reference (`not-italic`).

**Naming rule:** `text-card` is a color utility, because `card` is a color token. Use `text-card-title` for size. Avoid introducing text-size names that collide with color utility names.

## 4. Layout, spacing, and responsive behavior

### Containers and reading widths

| Pattern                 | Current utilities / size                                 | Reason                                                                             |
| ----------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Main page gutters       | `px-6 sm:px-16` / 24px, then 64px                        | Room for artwork and inset panels without placing copy against the viewport edge   |
| Main section container  | `mx-auto max-w-295` / 1180px                             | Shared alignment across sections                                                   |
| Header and footer shell | `mx-auto max-w-315 px-6 sm:px-10` / 1260px outer maximum | A wider shell with 24px/40px inner gutters; desktop content width aligns to 1180px |
| Introductory copy       | Commonly `max-w-109` to `max-w-130` / 436–520px          | Prevents paragraphs from becoming a wide wall of text                              |
| Hero title              | `max-w-147.5` / 590px                                    | Keeps the headline a distinct block beside artwork                                 |
| Process band            | `bg-secondary-light sm:-mx-10 sm:px-10`                  | Expands the surface beyond the main gutter while keeping its content aligned       |

These are wrapper recipes, not global width tokens. Keep gutters on the intended wrapper; adding them again to every child produces excessive inset. Use a narrower reading container for articles, guided by actual font size and line length, rather than forcing article prose to fill 1180px.

### Spacing rhythm

Use Tailwind's existing **0.25rem spacing unit**: normally 4px at a 16px root. Half steps supply 2px refinements. Prefer direct numeric utilities such as `gap-6`, `p-8`, `w-65`, and `max-w-295` over equivalent pixel arbitrary values.

| Relationship                       | Typical utilities                         | Current scale                   |
| ---------------------------------- | ----------------------------------------- | ------------------------------- |
| Icon to heading / label to input   | `gap-2`–`gap-3`                           | 8–12px                          |
| Heading to short copy / list items | `mt-3`–`mt-5`, `gap-3.5`                  | 12–20px; 14px for benefit lists |
| Copy to action                     | `mt-6`–`mt-7`                             | 24–28px                         |
| Card padding                       | `p-6`, `p-8`                              | 24–32px                         |
| Grid gaps                          | `gap-6`–`gap-10`                          | 24–40px                         |
| Main section padding               | `py-18 lg:py-24`                          | 72px top/bottom, then 96px      |
| Hero panel padding                 | `px-5 py-10`, up to `lg:px-12.5 lg:py-17` | 20px/40px, then 50px/68px       |
| Testimonial padding                | `px-6 py-10`, up to `lg:px-15 lg:py-15`   | 24px/40px, then 60px            |

The hierarchy matters more than a universal margin: elements in one thought sit closer than separate groups; separate sections have the most space. Do not combine a full section margin with a full section padding accidentally. Exact half-step values in the reference are useful refinements, not a demand that every new panel have unique padding.

### Breakpoints

Use default, mobile-first Tailwind breakpoints. There are no custom breakpoint tokens for this direction. See [Tailwind responsive design](https://tailwindcss.com/docs/responsive-design).

| Prefix     | Minimum width  | Current use                                                                                 |
| ---------- | -------------- | ------------------------------------------------------------------------------------------- |
| Unprefixed | All widths     | Stacked content and the essential reading order                                             |
| `sm:`      | 40rem / 640px  | Increased gutters and initial two-column editorial layouts                                  |
| `md:`      | 48rem / 768px  | Service tabs replace mobile disclosures; scan copy and form can sit beside each other       |
| `lg:`      | 64rem / 1024px | Hero, work, testimonial, FAQ, and process gain larger-screen layouts; bento uses 12 columns |
| `xl:`      | 80rem / 1280px | Three benefit columns and selected roomy panel refinements                                  |
| `2xl:`     | 96rem / 1536px | Available default; no required homepage transition                                          |

Keep copy before supporting artwork in the mobile DOM order. The benefit icon stays beside its heading, with the explanation below, at every width. Do not restore the earlier full-height horizontal icon/copy split or place its explanatory text in a separate right column.

Unequal grids are deliberate composition tools: the hero uses roughly 1.12:1, services and scan roughly 1.1:1, and FAQ roughly 1:1.5. Explicit `minmax(0, …)` tracks prevent content from forcing a column wider than its available space. Arbitrary grid values can remain when they express a real relationship.

## 5. Shape, borders, and depth

Rounded rectangles establish the interface; capsules and organic shapes give the artwork character. Keep that distinction clear so decorative geometry does not make a control difficult to recognize.

| Utility        | Current radius | Use                                                              |
| -------------- | -------------- | ---------------------------------------------------------------- |
| `rounded-sm`   | 6px            | Work screenshot windows                                          |
| `rounded-md`   | 8px            | Main buttons and inputs                                          |
| `rounded-lg`   | 10px           | Base-radius role available for compact components                |
| `rounded-xl`   | 14px           | Intermediate role available for adoption                         |
| `rounded-2xl`  | 16px           | Hero, testimonials, service panels, contact, and inner scan form |
| `rounded-3xl`  | 24px           | Bento cards and outer scan panel                                 |
| `rounded-full` | Capsule        | Service selectors and compact badges                             |

The root `--radius` is **0.625rem**. `sm`, `md`, `lg`, and `xl` are project overrides derived from it; `2xl` and `3xl` retain Tailwind defaults. Do not assume all radii are derived from the root radius.

Use a **1px border** for subtle dividers and card boundaries. Screenshot edges use ink for definition; form fields use `border-input` rather than the lighter decorative border. The portrait currently has a 6px primary-green frame to separate it from its dark setting.

Organic radius values are intentional artwork exceptions. They vary by image instead of rounding every element into the same blob. Examples include asymmetric percentage radii behind work mockups and the testimonial portrait's irregular window. Keep device screens recognizable and preserve faces when cropping. Use `isolate`, local positioning, and appropriate clipping to contain decoration without covering content or focus outlines.

Depth comes primarily from transparent foreground imagery, overlapping illustration layers, solid shapes, and alternating surfaces. Cards do not require a shadow to be important.

## 6. Imagery and illustration

Prefer transparent PNG/WebP device mockups, product compositions, and purposeful native SVG artwork. Supporting shapes can sit behind them; keep the image itself clear. A genuine website screenshot may remain rectangular because its contents are evidence, with the surrounding composition supplying personality.

Photography should have a considered role and framing: an organic crop, an image window, or a composition that connects it to the section. Avoid unmodified rectangular stock-photo blocks as default decoration. Customer headshots should be large enough to recognize; the testimonial's current outer frame is up to 260px on mobile and 300px from `sm`.

The capsule motif uses rounded strokes, small dots, and a diagonal sweep of approximately **−39°**. Use the shared [CapsulePattern](../src/components/non-specialist-lab/CapsulePattern.astro) at selected visual anchors, currently the hero, testimonial, and contact panel. The drawn arrow is a small accent beside the hero artwork. Neither motif should appear behind every paragraph.

Decorative SVGs and Lottie icons use `aria-hidden="true"`. Informative screenshots and portraits need contextual alt text. Supply image dimensions to reserve space, lazy-load below-the-fold assets, and prioritize the main hero image where it is the important initial visual. Follow [image guidance](image_guidance.md) for `src/images`, `public/images`, Astro `Image`, and imported `.src` values in Svelte.

## 7. Motion

Motion adds small signs of life to artwork while leaving the reading layout stable.

| Pattern                    | Current setting                                            | Intended effect                                                                          |
| -------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `animate-work-blob`        | 4.8s, ease-in-out, repeating                               | Organic backdrop grows from scale 1 to 1.045 horizontally / 1.055 vertically and returns |
| `animate-work-blob-offset` | 6.2s, ease-in-out, −1.6s delay, repeating                  | A second backdrop drifts out of sync with the first                                      |
| `animate-pill-enter`       | 500ms, `cubic-bezier(0.22, 1, 0.36, 1)`                    | A capsule/dot rises 36px while fading in                                                 |
| Capsule sequence           | 60ms between marks; once per artwork when it enters view   | A quick sweep through the illustration rather than a simultaneous appearance             |
| Service panel              | 160ms fade when motion is allowed                          | Helps connect a selector change to its content                                           |
| Benefit Lottie             | 4s repeat interval, speed 1; homepage offsets 0/750/1500ms | Small animated icons beside headings                                                     |

Use transforms and opacity for decoration, not changes to surrounding layout dimensions. Content must remain available without a reveal animation. Capsule artwork is visible without JavaScript and bypasses the animated reveal when reduced motion is requested; work-blob animations use `motion-safe:`; service fades follow the motion preference.

**Adoption requirement:** the shared [InteractiveLottie](../src/components/InteractiveLottie.svelte) currently does not honor reduced motion. Add a static/reduced-motion treatment when migrating it. Indefinitely repeating artwork also needs a deliberate stop strategy: prefer bounded playback, or provide an appropriate pause/stop mechanism wherever WCAG's automatically moving-content condition applies. Reduced-motion support alone should not be treated as satisfying that condition. See [WCAG Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html).

## 8. Component patterns

### Actions, navigation, and focus

Primary actions use green fill, ink text, `rounded-md`, and a visible focus outline. The reference uses `min-h-13.5` (54px), `px-5 py-4`, and `leading-label`. The hero action uses `text-body` (17.6px); the existing service, scan, and closing contact actions retain `text-label` (13px). This is the current per-context sizing, not a requirement to shrink every new action label to 13px. Hover changes to primary-hover. Use a verb and an understandable outcome, such as “Explore website design” or “Talk through your website.” The diagonal arrow is decorative and follows the label.

Secondary actions are underlined text links with enough space to activate them, rather than another equally prominent filled button. Give each decision area one visually dominant action. Navigation uses compact familiar labels and a persistent conversation link. The header conversation link uses `text-caption` at its narrowest layout and `sm:text-body` from 640px; the main navigation and hero's secondary link retain `text-label`. The wordmark pairs the primary fox outline with Inter lettering and a blue dot.

Use anchors for navigation and buttons for in-place actions. New components should use a focus recipe such as `focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring`; an ink outline also works on the current pale surfaces. Choose a contrasting outline for dark surfaces and avoid clipping it. Do not use color alone to communicate active state, errors, or link affordance.

### Benefits

[BrightSideBenefitCard](../src/components/cards/BrightSideBenefitCard.svelte) is a dedicated Bright Side component. A **40px animated icon sits beside the heading**; the explanation follows below in `text-base leading-copy` (16px), left justified across the card. The card has no separate colored box background. This keeps the strip connected to the hero while giving each benefit its own grouping. Three columns begin at `xl`; narrower widths stack them.

### Work examples and testimonials

Work examples pair a readable screenshot with an organic green backdrop, a short interpretation, and a clear description of what the example demonstrates. Label library concepts as design examples; reserve client/project/result language for substantiated work.

The testimonial is a larger dark-green panel with a recognizable customer portrait, a readable quote, and attribution. Its contrast gives social proof a distinct place in the page. The current sample quote, client name, company name, and portrait are placeholders and remain labeled as such until replaced with approved authentic material.

### Service selector

[BrightSideServicesTabs](../src/components/sections/BrightSideServicesTabs.svelte) presents **Development, Website design, and Website review**. Each option includes a situation it suits, a two-part headline, a brief explanation, three checkmark benefits, a device illustration, and a link to the service page. This makes the section a decision aid with concrete value.

Each panel also includes a practical details strip: **What you receive, What you bring, and Investment & timing**. Use a semantic description list, a thin separating border, and readable `text-base` (16px) copy. The details stack until `lg`, then form three columns. Keep them within the selected service panel so the information stays connected to the offer.

Pricing is based on the value and expected return of each project. Scope and complexity inform the plan, but do not present page counts, hours, or a fixed package as the sole pricing basis. Timelines and collaboration vary substantially; explain that the proposal sets out the investment, scope, and milestones, with guidance and clear expectations for client input. Do not invent starting prices, uniform delivery times, or guaranteed returns.

From `md`, use pill tabs and one visible panel. The selected tab has primary fill and stronger weight. Preserve tab/tabpanel associations, `aria-selected`, roving tabindex, and Left/Right/Home/End keyboard navigation. Below `md`, use labeled disclosures with the same content; do not squeeze the tabs into a narrow horizontal strip. Use the [WAI-ARIA tabs pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) as the behavior reference. Essential service routes should remain discoverable in the wider site navigation, including without this hydrated selector.

### Process and FAQ

The pale-blue process band contains a real ordered sequence: Understand → Shape → Build & review. Brief titles, restrained numerals, and plain explanations make the engagement predictable. Keep actual steps numbered; section introductions stay unnumbered.

FAQ uses native `details`/`summary`, clear questions, thin dividers, and a plus/minus indicator. Questions use the inherited 16px interface size; answers use the global 18px paragraph size with `leading-copy`. It addresses remaining objections without putting every answer into the main reading path. Critical terms and promises still belong beside the relevant offer rather than only inside a closed answer.

### Free scan and forms

[BrightSideWebsiteScan](../src/components/sections/BrightSideWebsiteScan.svelte) uses a mint outer panel, an explanatory offer, and a paper form. The **fields themselves are always a single vertical column**, even when the explanation and form sit side by side. Request only the website URL and email in this concept. Keep persistent labels, useful format hints, correct input types/autocomplete, visible input boundaries, and a nearby status message.

The scan is currently a **coming-soon design preview**. It validates locally, does not send or save input, and shows a truthful preview message. No completed analysis or delivery is implied. A working version needs defined scan scope, delivery expectations, input validation, loading/success/error behavior, and accurate information about how submitted details are used. Its destination and backend are not established by this design guide.

An always-visible sample finding below the offer shows **the finding → why it matters → the first step**. Label it “Illustrative example” and keep it independent of form submission; it is not an analysis of an entered URL. Use semantic surface/text tokens and 16px reading copy, with stacked entries until `lg`. This preview makes the proposed deliverable tangible without claiming the scan exists. Distinguish basic scan signals from an expert review of messaging, visitor journeys, and business priorities.

The proposed **Improve or rebuild?** resource is a PDF/e-guide that helps readers choose an appropriate level of work and estimate its potential value. It complements the technical scan. A sample page or decision matrix should be available before requesting the complete guide by email. Its decision framework, ROI worksheet, placement, and future lead flow are outlined in [website_decision_guide.md](./website_decision_guide.md); the PDF and its delivery flow are not implemented.

### Blog bento and closing contact

[BrightSideBlogBento](../src/components/sections/BrightSideBlogBento.astro) uses a large primary-green featured card, smaller paper/mint cards, and a wide pale-blue card. Size signals editorial priority. It stacks on mobile, uses two columns from `sm`, and a 12-column layout from `lg`: the feature spans six columns and two rows, the two smaller cards span three columns each, and the wide card spans six.

Current topics are clearly marked as samples. Until articles exist, cards are previews without fabricated links, dates, or reading times. Published cards need descriptive real links, readable reading order, and consistent focus behavior; avoid nested competing links inside a single clickable card.

The closing mint contact panel returns to the hero's visual language. A centered invitation and one clear conversation action form the final decision point. The footer supplies identity, location, and useful navigation without introducing another sales section.

The lab's conversation actions currently open email as placeholder behavior. The intended production interaction is a guided dialog with two or three qualification questions, leading to a project inquiry. Maintain visible progress, persistent labels, keyboard/focus behavior, and a way to go back without losing answers. Keep this inquiry path distinct from requesting the free guide.

## 9. Homepage wireframe and flow

The sequence answers a visitor's questions in increasing detail. This is the chosen editorial rationale, not a measured claim that everyone reads in this order or that the sequence guarantees conversion.

| Order | Section               | Visitor's question                            | Why it appears here                                                                    |
| ----- | --------------------- | --------------------------------------------- | -------------------------------------------------------------------------------------- |
| 1     | Header and navigation | Where am I, and how do I contact you?         | Establishes identity and lets ready visitors act immediately.                          |
| 2     | Hero                  | What do you help with, and why should I care? | States the offer and judgment-led positioning, with an action and a route to examples. |
| 3     | Benefits              | What could a better website help me do?       | Connects the offer to practical value before deeper detail.                            |
| 4     | Work examples         | What does your design thinking look like?     | Makes the promise concrete through visuals and interpretation.                         |
| 5     | Testimonial           | What is it like to work with you?             | Adds customer experience alongside visual evidence.                                    |
| 6     | Services              | Which kind of help fits my situation?         | Turns interest into a relevant service route after visitors have seen proof.           |
| 7     | Process               | What happens if I move forward?               | Reduces uncertainty about collaboration and handoff.                                   |
| 8     | Free scan             | Is there a smaller first step?                | Offers a future low-commitment entry after the main paid offer is understandable.      |
| 9     | FAQ                   | What could stop me from getting started?      | Addresses rebuild scope, AI use, cost, and ongoing management.                         |
| 10    | Blog bento            | Can I learn more about your thinking?         | Supports visitors still researching without diverting the initial offer.               |
| 11    | Contact               | What should I do next?                        | Repeats the main action after evidence and objections have been addressed.             |
| 12    | Footer                | Where else can I go?                          | Provides orientation and secondary navigation.                                         |

The services section replaces the earlier weak engagement section because it offers a recognizable choice, concrete benefits, and a destination. The process then explains how that choice becomes an engagement. The scan sits lower so it supports the offer rather than becoming the site's main identity; the blog belongs near the footer because it is a supporting research path.

Visitors can use navigation and contextual links to skip ahead. Do not gate contact behind the full page, a quiz, an account, or a mandatory scan. The removed hero aside, “built around your business” section, and decorative section numbering are not part of this system.

### Adapting the flow to other pages

| Page                 | Recommended sequence                                                                                              | What carries across                                                                                                                |
| -------------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Service              | Specific offer → who it suits / outcomes → relevant work or proof → scope → process → FAQ → conversation          | Same colors, type hierarchy, artwork language, and clear next step; focus on one service instead of repeating a homepage selector. |
| About                | Point of view → founder portrait and story → working principles → relevant proof → conversation                   | The founder's face belongs here; retain the light, approachable treatment and connect background to customer value.                |
| Work / case study    | Project context → challenge → decisions and visuals → verified result → related work → conversation               | Distinguish real projects from concepts and show the reasoning behind the design.                                                  |
| Blog index / article | Clear topic hierarchy → genuine article previews; or title → readable article → related reading → relevant action | Bento can organize an index; article prose uses a narrower reading measure and fewer decorations.                                  |
| Contact              | Clear invitation → minimal form/contact route → expectations → useful supporting details                          | Make the action easy to complete; do not reproduce the homepage's entire proof sequence.                                           |

Reuse visual and interaction rules, not every homepage section. A short page can use the paper canvas, one mint panel, a device composition, and a clear action without the full alternating-color sequence.

## 10. UX laws and principles in practice

These principles explain design choices. The applications below are design judgments; they are not direct experimental validation of this site.

| Principle                                                               | Application to this design                                                                                                                                                                                                     | Practical limit                                                                                                                               |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Hick's law: choice uncertainty affects response time                    | A focused navigation and three clearly labeled current services make the next decision easier to frame. [Hick's original research](https://www.tandfonline.com/doi/abs/10.1080/17470215208416600).                             | A laboratory choice-reaction result does not prove that deleting useful options always improves a website. Relevance and clear labels matter. |
| Fitts's law: target width and movement distance affect acquisition time | Generously padded controls and nearby contextual actions make interaction less precise and demanding. [Fitts's original paper](https://doi.org/10.1037/h0055392).                                                              | Target size also needs responsive layout, spacing, contrast, and accessible semantics; the law alone does not establish compliance.           |
| Gestalt proximity                                                       | Benefit icon and heading share a row; their explanation follows nearby. Labels stay close to their fields, while sections have larger gaps. [Proximity in visual design](https://www.nngroup.com/articles/gestalt-proximity/). | Recheck grouping when columns stack; decorative similarity must not obscure which text belongs together.                                      |
| Consistency and recognition                                             | The same green action treatment, familiar navigation, tab labels, and disclosure behavior repeat across contexts. [Nielsen's usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/).                | Keep the patterns consistent while tailoring content and layout to the page's task.                                                           |
| Progressive disclosure                                                  | Service panels and FAQ answers reveal detail when requested while keeping the overview compact. [Nielsen on progressive disclosure](https://www.nngroup.com/articles/progressive-disclosure/).                                 | Keep essential offer information and the route to detail visible. Avoid deeply nested disclosures.                                            |
| Visibility of status and error prevention                               | Form labels and URL guidance set expectations; coming-soon and submission messages explain what actually happened. [Nielsen's usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/).               | A working scan needs real progress and recovery states; decorative animation cannot stand in for feedback.                                    |

Social proof, visual hierarchy, and a predictable process are additional strategies: examples demonstrate design choices, an authentic testimonial can support confidence, and the process explains an unfamiliar engagement. Their effectiveness depends on credible content and actual visitor needs. Do not justify a layout with invented conversion percentages, a universal three-click rule, or a claim that every visitor follows one fixed eye-scanning pattern.

## 11. Accessibility and content standards

Aim for WCAG 2.2 AA as pages are adopted; this document records requirements and known gaps rather than certifying the current prototype.

- Preserve semantic landmarks, a skip-to-content link, useful headings, logical DOM order, and keyboard-operable controls. Prefer native elements; add ARIA for patterns that need it.
- Keep all meaningful text readable using the contrast rules above. Link identification and active states should have cues beyond color.
- Use **44px or greater** as the project target for primary interactive controls. This is a comfortable design target; WCAG 2.2 AA's Target Size (Minimum) criterion is **24×24 CSS pixels with specified exceptions**, not a blanket 44px rule. See [WCAG target size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).
- Let text resize and containers reflow. Normal page content should remain usable at a width equivalent to **320 CSS pixels**, without requiring horizontal page scrolling. Avoid hard-height text boxes, clipped labels, and forced line breaks that break narrow layouts. See [WCAG reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html).
- Keep focus visible and unobscured. Decorations should not receive focus, intercept clicks, cover fields, or carry essential instructions.
- Honor reduced motion and resolve repeating-animation behavior as described above. Meaningful content and actions remain available when animation or JavaScript is unavailable.
- Give forms persistent visible labels and nearby guidance. For a working form, explain errors in plain language, identify affected fields, preserve useful input, and announce submission status.
- Use approximately 17.6–18px for general explanations and a deliberate 16px treatment where the context suits it. Reserve `text-sm`, `text-label`, and smaller roles for the compact exceptions described in the typography section. Important instructions, terms, and substantial descriptions deserve a larger reading size even when a small token technically exists.

Copy should be direct, specific, and grounded in the business owner's task. Explain technical choices in terms of what they help people understand or do. Avoid exaggerated promises, manufactured urgency, unsupported metrics, and generic filler sections. Existing benefit claims such as outperforming 99.9% of competitors or having 0% downtime need evidence or revision before production publication; their presence in the study does not make them approved claims.

## 12. Tailwind conventions and migration

Import [tailwind.css](../src/styles/tailwind.css) through the appropriate shared layout. Keep reusable design tokens, font registration, and shared keyframes there. Use Tailwind classes within Astro/Svelte components; do not introduce separate component `.css` files for this direction.

| Prefer                     | Instead of                                              | Reason                                  |
| -------------------------- | ------------------------------------------------------- | --------------------------------------- |
| `text-primary-strong`      | `text-[color:var(--primary-strong)]`                    | Reuses the registered brand token       |
| `bg-mint`                  | `bg-[var(--mint)]`                                      | Expresses the intended surface directly |
| `max-w-65`                 | `max-w-[260px]`                                         | Uses the existing numeric spacing scale |
| `size-10`                  | `h-10 w-10`                                             | One utility for equal dimensions        |
| `sm:`, `md:`, `lg:`, `xl:` | Repeated `min-[640px]:` / custom pixel breakpoints      | Shared responsive behavior              |
| `text-section`             | Repeated arbitrary font size, line-height, and tracking | A shared typography role                |

Arbitrary values remain appropriate for one-off organic radii, intentional unequal grid tracks, SVG placement, and selector/data variants. Keep them when they communicate a real composition or behavior that standard utilities cannot. Repeated reusable values should become meaningful global tokens. Do not create tokens for every individual offset or hide unrelated styles behind a vague helper class. See [Tailwind's theme namespaces](https://tailwindcss.com/docs/theme#theme-variable-namespaces).

### Adoption sequence

1. **Confirm the page's task and content.** Decide what visitors need to understand and do; preserve useful routes and information.
2. **Apply the light shell and typography deliberately.** Check inherited `.dark` classes, theme toggles, layout font choices, and global heading/paragraph/link defaults alongside explicit component roles. The current hero deliberately uses the global h1 treatment, and paragraphs without size utilities use the global 18px default. Preserve these choices when extracting or migrating sections; do not automatically replace them with the earlier fluid hero or small supporting-copy styles. Removing a color override alone is not a full migration.
3. **Replace legacy presentation with the shared roles.** Use background/foreground, primary actions, mint/blue surfaces, the radius scale, and normal breakpoints. The `body-*` color aliases still exist for compatibility; prefer the new names for new work.
4. **Select relevant component patterns.** Reuse the dedicated Bright Side components where their role fits. Avoid returning to large override configurations on legacy `BenefitCard` or `ServicesTabs` solely to imitate the new direction.
5. **Compose purposeful imagery and spacing.** Keep decoration behind readable content and preserve grouping in the mobile order.
6. **Resolve prototype gaps before publication.** Verify real proof and claims, correct service destinations, actual article links, meaningful form behavior, text contrast, font weights, and motion controls.
7. **Remove obsolete styling after the page no longer needs it.** Reconcile old base rules and aliases carefully so pages still awaiting migration retain their behavior.

The [lab layout](../src/layouts/NonSpecialistLabLayout.astro) is a useful implementation reference, not a production layout to copy unchanged. The design-study strip, lab navigation, “07 / Bright Side” identifier, study metadata, and `noindex,nofollow` are prototype infrastructure. Production pages need their own appropriate navigation, metadata, and indexing settings.

### Current implementation status

| Area                                             | Status / remaining work                                                                                                                                                           |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Visual direction and global tokens               | Bright Side is the selected direction; tokens are implemented in the shared Tailwind stylesheet. Light remains the default; the lab toggle previews existing dark semantic roles. |
| Benefits, services, scan preview, and blog bento | Dedicated components exist. Their structure can be reused when appropriate.                                                                                                       |
| Work and testimonial evidence                    | Work images are labeled design examples; the testimonial is sample content with a placeholder portrait.                                                                           |
| Free scan                                        | Preview only; no scan service, data capture, or delivery is implemented.                                                                                                          |
| Decision guide                                   | PDF/e-guide concept and ROI worksheet outlined; no published download or lead-delivery flow yet.                                                                                |
| Conversation action                              | Email is lab placeholder behavior; production will use a short multi-step qualification dialog.                                                                               |
| Blog content                                     | Sample topics; real articles and destinations are still needed.                                                                                                                   |
| Accessibility alignment                          | Readable token pairings exist; bright-green text on light surfaces, Lottie reduced motion, and repeating animation need attention during adoption.                                |
| Font weights                                     | Current Manrope 900 requests exceed its declared 200–800 range.                                                                                                                   |
| Existing page styles                             | Legacy base rules and compatibility aliases remain; migrate deliberately rather than treating all existing defaults as part of Bright Side.                                       |

When the system evolves, update the global token source and this guide together. Preserve the design's recognizable relationships—light canvas, green identity, readable hierarchy, immersive imagery, considered playfulness, and clear actions—while allowing each page to answer its own visitor questions.
