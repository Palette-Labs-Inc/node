import { SortOrder } from "../../util/SortOrder";

export type QuoteOrderByInput = {
  createdAt?: SortOrder;
  currencyCode?: SortOrder;
  id?: SortOrder;
  timeToLive?: SortOrder;
  totalPrice?: SortOrder;
  updatedAt?: SortOrder;
};
