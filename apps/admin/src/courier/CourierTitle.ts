import { Courier as TCourier } from "../api/courier/Courier";

export const COURIER_TITLE_FIELD = "id";

export const CourierTitle = (record: TCourier): string => {
  return record.id || String(record.id);
};
