import { MenuWhereUniqueInput } from "../menu/MenuWhereUniqueInput";

export type HourIntervalUpdateInput = {
  days?: Array<
    "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday"
  >;
  fromHour?: number;
  fromMinute?: number;
  menus?: MenuWhereUniqueInput | null;
  toHour?: number;
  toMinute?: number;
};
