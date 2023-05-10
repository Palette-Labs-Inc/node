import { InputJsonValue } from "../../types";
import { HourIntervalCreateNestedManyWithoutMenusInput } from "./HourIntervalCreateNestedManyWithoutMenusInput";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";

export type MenuCreateInput = {
  categoryIDs: InputJsonValue;
  fulfillmentModes?: Array<
    "PickUp" | "Delivery" | "DineIn" | "TakeOut" | "DriveThru"
  >;
  hourIntervals?: HourIntervalCreateNestedManyWithoutMenusInput;
  name: string;
  seller: SellerWhereUniqueInput;
};
