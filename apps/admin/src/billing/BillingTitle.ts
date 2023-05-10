import { Billing as TBilling } from "../api/billing/Billing";

export const BILLING_TITLE_FIELD = "name";

export const BillingTitle = (record: TBilling): string => {
  return record.name || String(record.id);
};
