import { InputJsonValue } from "../../types";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";

export type CategoryUpdateInput = {
  menuItemIDs?: InputJsonValue;
  seller?: SellerWhereUniqueInput | null;
  timeToLive?: Date;
};
