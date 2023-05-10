import { BillingWhereUniqueInput } from "../billing/BillingWhereUniqueInput";
import { CancellationWhereUniqueInput } from "../cancellation/CancellationWhereUniqueInput";
import { FulfillmentSpecificationWhereUniqueInput } from "../fulfillmentSpecification/FulfillmentSpecificationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { MenuItemListRelationFilter } from "../menuItem/MenuItemListRelationFilter";
import { PaymentTermWhereUniqueInput } from "../paymentTerm/PaymentTermWhereUniqueInput";
import { PromotionListRelationFilter } from "../promotion/PromotionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OrderWhereInput = {
  billing?: BillingWhereUniqueInput;
  cancellation?: CancellationWhereUniqueInput;
  fulfillmentSpecification?: FulfillmentSpecificationWhereUniqueInput;
  id?: StringFilter;
  menuItems?: MenuItemListRelationFilter;
  paymentTerm?: PaymentTermWhereUniqueInput;
  promotion?: PromotionListRelationFilter;
  referenceOrderIds?: StringNullableFilter;
  status?: "Active" | "Complete" | "Cancelled";
};
