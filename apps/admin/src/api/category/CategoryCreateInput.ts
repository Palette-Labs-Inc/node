import { InputJsonValue } from "../../types";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";

export type CategoryCreateInput = {
  menuItemIDs: InputJsonValue;
  seller?: SellerWhereUniqueInput | null;
  timeToLive: Date;
};
