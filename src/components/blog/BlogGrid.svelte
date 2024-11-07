<script lang="ts">
  import type { BlogMeta } from '@/utils/blogs.ts'
  import BlogCard from '@components/blog/BlogCard.svelte';

  interface Props {
    blogs: BlogMeta[]
  }

  let { blogs }: Props = $props()
  let searchTerm = $state('')
  let filteredBlogs = $derived(blogs.filter(blog => 
    blog.searchTerm.toLowerCase().includes(searchTerm.toLowerCase())
  ))
</script>

<section class="my-12">
  <label for="search">
    <input
      name="search"
      class="block rounded-lg p-4 w-full bg-color-body-secondary text-body-text-dark"
      type="text"
      placeholder="Search..."
      bind:value={searchTerm} />
  </label>
</section>
<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {#each filteredBlogs as blog (blog)}
    <BlogCard {blog} />
  {/each}
</section>