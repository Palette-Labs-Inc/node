import { StringFilter } from "../../util/StringFilter";
import { MenuItemListRelationFilter } from "../menuItem/MenuItemListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type QuoteWhereInput = {
  currencyCode?: StringFilter;
  id?: StringFilter;
  menuItems?: MenuItemListRelationFilter;
  timeToLive?: IntFilter;
  totalPrice?: FloatFilter;
};
