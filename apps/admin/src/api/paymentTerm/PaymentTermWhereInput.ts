import { BazaarWhereUniqueInput } from "../bazaar/BazaarWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SearchWhereUniqueInput } from "../search/SearchWhereUniqueInput";

export type PaymentTermWhereInput = {
  bazaar?: BazaarWhereUniqueInput;
  collectedBy?: "SSN" | "BSN" | "CSN";
  id?: StringFilter;
  lifecycleProcessing?:
    | "PreOrder"
    | "PreFulfillment"
    | "OnFulfillment"
    | "PostFulfillment";
  order?: OrderWhereUniqueInput;
  paymentAmount?: IntNullableFilter;
  search?: SearchWhereUniqueInput;
  status?: "Processed" | "Collectable";
};
