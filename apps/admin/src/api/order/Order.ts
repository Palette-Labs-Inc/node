import { Billing } from "../billing/Billing";
import { Cancellation } from "../cancellation/Cancellation";
import { FulfillmentSpecification } from "../fulfillmentSpecification/FulfillmentSpecification";
import { MenuItem } from "../menuItem/MenuItem";
import { PaymentTerm } from "../paymentTerm/PaymentTerm";
import { Promotion } from "../promotion/Promotion";

export type Order = {
  billing?: Billing;
  cancellation?: Cancellation | null;
  createdAt: Date;
  fulfillmentSpecification?: FulfillmentSpecification;
  id: string;
  menuItems?: Array<MenuItem>;
  paymentTerm?: PaymentTerm | null;
  promotion?: Array<Promotion>;
  referenceOrderIds: string | null;
  status?: "Active" | "Complete" | "Cancelled";
  updatedAt: Date;
};
