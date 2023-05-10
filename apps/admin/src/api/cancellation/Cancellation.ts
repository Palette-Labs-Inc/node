import { Order } from "../order/Order";

export type Cancellation = {
  cancelledBy?: "Seller" | "Buyer" | "Courier";
  createdAt: Date;
  id: string;
  isReasonRequired: boolean;
  order?: Order | null;
  reason: string;
  updatedAt: Date;
};
