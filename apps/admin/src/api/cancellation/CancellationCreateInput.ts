import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type CancellationCreateInput = {
  cancelledBy: "Seller" | "Buyer" | "Courier";
  isReasonRequired: boolean;
  order?: OrderWhereUniqueInput | null;
  reason: string;
};
