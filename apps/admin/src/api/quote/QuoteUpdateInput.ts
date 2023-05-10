import { MenuItemUpdateManyWithoutQuotesInput } from "./MenuItemUpdateManyWithoutQuotesInput";

export type QuoteUpdateInput = {
  currencyCode?: string;
  menuItems?: MenuItemUpdateManyWithoutQuotesInput;
  timeToLive?: number;
  totalPrice?: number;
};
