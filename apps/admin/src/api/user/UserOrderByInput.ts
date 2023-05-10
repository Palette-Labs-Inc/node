import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  courierId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  individualId?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  sellerId?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
