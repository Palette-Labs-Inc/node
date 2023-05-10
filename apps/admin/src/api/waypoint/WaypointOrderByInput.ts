import { SortOrder } from "../../util/SortOrder";

export type WaypointOrderByInput = {
  contactId?: SortOrder;
  createdAt?: SortOrder;
  fulfillmentSpecificationId?: SortOrder;
  id?: SortOrder;
  locationId?: SortOrder;
  updatedAt?: SortOrder;
  waypointCode?: SortOrder;
};
