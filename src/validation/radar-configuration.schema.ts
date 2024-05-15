import { z } from "zod";
import { ColorsSchema } from "./colors.schema";
import { QuadrantCollectionSchema, QuadrantSchema } from "./quadrant.schema";
import { RingCollectionSchema } from "./ring.schema";
import { EntryCollectionSchema } from "./entry.schema";

const RadarConfigurationSchema = z.object({
  svg_id: z.string(),
  date: z.string().regex(new RegExp(/\d{4}\.\d{2}/)),
  width: z.number().int().nonnegative(),
  height: z.number().int().nonnegative(),
  scale: z.number().positive(),
  colors: ColorsSchema,
  title: z.string(),
  quadrants: QuadrantCollectionSchema,
  rings: RingCollectionSchema,
  print_layout: z.boolean(),
  zoomed_quadrant: z.number().int().min(0).max(3).optional(),
  links_in_new_tabs: z.boolean(),
  entries: EntryCollectionSchema
});

type RadarConfigurationType = z.infer<typeof RadarConfigurationSchema>;

export {
  RadarConfigurationSchema,
  type RadarConfigurationType,
}