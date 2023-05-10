import { SortOrder } from "../../util/SortOrder";

export type TrackingOrderByInput = {
  createdAt?: SortOrder;
  fulfillmentSpecificationsId?: SortOrder;
  id?: SortOrder;
  locationId?: SortOrder;
  status?: SortOrder;
  trackingUrl?: SortOrder;
  updatedAt?: SortOrder;
};
