<script lang="ts">
  import type BlogMeta from '@/utils/blog.ts'

  interface Props {
    blog: BlogMeta
  }

  let { blog }: Props = $props()
</script>

<div class="rounded-xl overflow-hidden bg-body-color-secondary flex flex-col hover:scale-105 hover:[&_h3]:text-tertiary transition-all duration-300">
  <a href="blog/{blog.slug}" class="h-full">
    <div class="h-[265px] overflow-hidden">
        <img src={blog.cover.src} alt="{blog.title} cover image" class="h-full w-full"/>
    </div>
    <div class="pt-4 px-4 pb-8 grid">
      <h3 class="text-2xl">
        {blog.title}
      </h3>
      <div class="flex gap-2 text-primary mb-2">
        {#each blog.tags as tag}
          <span>#{tag}</span>
        {/each}
      </div>
      <p>{blog.description}</p>
    </div>
  </a>
</div>