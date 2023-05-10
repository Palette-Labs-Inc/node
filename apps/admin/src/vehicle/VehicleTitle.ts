import { Vehicle as TVehicle } from "../api/vehicle/Vehicle";

export const VEHICLE_TITLE_FIELD = "category";

export const VehicleTitle = (record: TVehicle): string => {
  return record.category || String(record.id);
};
