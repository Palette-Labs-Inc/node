import { SortOrder } from "../../util/SortOrder";

export type MenuItemOrderByInput = {
  createdAt?: SortOrder;
  currencyCode?: SortOrder;
  fulfillmentModes?: SortOrder;
  id?: SortOrder;
  isRateable?: SortOrder;
  locationIDs?: SortOrder;
  modifierGroupIDs?: SortOrder;
  paymentModes?: SortOrder;
  price?: SortOrder;
  quantityId?: SortOrder;
  rating?: SortOrder;
  sellersId?: SortOrder;
  timeToLive?: SortOrder;
  updatedAt?: SortOrder;
};
