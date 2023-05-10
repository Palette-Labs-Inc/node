import { Contact as TContact } from "../api/contact/Contact";

export const CONTACT_TITLE_FIELD = "phone";

export const ContactTitle = (record: TContact): string => {
  return record.phone || String(record.id);
};
