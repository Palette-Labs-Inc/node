import { FulfillmentSpecification } from "../fulfillmentSpecification/FulfillmentSpecification";
import { MenuItem } from "../menuItem/MenuItem";
import { PaymentTerm } from "../paymentTerm/PaymentTerm";
import { Promotion } from "../promotion/Promotion";
import { Seller } from "../seller/Seller";

export type Search = {
  createdAt: Date;
  fulfillmentSpecification?: FulfillmentSpecification | null;
  id: string;
  menuItems?: MenuItem | null;
  paymentTerm?: PaymentTerm | null;
  promotions?: Array<Promotion>;
  sellers?: Array<Seller>;
  updatedAt: Date;
};
