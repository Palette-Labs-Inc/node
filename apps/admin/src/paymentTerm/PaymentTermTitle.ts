import { PaymentTerm as TPaymentTerm } from "../api/paymentTerm/PaymentTerm";

export const PAYMENTTERM_TITLE_FIELD = "id";

export const PaymentTermTitle = (record: TPaymentTerm): string => {
  return record.id || String(record.id);
};
