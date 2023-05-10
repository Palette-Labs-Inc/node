import { CourierWhereUniqueInput } from "../courier/CourierWhereUniqueInput";
import { FulfillmentSpecificationListRelationFilter } from "../fulfillmentSpecification/FulfillmentSpecificationListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IndividualWhereUniqueInput } from "../individual/IndividualWhereUniqueInput";
import { PaymentSourceListRelationFilter } from "../paymentSource/PaymentSourceListRelationFilter";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";

export type UserWhereInput = {
  courier?: CourierWhereUniqueInput;
  fulfillmentSpecifications?: FulfillmentSpecificationListRelationFilter;
  id?: StringFilter;
  individual?: IndividualWhereUniqueInput;
  paymentSources?: PaymentSourceListRelationFilter;
  seller?: SellerWhereUniqueInput;
  username?: StringFilter;
};
