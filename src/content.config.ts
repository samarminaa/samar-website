import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cover: z.string().optional(),
    role: z.string().optional(),
    tools: z.array(z.string()).optional(),
    links: z.array(z.object({
      label: z.string(),
      url: z.string(),
    })).optional(),
    gallery: z.array(z.string()).optional(),
    order: z.number().optional(),
    coverPosition: z.string().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    timeline: z.array(z.object({
      date: z.string(),
      title: z.string(),
      description: z.string(),
    })).optional(),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cover: z.string().optional(),
    pdf: z.string().optional(),
    externalUrl: z.string().optional(),
    category: z.enum(['travel-guides', 'city-guides', 'travel-writing']).optional(),
    order: z.number().optional(),
  }),
});

export const collections = { projects, guides, pages };
