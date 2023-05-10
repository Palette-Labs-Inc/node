import { SortOrder } from "../../util/SortOrder";

export type MenuOrderByInput = {
  categoryIDs?: SortOrder;
  createdAt?: SortOrder;
  fulfillmentModes?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  sellerId?: SortOrder;
  updatedAt?: SortOrder;
};
