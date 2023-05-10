import { SortOrder } from "../../util/SortOrder";

export type FulfillmentSpecificationOrderByInput = {
  buyerId?: SortOrder;
  contactId?: SortOrder;
  courierId?: SortOrder;
  createdAt?: SortOrder;
  fulfillmentModes?: SortOrder;
  id?: SortOrder;
  isRateable?: SortOrder;
  rating?: SortOrder;
  sellerId?: SortOrder;
  status?: SortOrder;
  trackingId?: SortOrder;
  updatedAt?: SortOrder;
  updatedBy?: SortOrder;
  vehicleId?: SortOrder;
};
