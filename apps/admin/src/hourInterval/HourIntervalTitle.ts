import { HourInterval as THourInterval } from "../api/hourInterval/HourInterval";

export const HOURINTERVAL_TITLE_FIELD = "id";

export const HourIntervalTitle = (record: THourInterval): string => {
  return record.id || String(record.id);
};
