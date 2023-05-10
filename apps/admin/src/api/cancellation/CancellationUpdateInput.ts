import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type CancellationUpdateInput = {
  cancelledBy?: "Seller" | "Buyer" | "Courier";
  isReasonRequired?: boolean;
  order?: OrderWhereUniqueInput | null;
  reason?: string;
};
