import { SortOrder } from "../../util/SortOrder";

export type BazaarOrderByInput = {
  createdAt?: SortOrder;
  fulfillmentModes?: SortOrder;
  id?: SortOrder;
  paymentTermsId?: SortOrder;
  timeToLive?: SortOrder;
  updatedAt?: SortOrder;
};
