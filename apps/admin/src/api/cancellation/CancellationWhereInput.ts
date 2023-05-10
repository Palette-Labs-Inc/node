import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type CancellationWhereInput = {
  cancelledBy?: "Seller" | "Buyer" | "Courier";
  id?: StringFilter;
  isReasonRequired?: BooleanFilter;
  order?: OrderWhereUniqueInput;
  reason?: StringFilter;
};
