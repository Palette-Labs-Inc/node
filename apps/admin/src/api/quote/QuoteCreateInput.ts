import { MenuItemCreateNestedManyWithoutQuotesInput } from "./MenuItemCreateNestedManyWithoutQuotesInput";

export type QuoteCreateInput = {
  currencyCode: string;
  menuItems?: MenuItemCreateNestedManyWithoutQuotesInput;
  timeToLive: number;
  totalPrice: number;
};
