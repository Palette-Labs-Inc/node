import { PaymentSource as TPaymentSource } from "../api/paymentSource/PaymentSource";

export const PAYMENTSOURCE_TITLE_FIELD = "name";

export const PaymentSourceTitle = (record: TPaymentSource): string => {
  return record.name || String(record.id);
};
