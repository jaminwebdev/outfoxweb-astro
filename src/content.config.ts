import { z, defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';

// https://docs.astro.build/en/guides/images/#images-in-content-collections

const blog = defineCollection({
	loader: glob({ pattern: '**/*.(md|mdx)', base: './src/content/blog' }),
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
	loader: glob({ pattern: '**/*.(md|mdx)', base: './src/content/portfolio' }),
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
