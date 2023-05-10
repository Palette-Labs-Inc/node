import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { CourierWhereUniqueInput } from "../courier/CourierWhereUniqueInput";
import { OrderCreateNestedManyWithoutFulfillmentSpecificationsInput } from "./OrderCreateNestedManyWithoutFulfillmentSpecificationsInput";
import { SearchCreateNestedManyWithoutFulfillmentSpecificationsInput } from "./SearchCreateNestedManyWithoutFulfillmentSpecificationsInput";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";
import { TrackingWhereUniqueInput } from "../tracking/TrackingWhereUniqueInput";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";
import { WaypointCreateNestedManyWithoutFulfillmentSpecificationsInput } from "./WaypointCreateNestedManyWithoutFulfillmentSpecificationsInput";

export type FulfillmentSpecificationCreateInput = {
  buyer: UserWhereUniqueInput;
  contact: ContactWhereUniqueInput;
  courier?: CourierWhereUniqueInput | null;
  fulfillmentModes: "PickUp" | "Delivery" | "DineIn" | "TakeOut" | "DriveThru";
  isRateable: boolean;
  orders?: OrderCreateNestedManyWithoutFulfillmentSpecificationsInput;
  rating?: number | null;
  searches?: SearchCreateNestedManyWithoutFulfillmentSpecificationsInput;
  seller: SellerWhereUniqueInput;
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
  updatedBy: string;
  vehicle?: VehicleWhereUniqueInput | null;
  waypoints?: WaypointCreateNestedManyWithoutFulfillmentSpecificationsInput;
};
