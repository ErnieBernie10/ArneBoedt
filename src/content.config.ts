import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    accent: z.string(),
    pubDate: z.coerce.date(),
    readTime: z.string(),
    cta: z.string(),
  }),
});

export const collections = { blog };
