import { BazaarWhereUniqueInput } from "../bazaar/BazaarWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { PaymentSourceWhereUniqueInput } from "../paymentSource/PaymentSourceWhereUniqueInput";
import { SearchWhereUniqueInput } from "../search/SearchWhereUniqueInput";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";

export type PaymentTermCreateInput = {
  bazaar?: BazaarWhereUniqueInput | null;
  collectedBy: "SSN" | "BSN" | "CSN";
  lifecycleProcessing:
    | "PreOrder"
    | "PreFulfillment"
    | "OnFulfillment"
    | "PostFulfillment";
  order?: OrderWhereUniqueInput | null;
  paymentAmount?: number | null;
  paymentSource?: PaymentSourceWhereUniqueInput | null;
  search?: SearchWhereUniqueInput | null;
  seller?: SellerWhereUniqueInput | null;
  status: "Processed" | "Collectable";
};
