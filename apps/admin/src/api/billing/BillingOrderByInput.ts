import { SortOrder } from "../../util/SortOrder";

export type BillingOrderByInput = {
  address?: SortOrder;
  city?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  organizationId?: SortOrder;
  phone?: SortOrder;
  state?: SortOrder;
  taxId?: SortOrder;
  updatedAt?: SortOrder;
};
