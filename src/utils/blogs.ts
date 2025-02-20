import { getCollection } from "astro:content";

const allBlogs = await getCollection("blog");

export const allBlogMeta = allBlogs.map(entry => ({
  slug: entry.id,
  cover: entry.data.coverImage,
  title: entry.data.title,
  tags: entry.data.tags,
  description: entry.data.description,
  searchTerm: `${entry.data.title} ${entry.data.tags.join('')} ${entry.data.description}`
}))

export type AllBlogMeta = typeof allBlogMeta
export type BlogMeta = AllBlogMeta[number]

