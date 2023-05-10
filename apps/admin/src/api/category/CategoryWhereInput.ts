import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type CategoryWhereInput = {
  id?: StringFilter;
  menuItemIDs?: JsonFilter;
  seller?: SellerWhereUniqueInput;
  timeToLive?: DateTimeFilter;
};
