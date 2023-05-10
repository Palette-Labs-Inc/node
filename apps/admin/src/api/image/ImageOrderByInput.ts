import { SortOrder } from "../../util/SortOrder";

export type ImageOrderByInput = {
  createdAt?: SortOrder;
  height?: SortOrder;
  id?: SortOrder;
  individualsId?: SortOrder;
  menuItemId?: SortOrder;
  ratingId?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
  width?: SortOrder;
};
