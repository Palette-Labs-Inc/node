import { SortOrder } from "../../util/SortOrder";

export type ContactOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
