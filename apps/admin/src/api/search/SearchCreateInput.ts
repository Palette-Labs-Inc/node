import { FulfillmentSpecificationWhereUniqueInput } from "../fulfillmentSpecification/FulfillmentSpecificationWhereUniqueInput";
import { MenuItemWhereUniqueInput } from "../menuItem/MenuItemWhereUniqueInput";
import { PaymentTermWhereUniqueInput } from "../paymentTerm/PaymentTermWhereUniqueInput";
import { PromotionCreateNestedManyWithoutSearchesInput } from "./PromotionCreateNestedManyWithoutSearchesInput";
import { SellerCreateNestedManyWithoutSearchesInput } from "./SellerCreateNestedManyWithoutSearchesInput";

export type SearchCreateInput = {
  fulfillmentSpecification?: FulfillmentSpecificationWhereUniqueInput | null;
  menuItems?: MenuItemWhereUniqueInput | null;
  paymentTerm?: PaymentTermWhereUniqueInput | null;
  promotions?: PromotionCreateNestedManyWithoutSearchesInput;
  sellers?: SellerCreateNestedManyWithoutSearchesInput;
};
