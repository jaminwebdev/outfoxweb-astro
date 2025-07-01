export type Testimonial = {
    imgPath: string;
    name: string;
    body: string;
};

export const testimonials: Record<string, Testimonial> = {
	kyle: {
		name: 'Kyle',
		imgPath: '/images/Placeholder_Headshot.webp',
		body: 'Foxcraft Digial saved my life and the life of my children.'
	},
	stacy: {
		name: 'Stacy',
		imgPath: '/images/Placeholder_Headshot.webp',
		body: `We can’t believe it - Our conversions doubled, and our revenue did too.`
	}
};
