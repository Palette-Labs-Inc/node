import { WaypointWhereInput } from "./WaypointWhereInput";
import { WaypointOrderByInput } from "./WaypointOrderByInput";

export type WaypointFindManyArgs = {
  where?: WaypointWhereInput;
  orderBy?: Array<WaypointOrderByInput>;
  skip?: number;
  take?: number;
};
