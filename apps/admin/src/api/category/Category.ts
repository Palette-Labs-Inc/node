import { JsonValue } from "type-fest";
import { Seller } from "../seller/Seller";

export type Category = {
  createdAt: Date;
  id: string;
  menuItemIDs: JsonValue;
  seller?: Seller | null;
  timeToLive: Date;
  updatedAt: Date;
};
