import { FulfillmentSpecificationWhereUniqueInput } from "../fulfillmentSpecification/FulfillmentSpecificationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { MenuItemWhereUniqueInput } from "../menuItem/MenuItemWhereUniqueInput";
import { PaymentTermWhereUniqueInput } from "../paymentTerm/PaymentTermWhereUniqueInput";
import { PromotionListRelationFilter } from "../promotion/PromotionListRelationFilter";
import { SellerListRelationFilter } from "../seller/SellerListRelationFilter";

export type SearchWhereInput = {
  fulfillmentSpecification?: FulfillmentSpecificationWhereUniqueInput;
  id?: StringFilter;
  menuItems?: MenuItemWhereUniqueInput;
  paymentTerm?: PaymentTermWhereUniqueInput;
  promotions?: PromotionListRelationFilter;
  sellers?: SellerListRelationFilter;
};
