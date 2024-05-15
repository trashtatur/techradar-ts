import { ColorsSchema, type ColorsType } from "../validation/colors.schema";

type color = `#${string}`
const createColors = (background: color, grid: color, inactive: color) => ColorsSchema.parse({
  background, grid, inactive
});

const validateColors = (entry: unknown): ColorsType => ColorsSchema.parse(entry);


export {
  createColors,
  validateColors,
}