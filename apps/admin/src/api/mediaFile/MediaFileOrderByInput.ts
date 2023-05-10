import { SortOrder } from "../../util/SortOrder";

export type MediaFileOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  menuItemsId?: SortOrder;
  mimeType?: SortOrder;
  ratingId?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
