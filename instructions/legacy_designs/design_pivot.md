## Context

This project has a predetermined design that I manually implemented across the pages that exist today - this was pre AI. The website is not finished at all - it's been left in limbo for years. I'm kicking things off again, but the design and all the implementations look outdated in a sense. You can find the current snapshots of some core pages in ./instructions/legacy_designs. Ignore ./instructions/legacy_designs/whimsy for now.

What I want you to do is evaluate the current designs and see what we can do to spruce up the design significantly. It falls victim to a lot of design patterns that have since been labeled as AI slop - gradients, many colors, semi-translucent background blobs (a green-ish one is in the top right of every page), etc. I'd like a breakdown of the good bad and ugly, and I think we should lean on the current branding/business model to decide where to pivot from here.

I also want you to analyze the general page flows/wireframes of the screenshots of the existing pages. Look for improvements, but largely I'm mostly focused on design. All the proposed designs should follow the same improved wireframe structure/flow so comparisons are more "equal" and easier to reason about.

Ideally, what I want after you create a document of findings are several separate focused iterations on creating new proposed/example designs under a new route for me to peruse and decide what I like about this or that. After honing in on the new design, I plan to come up with a new design guide to then apply across existing pages.

The pages should be homepage replacements, but I include screenshots for multiple pages so you have a bigger picture of the website's current design approach, section reuse, etc.

The todo/implementation document made after the design-findings document should include the proposed new directions of the design with small todo lists with stopping points for review. I want to review each proposed design/page with a chance for feedback and revisions before moving on to implement the next design.

Let's start with 3 new directions at first, with room to continually build more.

The business model has also pivoted to not focus on things like automation, seo, and website in a weekend like products. That's a later concern. First I want an updated design system and we need to reconcile how it looks now vs what the new business model and etc will be. You can find all things business oriented in ~/.opencode/docs/outfox_web with respect to outfox web documentation.

## Imagery

In my original design I make use of a lot of device mockups. PNGs with transparent backgrounds. To me, it makes the imagery feel more immersive as opposed to boring rectangular images that exist on a lot of websites. I never use plain rectangular stock images on real websites. If stock imagery must be used, I prefer to spruce it up with clip paths or something else to make it more unique and feel like higher effort. Plopping a rectangular stock image on a page seems so lazy.

## Color Palette

The following colors from dark mode have traditionally been the primary colors on the site:

/* custom */
--body-color: hsl(240, 6%, 12%);
--body-color-secondary: hsl(210, 9%, 14%);
--body-color-tertiary: hsl(210, 4%, 31%);
--body-text: hsl(240, 7%, 96%);
--primary: hsl(162, 72%, 65%);
--secondary: hsl(206, 81%, 50%);
--tertiary: hsl(259, 81%, 64%);
--orange: hsl(15, 92%, 63%);

Slight variations in light values are fine, but please use the primary green from dark mode ( hsl(162, 72%, 65%) ) as much as possible. The other blue and purple colors are welcome (secondary and tertiary), but I also like monochromatic color palettes so shades of the primary are fine.

You can mostly ignore the shadcn stuff found in global.css if you come across it. I toyed with adding shadcn components in the future but hadn't configured it to use the brand colors.

## Additional Business Context

I still have the same focus on the industries outlined, however, I want to add to the picture: I want to be the expert for businesses that are lost in a sea of AI hype and news. There are so many tools available today for people to DIY a website, or for less experienced developers to convince owners to trust their work while they pump out slop or simple templates without much forethought - just a shiny toy that doesn't convert. I absolutely use AI as well to speed up my work or to give me ideas, however, I read every line and vet every decision and push back and provide an expert lens to view things through. I'd like to be that expert for others in my target demographics. You want an F1 driver at the wheel of your racecar - not someone that has no idea what they're doing (don't use that metaphor anywhere it's a sloppy approximation of what I mean).

## Subsequently

We should include some feedback from a copywriting expert in this brand refresh session. I know we're focused on design, but copy and content strategy also fit into how the "new" wireframe should flow.

Invoke the copywriter skill to add its evaluation. I know I'm focused on pivoting the design/ux strategy, but copywriting is of high importance as well. If we only pivot the design to a "fresh" aesthetic but don't improve copy and what we're conveying, we really only have a new design system. Have the copywriter review the page screenshots and provide some concise initial findings in this session to aid with generating more meaningful proposals. I've read through the generated findings, system draft, and ux todos - they all look good. But I want at least a shallow evaluation from a copywriter as well

## Finally

Before doing any work, I want you to ask me what directory to place the new designs in. For example, I have an existing directory called /codex-lab in ./src/pages/codex-lab - ignore the contents of that directory but that's where I placed a previous effort. I'll want these in a different directory.

Also, unless otherwise specified, ignore any information in the ./sessions directory. You may or may not have been invoked with the ux specialist from the start, which dictates that you create or continue working with session docs - I only want you to do this if you were invoked with that specialist from the start.

Follow best practices for all things ux/wireframing/design/copywriting.

Ask any clarifying questions you have.

## Do NOT

- run any git commands
- run any install commands with npm without my permission
