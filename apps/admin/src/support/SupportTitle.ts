import { Support as TSupport } from "../api/support/Support";

export const SUPPORT_TITLE_FIELD = "phone";

export const SupportTitle = (record: TSupport): string => {
  return record.phone || String(record.id);
};
