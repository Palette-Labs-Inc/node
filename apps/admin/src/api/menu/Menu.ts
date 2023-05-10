import { JsonValue } from "type-fest";
import { HourInterval } from "../hourInterval/HourInterval";
import { Seller } from "../seller/Seller";

export type Menu = {
  categoryIDs: JsonValue;
  createdAt: Date;
  fulfillmentModes?: Array<
    "PickUp" | "Delivery" | "DineIn" | "TakeOut" | "DriveThru"
  >;
  hourIntervals?: Array<HourInterval>;
  id: string;
  name: string;
  seller?: Seller;
  updatedAt: Date;
};
