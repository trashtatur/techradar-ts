import { addEntryToRadarConfig, createRadar, validateRadarConfig } from "./services/radar.service";
import { createEntry, validateEntry } from "./services/entry.service";
import { createColors, validateColors } from "./services/colors.service";
import { createQuadrant, validateQuadrant } from "./services/quadrant.service";
import { createRing, validateRing } from "./services/ring.service";

import type { RadarConfigurationType } from "./validation/radar-configuration.schema";
import type { RingCollectionType, RingType } from "./validation/ring.schema";
import type { QuadrantCollectionType, QuadrantType } from "./validation/quadrant.schema";
import type { ColorsType } from "./validation/colors.schema";
import type { EntryCollectionType, EntryType } from "./validation/entry.schema";

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