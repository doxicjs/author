import { z, defineCollection } from 'astro:content'

const baseSchema = z.object({
  title: z.string(),
  author: z.string(),
  tags: z.array(z.string()),
  created_at: z.date(),
  last_updated_at: z.date(),
})

export type TBaseSchema = z.infer<typeof baseSchema>

const devlogSchema = baseSchema.extend({
  id: z.string(),
  previous_issue_id: z.string(),
  previous_created_at: z.date(),
})

export type TDevlogSchema = z.infer<typeof devlogSchema>

const devlogCollection = defineCollection({
  type: 'content',
  schema: devlogSchema,
})

export const collections = {
  devlog: devlogCollection,
}
