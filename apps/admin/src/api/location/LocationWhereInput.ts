import { StringFilter } from "../../util/StringFilter";
import { NodeWhereUniqueInput } from "../node/NodeWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { PromotionListRelationFilter } from "../promotion/PromotionListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";
import { TrackingWhereUniqueInput } from "../tracking/TrackingWhereUniqueInput";

export type LocationWhereInput = {
  address?: StringFilter;
  areaCode?: StringFilter;
  city?: StringFilter;
  coordinate?: StringFilter;
  country?: StringFilter;
  id?: StringFilter;
  node?: NodeWhereUniqueInput;
  organizations?: OrganizationWhereUniqueInput;
  promotion?: PromotionListRelationFilter;
  radius?: IntNullableFilter;
  seller?: SellerWhereUniqueInput;
  state?: StringFilter;
  trackings?: TrackingWhereUniqueInput;
};
