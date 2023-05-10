import { Order } from "../order/Order";
import { Organization } from "../organization/Organization";

export type Billing = {
  address: string;
  city: string;
  country: string;
  createdAt: Date;
  email: string;
  id: string;
  name: string;
  orders?: Array<Order>;
  organization?: Organization;
  phone: string;
  state: string;
  taxId: string;
  updatedAt: Date;
};
