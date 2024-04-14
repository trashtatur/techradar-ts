import { RingSchema, RingType } from "../validation/ring.schema";

type color = `#${string}`
const createRing = (name: string, color: color) => RingSchema.parse({
  name, color
});

const validateRing = (entry: unknown): RingType => RingSchema.parse(entry);


export {
  createRing,
  validateRing,
}