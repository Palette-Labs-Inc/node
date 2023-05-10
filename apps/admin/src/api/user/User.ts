import { Courier } from "../courier/Courier";
import { FulfillmentSpecification } from "../fulfillmentSpecification/FulfillmentSpecification";
import { Individual } from "../individual/Individual";
import { PaymentSource } from "../paymentSource/PaymentSource";
import { JsonValue } from "type-fest";
import { Seller } from "../seller/Seller";

export type User = {
  courier?: Courier | null;
  createdAt: Date;
  fulfillmentSpecifications?: Array<FulfillmentSpecification>;
  id: string;
  individual?: Individual | null;
  paymentSources?: Array<PaymentSource>;
  roles: JsonValue;
  seller?: Seller | null;
  updatedAt: Date;
  username: string;
};
