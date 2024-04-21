
import { z, defineCollection } from 'astro:content';

const devLogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  'dev-logs': devLogCollection,
};