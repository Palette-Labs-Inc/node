import { MenuItem as TMenuItem } from "../api/menuItem/MenuItem";

export const MENUITEM_TITLE_FIELD = "currencyCode";

export const MenuItemTitle = (record: TMenuItem): string => {
  return record.currencyCode || String(record.id);
};
