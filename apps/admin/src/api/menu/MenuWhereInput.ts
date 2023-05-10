import { JsonFilter } from "../../util/JsonFilter";
import { HourIntervalListRelationFilter } from "../hourInterval/HourIntervalListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";

export type MenuWhereInput = {
  categoryIDs?: JsonFilter;
  hourIntervals?: HourIntervalListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  seller?: SellerWhereUniqueInput;
};
