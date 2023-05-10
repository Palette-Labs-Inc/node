import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type HourIntervalWhereInput = {
  fromHour?: IntFilter;
  fromMinute?: IntFilter;
  id?: StringFilter;
  toHour?: IntFilter;
  toMinute?: IntFilter;
};
