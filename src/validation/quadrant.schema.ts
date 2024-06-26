import { z } from "zod";

const QuadrantSchema = z.object({
  name: z.string(),
})

const QuadrantCollectionSchema = z.array(QuadrantSchema).length(4);

type QuadrantType = z.infer<typeof QuadrantSchema>;

type QuadrantCollectionType = z.infer<typeof QuadrantCollectionSchema>

export {
  QuadrantSchema,
  QuadrantCollectionSchema,
  type QuadrantType,
  type QuadrantCollectionType,
}