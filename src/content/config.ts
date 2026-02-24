import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.number().int(),
    industry: z.string(),
    category: z.string(),
    summary: z.string(),
    thumbnail: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    featured: z.boolean().default(false)
  })
});

const musings = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.coerce.date(),
    topic: z.string(),
    summary: z.string(),
    thumbnail: z.string().optional(),
    featured: z.boolean().default(false)
  })
});

const experiments = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.number().int(),
    area: z.string(),
    summary: z.string(),
    thumbnail: z.string().optional(),
    featured: z.boolean().default(false)
  })
});

export const collections = {
  caseStudies,
  musings,
  experiments
};
