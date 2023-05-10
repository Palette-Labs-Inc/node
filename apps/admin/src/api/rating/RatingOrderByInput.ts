import { SortOrder } from "../../util/SortOrder";

export type RatingOrderByInput = {
  courierId?: SortOrder;
  createdAt?: SortOrder;
  entity?: SortOrder;
  entityId?: SortOrder;
  id?: SortOrder;
  sellerId?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
