import { RadarConfigurationSchema, RadarConfigurationType } from "../validation/radar-configuration.schema";
import type { EntryType } from "../validation/entry.schema";
import { radar_visualization } from "./dependency/radar-0.8";

const createRadar = (radarConfiguration: RadarConfigurationType) => {
  const validationResult = RadarConfigurationSchema.parse(radarConfiguration);
  radar_visualization(validationResult);
}

const validateRadarConfig = (radarConfig: unknown): RadarConfigurationType => RadarConfigurationSchema.parse(radarConfig);

const addEntryToRadarConfig = (entry: EntryType, radarConfig: RadarConfigurationType): RadarConfigurationType => {
  radarConfig.entries.push(entry);
  return RadarConfigurationSchema.parse(radarConfig);
}

export {
  createRadar,
  validateRadarConfig,
  addEntryToRadarConfig,
}