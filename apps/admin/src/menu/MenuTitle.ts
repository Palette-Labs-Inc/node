import { Menu as TMenu } from "../api/menu/Menu";

export const MENU_TITLE_FIELD = "name";

export const MenuTitle = (record: TMenu): string => {
  return record.name || String(record.id);
};
