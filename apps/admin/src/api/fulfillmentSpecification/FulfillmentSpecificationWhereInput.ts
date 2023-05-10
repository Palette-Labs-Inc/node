import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { CourierWhereUniqueInput } from "../courier/CourierWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { SearchListRelationFilter } from "../search/SearchListRelationFilter";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";
import { TrackingWhereUniqueInput } from "../tracking/TrackingWhereUniqueInput";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";
import { WaypointListRelationFilter } from "../waypoint/WaypointListRelationFilter";

export type FulfillmentSpecificationWhereInput = {
  buyer?: UserWhereUniqueInput;
  contact?: ContactWhereUniqueInput;
  courier?: CourierWhereUniqueInput;
  fulfillmentModes?: "PickUp" | "Delivery" | "DineIn" | "TakeOut" | "DriveThru";
  id?: StringFilter;
  isRateable?: BooleanFilter;
  orders?: OrderListRelationFilter;
  rating?: FloatNullableFilter;
  searches?: SearchListRelationFilter;
  seller?: SellerWhereUniqueInput;
  status?:
    | "NewOrder"
    | "Confirmed"
    | "PickedUp"
    | "Canceled"
    | "Fulfilled"
    | "Prepared"
    | "Rejected"
    | "CourierRequested"
    | "CourierAssigned"
    | "CourierPickedUp"
    | "CourierCompleted"
    | "CourierCanceled"
    | "CourierArrivedAtPickup";
  tracking?: TrackingWhereUniqueInput;
  updatedBy?: StringFilter;
  vehicle?: VehicleWhereUniqueInput;
  waypoints?: WaypointListRelationFilter;
};
