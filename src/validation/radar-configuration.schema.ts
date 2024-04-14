import { z } from "zod";
import { ColorsSchema } from "./colors.schema";
import { QuadrantCollectionSchema } from "./quadrant.schema";
import { RingCollectionSchema } from "./ring.schema";
import { EntryCollectionSchema } from "./entry.schema";

const RadarConfigurationSchema = z.object({
  svg_id: z.string(),
  width: z.number().int().nonnegative(),
  height: z.number().int().nonnegative(),
  scale: z.number().positive(),
  colors: ColorsSchema,
  title: z.string(),
  quadrants: QuadrantCollectionSchema,
  rings: RingCollectionSchema,
  print_layout: z.boolean(),
  links_in_new_tabs: z.boolean(),
  entries: EntryCollectionSchema
});

type RadarConfigurationType = z.infer<typeof RadarConfigurationSchema>;

export {
  RadarConfigurationSchema,
  RadarConfigurationType,
}