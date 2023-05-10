import { OrderCreateNestedManyWithoutBillingsInput } from "./OrderCreateNestedManyWithoutBillingsInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type BillingCreateInput = {
  address: string;
  city: string;
  country: string;
  email: string;
  name: string;
  orders?: OrderCreateNestedManyWithoutBillingsInput;
  organization: OrganizationWhereUniqueInput;
  phone: string;
  state: string;
  taxId: string;
};
