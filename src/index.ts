import { addEntryToRadarConfig, createRadar, validateRadarConfig } from "./services/radar.service";
import { createEntry, validateEntry } from "./services/entry.service";
import { createColors, validateColors } from "./services/colors.service";
import { createQuadrant, validateQuadrant } from "./services/quadrant.service";
import { createRing, validateRing } from "./services/ring.service";
import { RadarConfigurationType } from "./validation/radar-configuration.schema";
import { RingCollectionType, RingType } from "./validation/ring.schema";
import { QuadrantCollectionType, QuadrantType } from "./validation/quadrant.schema";
import { ColorsType } from "./validation/colors.schema";
import { EntryCollectionType, EntryType } from "./validation/entry.schema";

export {
  createRadar,
  validateRadarConfig,
  createEntry,
  validateEntry,
  addEntryToRadarConfig,
  createColors,
  validateColors,
  createQuadrant,
  validateQuadrant,
  createRing,
  validateRing,
}

export type {
  RingType,
  RingCollectionType,
  RadarConfigurationType,
  QuadrantType,
  QuadrantCollectionType,
  EntryType,
  EntryCollectionType,
  ColorsType,
}