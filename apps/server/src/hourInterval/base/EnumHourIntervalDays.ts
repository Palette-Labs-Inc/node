
import { registerEnumType } from "@nestjs/graphql";

export enum EnumHourIntervalDays {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
}

registerEnumType(EnumHourIntervalDays, {
  name: "EnumHourIntervalDays",
});
