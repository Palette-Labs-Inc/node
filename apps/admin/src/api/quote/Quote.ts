import { MenuItem } from "../menuItem/MenuItem";

export type Quote = {
  createdAt: Date;
  currencyCode: string;
  id: string;
  menuItems?: Array<MenuItem>;
  timeToLive: number;
  totalPrice: number;
  updatedAt: Date;
};
