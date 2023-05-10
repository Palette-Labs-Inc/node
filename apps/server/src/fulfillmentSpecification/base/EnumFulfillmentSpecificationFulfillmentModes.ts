
import { registerEnumType } from "@nestjs/graphql";

export enum EnumFulfillmentSpecificationFulfillmentModes {
  PickUp = "PickUp",
  Delivery = "Delivery",
  DineIn = "DineIn",
  TakeOut = "TakeOut",
  DriveThru = "DriveThru",
}

registerEnumType(EnumFulfillmentSpecificationFulfillmentModes, {
  name: "EnumFulfillmentSpecificationFulfillmentModes",
});
