import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "referenceOrderIds";

export const OrderTitle = (record: TOrder): string => {
  return record.referenceOrderIds || String(record.id);
};
