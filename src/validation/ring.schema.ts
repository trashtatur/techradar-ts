import { z } from 'zod';

const RingSchema = z.object({
  name: z.string(),
  color: z.string().startsWith('#').max(7).min(2),
})

const RingCollectionSchema = z.array(RingSchema).max(4);

type RingType = z.infer<typeof RingSchema>;

type RingCollectionType = z.infer<typeof RingCollectionSchema>

export {
  RingSchema,
  RingCollectionSchema,
  RingType,
  RingCollectionType,
};