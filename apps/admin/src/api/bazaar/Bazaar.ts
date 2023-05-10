import { PaymentTerm } from "../paymentTerm/PaymentTerm";
import { Promotion } from "../promotion/Promotion";
import { Seller } from "../seller/Seller";

export type Bazaar = {
  createdAt: Date;
  fulfillmentModes?: Array<
    "PickUp" | "Delivery" | "DineIn" | "TakeOut" | "DriveThru"
  >;
  id: string;
  paymentTerms?: PaymentTerm | null;
  promotions?: Array<Promotion>;
  sellers?: Array<Seller>;
  timeToLive: number;
  updatedAt: Date;
};
