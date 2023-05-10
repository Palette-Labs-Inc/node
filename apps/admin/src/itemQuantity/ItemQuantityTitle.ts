import { ItemQuantity as TItemQuantity } from "../api/itemQuantity/ItemQuantity";

export const ITEMQUANTITY_TITLE_FIELD = "id";

export const ItemQuantityTitle = (record: TItemQuantity): string => {
  return record.id || String(record.id);
};
