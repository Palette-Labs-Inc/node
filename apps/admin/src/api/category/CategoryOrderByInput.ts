import { SortOrder } from "../../util/SortOrder";

export type CategoryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  menuItemIDs?: SortOrder;
  sellerId?: SortOrder;
  timeToLive?: SortOrder;
  updatedAt?: SortOrder;
};
