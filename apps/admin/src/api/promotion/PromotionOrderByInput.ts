import { SortOrder } from "../../util/SortOrder";

export type PromotionOrderByInput = {
  amount?: SortOrder;
  bazaarId?: SortOrder;
  createdAt?: SortOrder;
  expirationDate?: SortOrder;
  id?: SortOrder;
  maximumPurchase?: SortOrder;
  minimumPurchase?: SortOrder;
  name?: SortOrder;
  percentage?: SortOrder;
  searchId?: SortOrder;
  sellerId?: SortOrder;
  updatedAt?: SortOrder;
};
