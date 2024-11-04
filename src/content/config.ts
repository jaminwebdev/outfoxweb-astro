import { z, defineCollection, reference } from 'astro:content';

// https://docs.astro.build/en/guides/images/#images-in-content-collections

const blog = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string().max(75, { message: 'Title must be 75 characters or less' }),
			description: z.string().max(150, { message: 'Description must be 150 characters or less' }),
			tags: z.array(z.string()),
			author: z.string().optional().default('Jamin Roberts'),
			pubDate: z.date(),
			coverImage: image(),
			relatedPosts: z.array(reference('blog'))
		})
});

const portfolio = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().max(150, { message: 'Description must be 150 characters or less' }),
			tags: z.array(
				z.enum([
          'Design',
          'SEO',
          'Webdev',
          'Audit'
				])
			),
			coverImage: image(),
			pubDate: z.date()
		})
});

export const collections = { blog, portfolio };
