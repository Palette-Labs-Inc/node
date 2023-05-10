import { StringFilter } from "../../util/StringFilter";
import { PromotionListRelationFilter } from "../promotion/PromotionListRelationFilter";
import { SellerListRelationFilter } from "../seller/SellerListRelationFilter";
import { IntFilter } from "../../util/IntFilter";

export type BazaarWhereInput = {
  id?: StringFilter;
  promotions?: PromotionListRelationFilter;
  sellers?: SellerListRelationFilter;
  timeToLive?: IntFilter;
};
