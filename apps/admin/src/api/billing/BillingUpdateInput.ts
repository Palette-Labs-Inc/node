import { OrderUpdateManyWithoutBillingsInput } from "./OrderUpdateManyWithoutBillingsInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type BillingUpdateInput = {
  address?: string;
  city?: string;
  country?: string;
  email?: string;
  name?: string;
  orders?: OrderUpdateManyWithoutBillingsInput;
  organization?: OrganizationWhereUniqueInput;
  phone?: string;
  state?: string;
  taxId?: string;
};
