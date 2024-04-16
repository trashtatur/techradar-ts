import { z } from 'zod';

const EntrySchema = z.object({
  label: z.string(),
  quadrant: z.number().min(0).max(3).int(),
  ring: z.number().min(0).max(3).int(),
  moved: z.number().min(-1).max(1).int(),
  active: z.boolean(),
  link: z.string().url().optional(),
});

const EntryCollectionSchema = z.array(EntrySchema);

type EntryType = z.infer<typeof EntrySchema>;

type EntryCollectionType = z.infer<typeof EntryCollectionSchema>;

export {
  EntrySchema,
  EntryCollectionSchema,
  EntryType,
  EntryCollectionType,
};
