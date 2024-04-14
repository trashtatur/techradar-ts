import { EntrySchema, EntryType } from "../validation/entry.schema";

const createEntry = (label: string, quadrant: 0|1|2|3, ring: typeof quadrant, moved: -1|0|1): EntryType => EntrySchema.parse({
  label, quadrant, ring, moved
});

const validateEntry = (entry: unknown): EntryType => EntrySchema.parse(entry);


export {
  createEntry,
  validateEntry,
}