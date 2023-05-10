import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BazaarWhereUniqueInput } from "../bazaar/BazaarWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LocationListRelationFilter } from "../location/LocationListRelationFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { SearchWhereUniqueInput } from "../search/SearchWhereUniqueInput";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";

export type PromotionWhereInput = {
  amount?: FloatNullableFilter;
  bazaar?: BazaarWhereUniqueInput;
  expirationDate?: DateTimeNullableFilter;
  id?: StringFilter;
  locations?: LocationListRelationFilter;
  maximumPurchase?: FloatNullableFilter;
  minimumPurchase?: FloatFilter;
  name?: StringFilter;
  orders?: OrderListRelationFilter;
  percentage?: FloatNullableFilter;
  search?: SearchWhereUniqueInput;
  seller?: SellerWhereUniqueInput;
};
