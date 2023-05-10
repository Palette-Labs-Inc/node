import { User } from "../user/User";
import { Contact } from "../contact/Contact";
import { Courier } from "../courier/Courier";
import { Order } from "../order/Order";
import { Search } from "../search/Search";
import { Seller } from "../seller/Seller";
import { Tracking } from "../tracking/Tracking";
import { Vehicle } from "../vehicle/Vehicle";
import { Waypoint } from "../waypoint/Waypoint";

export type FulfillmentSpecification = {
  buyer?: User;
  contact?: Contact;
  courier?: Courier | null;
  createdAt: Date;
  fulfillmentModes?: "PickUp" | "Delivery" | "DineIn" | "TakeOut" | "DriveThru";
  id: string;
  isRateable: boolean;
  orders?: Array<Order>;
  rating: number | null;
  searches?: Array<Search>;
  seller?: Seller;
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
  tracking?: Tracking | null;
  updatedAt: Date;
  updatedBy: string;
  vehicle?: Vehicle | null;
  waypoints?: Array<Waypoint>;
};
