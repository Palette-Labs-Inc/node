import { Bazaar as TBazaar } from "../api/bazaar/Bazaar";

export const BAZAAR_TITLE_FIELD = "id";

export const BazaarTitle = (record: TBazaar): string => {
  return record.id || String(record.id);
};
