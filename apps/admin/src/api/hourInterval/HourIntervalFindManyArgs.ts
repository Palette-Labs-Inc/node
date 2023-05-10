import { HourIntervalWhereInput } from "./HourIntervalWhereInput";
import { HourIntervalOrderByInput } from "./HourIntervalOrderByInput";

export type HourIntervalFindManyArgs = {
  where?: HourIntervalWhereInput;
  orderBy?: Array<HourIntervalOrderByInput>;
  skip?: number;
  take?: number;
};
