import { CourierWhereInput } from "./CourierWhereInput";
import { CourierOrderByInput } from "./CourierOrderByInput";

export type CourierFindManyArgs = {
  where?: CourierWhereInput;
  orderBy?: Array<CourierOrderByInput>;
  skip?: number;
  take?: number;
};
