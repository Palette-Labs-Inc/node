import { ConditionUpdateManyWithoutLocationsInput } from "./ConditionUpdateManyWithoutLocationsInput";
import { NodeWhereUniqueInput } from "../node/NodeWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { PromotionUpdateManyWithoutLocationsInput } from "./PromotionUpdateManyWithoutLocationsInput";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";
import { TrackingWhereUniqueInput } from "../tracking/TrackingWhereUniqueInput";
import { WaypointWhereUniqueInput } from "../waypoint/WaypointWhereUniqueInput";

export type LocationUpdateInput = {
  address?: string;
  areaCode?: string;
  city?: string;
  conditions?: ConditionUpdateManyWithoutLocationsInput;
  coordinate?: string;
  country?: string;
  mapUrl?: string | null;
  node?: NodeWhereUniqueInput | null;
  organizations?: OrganizationWhereUniqueInput | null;
  promotion?: PromotionUpdateManyWithoutLocationsInput;
  radius?: number | null;
  seller?: SellerWhereUniqueInput | null;
  state?: string;
  trackings?: TrackingWhereUniqueInput | null;
  waypoints?: WaypointWhereUniqueInput | null;
};
