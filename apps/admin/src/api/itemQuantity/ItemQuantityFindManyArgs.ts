import { ItemQuantityWhereInput } from "./ItemQuantityWhereInput";
import { ItemQuantityOrderByInput } from "./ItemQuantityOrderByInput";

export type ItemQuantityFindManyArgs = {
  where?: ItemQuantityWhereInput;
  orderBy?: Array<ItemQuantityOrderByInput>;
  skip?: number;
  take?: number;
};
