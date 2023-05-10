import { SortOrder } from "../../util/SortOrder";

export type HourIntervalOrderByInput = {
  createdAt?: SortOrder;
  days?: SortOrder;
  fromHour?: SortOrder;
  fromMinute?: SortOrder;
  id?: SortOrder;
  menusId?: SortOrder;
  toHour?: SortOrder;
  toMinute?: SortOrder;
  updatedAt?: SortOrder;
};
