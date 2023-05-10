import { PaymentTermWhereUniqueInput } from "../paymentTerm/PaymentTermWhereUniqueInput";
import { PromotionCreateNestedManyWithoutBazaarsInput } from "./PromotionCreateNestedManyWithoutBazaarsInput";
import { SellerCreateNestedManyWithoutBazaarsInput } from "./SellerCreateNestedManyWithoutBazaarsInput";

export type BazaarCreateInput = {
  fulfillmentModes?: Array<
    "PickUp" | "Delivery" | "DineIn" | "TakeOut" | "DriveThru"
  >;
  paymentTerms?: PaymentTermWhereUniqueInput | null;
  promotions?: PromotionCreateNestedManyWithoutBazaarsInput;
  sellers?: SellerCreateNestedManyWithoutBazaarsInput;
  timeToLive: number;
};
