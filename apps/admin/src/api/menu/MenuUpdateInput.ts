import { InputJsonValue } from "../../types";
import { HourIntervalUpdateManyWithoutMenusInput } from "./HourIntervalUpdateManyWithoutMenusInput";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";

export type MenuUpdateInput = {
  categoryIDs?: InputJsonValue;
  fulfillmentModes?: Array<
    "PickUp" | "Delivery" | "DineIn" | "TakeOut" | "DriveThru"
  >;
  hourIntervals?: HourIntervalUpdateManyWithoutMenusInput;
  name?: string;
  seller?: SellerWhereUniqueInput;
};
