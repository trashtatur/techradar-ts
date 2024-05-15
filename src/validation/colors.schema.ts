import { z } from "zod";

const zColor = z.string().startsWith('#').max(7).min(2);

const ColorsSchema = z.object({
  background: zColor,
  grid: zColor,
  inactive: zColor,
});

type ColorsType = z.infer<typeof ColorsSchema>;

export {
  ColorsSchema,
  type ColorsType,
}