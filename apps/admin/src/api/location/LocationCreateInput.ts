import { ConditionCreateNestedManyWithoutLocationsInput } from "./ConditionCreateNestedManyWithoutLocationsInput";
import { NodeWhereUniqueInput } from "../node/NodeWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { PromotionCreateNestedManyWithoutLocationsInput } from "./PromotionCreateNestedManyWithoutLocationsInput";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";
import { TrackingWhereUniqueInput } from "../tracking/TrackingWhereUniqueInput";
import { WaypointWhereUniqueInput } from "../waypoint/WaypointWhereUniqueInput";

export type LocationCreateInput = {
  address: string;
  areaCode: string;
  city: string;
  conditions?: ConditionCreateNestedManyWithoutLocationsInput;
  coordinate: string;
  country: string;
  mapUrl?: string | null;
  node?: NodeWhereUniqueInput | null;
  organizations?: OrganizationWhereUniqueInput | null;
  promotion?: PromotionCreateNestedManyWithoutLocationsInput;
  radius?: number | null;
  seller?: SellerWhereUniqueInput | null;
  state: string;
  trackings?: TrackingWhereUniqueInput | null;
  waypoints?: WaypointWhereUniqueInput | null;
};
