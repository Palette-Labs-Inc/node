import { Seller as TSeller } from "../api/seller/Seller";

export const SELLER_TITLE_FIELD = "password";

export const SellerTitle = (record: TSeller): string => {
  return record.password || String(record.id);
};
