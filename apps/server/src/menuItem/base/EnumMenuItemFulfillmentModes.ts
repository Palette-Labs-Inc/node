
import { registerEnumType } from "@nestjs/graphql";

export enum EnumMenuItemFulfillmentModes {
  Delivery = "Delivery",
  PickUp = "PickUp",
  DineIn = "DineIn",
  TakeOut = "TakeOut",
  DriveThru = "DriveThru",
}

registerEnumType(EnumMenuItemFulfillmentModes, {
  name: "EnumMenuItemFulfillmentModes",
});
