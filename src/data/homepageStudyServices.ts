import type { ImageMetadata } from 'astro';
import DevelopmentImage from '@/images/Laptop_Audit.webp';
import DesignImage from '@/images/Figma_Tablet.webp';
import ReviewImage from '@/images/Laptop_Metrics_Right.webp';

export type ServiceId = 'development' | 'design' | 'review';

export interface Service {
  id: ServiceId;
  label: string;
  fit: string;
  headline: [string, string];
  description: string;
  benefits: string[];
  details: { label: string; description: string }[];
  image: ImageMetadata;
  alt: string;
  href: string;
  linkLabel: string;
}

export const services: Service[] = [
  {
    id: 'development',
    label: 'Development',
    fit: 'For a new website or a rebuild',
    headline: ['Built for people.', 'Ready for your business.'],
    description:
      'A custom website with a clear structure, responsive pages, and a build you can understand and manage.',
    benefits: [
      'Make the next step easy on any screen.',
      'Keep pages focused, fast, and straightforward to use.',
      'Get a clear plan for launch, access, and handoff.',
    ],
    details: [
      {
        label: 'What you receive',
        description: 'A custom, responsive website with a plan for launch and handoff.',
      },
      {
        label: 'What you bring',
        description: 'Your goals, existing content, brand assets, and feedback along the way.',
      },
      {
        label: 'Investment & timing',
        description:
          'Planned around your business goals, expected value, and the build’s complexity.',
      },
    ],
    image: DevelopmentImage,
    alt: 'Website development illustration with phone mockups and performance graphics',
    href: '/web-development',
    linkLabel: 'Explore web development',
  },
  {
    id: 'design',
    label: 'Website design',
    fit: 'For a site that no longer reflects your business',
    headline: ['Make your offer clear.', 'Make your website feel like you.'],
    description:
      'Bring your message, layout, and visual identity together so visitors can understand your business and find their next step.',
    benefits: [
      'Give your services and contact actions a clear hierarchy.',
      'Create a distinctive look around your brand.',
      'See the design direction before development begins.',
    ],
    details: [
      {
        label: 'What you receive',
        description: 'A visual direction and page layouts ready to guide development.',
      },
      {
        label: 'What you bring',
        description: 'Your offer, brand assets, content, and examples of what feels right.',
      },
      {
        label: 'Investment & timing',
        description: 'Shaped around the improvements that matter most for your business.',
      },
    ],
    image: DesignImage,
    alt: 'Tablet mockup showing a website design in Figma',
    href: '/web-design',
    linkLabel: 'Explore website design',
  },
  {
    id: 'review',
    label: 'Website review',
    fit: 'For an existing website with unanswered questions',
    headline: ['Know what needs work.', 'Know where to start.'],
    description:
      'An expert look at your current website, with practical priorities for usability, messaging, and technical improvements.',
    benefits: [
      'Find friction in the paths people need to take.',
      'Separate urgent fixes from useful later improvements.',
      'Get recommendations explained in plain language.',
    ],
    details: [
      {
        label: 'What you receive',
        description: 'Explained findings and a prioritized set of practical next steps.',
      },
      {
        label: 'What you bring',
        description: 'Your website, business goals, and the questions you want answered.',
      },
      {
        label: 'Investment & timing',
        description: 'Scoped around the questions and decisions your business needs to resolve.',
      },
    ],
    image: ReviewImage,
    alt: 'Laptop mockup surrounded by website review and audit graphics',
    href: '/website-audit',
    linkLabel: 'Explore website reviews',
  },
];
