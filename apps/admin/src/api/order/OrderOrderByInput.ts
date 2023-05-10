import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  billingId?: SortOrder;
  cancellationId?: SortOrder;
  createdAt?: SortOrder;
  fulfillmentSpecificationId?: SortOrder;
  id?: SortOrder;
  paymentTermId?: SortOrder;
  referenceOrderIds?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
