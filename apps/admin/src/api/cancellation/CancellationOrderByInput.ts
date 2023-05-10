import { SortOrder } from "../../util/SortOrder";

export type CancellationOrderByInput = {
  cancelledBy?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isReasonRequired?: SortOrder;
  orderId?: SortOrder;
  reason?: SortOrder;
  updatedAt?: SortOrder;
};
