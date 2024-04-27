import { z, defineCollection } from 'astro:content'

const devLogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    id: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
    previous_issue: z.string(),
    created_at: z.date(),
    last_updated_at: z.date(),
    previous_created_at: z.date(),
  }),
})

export const collections = {
  devlog: devLogCollection,
}
