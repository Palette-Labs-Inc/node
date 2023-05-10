import { FulfillmentSpecificationWhereUniqueInput } from "../fulfillmentSpecification/FulfillmentSpecificationWhereUniqueInput";
import { MenuItemWhereUniqueInput } from "../menuItem/MenuItemWhereUniqueInput";
import { PaymentTermWhereUniqueInput } from "../paymentTerm/PaymentTermWhereUniqueInput";
import { PromotionUpdateManyWithoutSearchesInput } from "./PromotionUpdateManyWithoutSearchesInput";
import { SellerUpdateManyWithoutSearchesInput } from "./SellerUpdateManyWithoutSearchesInput";

export type SearchUpdateInput = {
  fulfillmentSpecification?: FulfillmentSpecificationWhereUniqueInput | null;
  menuItems?: MenuItemWhereUniqueInput | null;
  paymentTerm?: PaymentTermWhereUniqueInput | null;
  promotions?: PromotionUpdateManyWithoutSearchesInput;
  sellers?: SellerUpdateManyWithoutSearchesInput;
};
