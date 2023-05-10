import { PaymentTermWhereUniqueInput } from "../paymentTerm/PaymentTermWhereUniqueInput";
import { PromotionUpdateManyWithoutBazaarsInput } from "./PromotionUpdateManyWithoutBazaarsInput";
import { SellerUpdateManyWithoutBazaarsInput } from "./SellerUpdateManyWithoutBazaarsInput";

export type BazaarUpdateInput = {
  fulfillmentModes?: Array<
    "PickUp" | "Delivery" | "DineIn" | "TakeOut" | "DriveThru"
  >;
  paymentTerms?: PaymentTermWhereUniqueInput | null;
  promotions?: PromotionUpdateManyWithoutBazaarsInput;
  sellers?: SellerUpdateManyWithoutBazaarsInput;
  timeToLive?: number;
};
