import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { CourierWhereUniqueInput } from "../courier/CourierWhereUniqueInput";
import { OrderUpdateManyWithoutFulfillmentSpecificationsInput } from "./OrderUpdateManyWithoutFulfillmentSpecificationsInput";
import { SearchUpdateManyWithoutFulfillmentSpecificationsInput } from "./SearchUpdateManyWithoutFulfillmentSpecificationsInput";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";
import { TrackingWhereUniqueInput } from "../tracking/TrackingWhereUniqueInput";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";
import { WaypointUpdateManyWithoutFulfillmentSpecificationsInput } from "./WaypointUpdateManyWithoutFulfillmentSpecificationsInput";

export type FulfillmentSpecificationUpdateInput = {
  buyer?: UserWhereUniqueInput;
  contact?: ContactWhereUniqueInput;
  courier?: CourierWhereUniqueInput | null;
  fulfillmentModes?: "PickUp" | "Delivery" | "DineIn" | "TakeOut" | "DriveThru";
  isRateable?: boolean;
  orders?: OrderUpdateManyWithoutFulfillmentSpecificationsInput;
  rating?: number | null;
  searches?: SearchUpdateManyWithoutFulfillmentSpecificationsInput;
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
    | "CourierArrivedAtPickup"
    | null;
  tracking?: TrackingWhereUniqueInput | null;
  updatedBy?: string;
  vehicle?: VehicleWhereUniqueInput | null;
  waypoints?: WaypointUpdateManyWithoutFulfillmentSpecificationsInput;
};
