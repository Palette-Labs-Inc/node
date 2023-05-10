import { SortOrder } from "../../util/SortOrder";

export type PaymentTermOrderByInput = {
  bazaarId?: SortOrder;
  collectedBy?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  lifecycleProcessing?: SortOrder;
  orderId?: SortOrder;
  paymentAmount?: SortOrder;
  paymentSourceId?: SortOrder;
  searchId?: SortOrder;
  sellerId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
