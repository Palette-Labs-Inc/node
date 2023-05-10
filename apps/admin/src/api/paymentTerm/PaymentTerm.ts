import { Bazaar } from "../bazaar/Bazaar";
import { Order } from "../order/Order";
import { PaymentSource } from "../paymentSource/PaymentSource";
import { Search } from "../search/Search";
import { Seller } from "../seller/Seller";

export type PaymentTerm = {
  bazaar?: Bazaar | null;
  collectedBy?: "SSN" | "BSN" | "CSN";
  createdAt: Date;
  id: string;
  lifecycleProcessing?:
    | "PreOrder"
    | "PreFulfillment"
    | "OnFulfillment"
    | "PostFulfillment";
  order?: Order | null;
  paymentAmount: number | null;
  paymentSource?: PaymentSource | null;
  search?: Search | null;
  seller?: Seller | null;
  status?: "Processed" | "Collectable";
  updatedAt: Date;
};
