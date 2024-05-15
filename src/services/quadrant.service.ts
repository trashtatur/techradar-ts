import { QuadrantSchema, type QuadrantType } from "../validation/quadrant.schema";

const createQuadrant = (name: string) => QuadrantSchema.parse({
  name
});

const validateQuadrant = (entry: unknown): QuadrantType => QuadrantSchema.parse(entry);

export {
  createQuadrant,
  validateQuadrant,
}