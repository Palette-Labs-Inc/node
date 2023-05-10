import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type BillingWhereInput = {
  address?: StringFilter;
  city?: StringFilter;
  country?: StringFilter;
  email?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  orders?: OrderListRelationFilter;
  organization?: OrganizationWhereUniqueInput;
  phone?: StringFilter;
  state?: StringFilter;
  taxId?: StringFilter;
};
