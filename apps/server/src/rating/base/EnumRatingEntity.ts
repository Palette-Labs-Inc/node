
import { Order } from "../../order/base/Order";
import { Seller } from "../../seller/base/Seller";
import { Courier } from "../../courier/base/Courier";
import { Support } from "../../support/base/Support";
import { registerEnumType } from "@nestjs/graphql";

export enum EnumRatingEntity {
  Item = "Item",
  Order = "Order",
  Fulfillment = "Fulfillment",
  Seller = "Seller",
  Courier = "Courier",
  Support = "Support",
}

registerEnumType(EnumRatingEntity, {
  name: "EnumRatingEntity",
});
