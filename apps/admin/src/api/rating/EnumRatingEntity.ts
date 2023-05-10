import { Order } from "../order/Order";
import { Seller } from "../seller/Seller";
import { Courier } from "../courier/Courier";
import { Support } from "../support/Support";

export enum EnumRatingEntity {
  Item = "Item",
  Order = "Order",
  Fulfillment = "Fulfillment",
  Seller = "Seller",
  Courier = "Courier",
  Support = "Support",
}
