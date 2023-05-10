import { SortOrder } from "../../util/SortOrder";

export type SellerOrderByInput = {
  createdAt?: SortOrder;
  holidays?: SortOrder;
  id?: SortOrder;
  isRateable?: SortOrder;
  password?: SortOrder;
  paymentTermId?: SortOrder;
  rating?: SortOrder;
  searchId?: SortOrder;
  sellerClassificationId?: SortOrder;
  updatedAt?: SortOrder;
  usersId?: SortOrder;
};
