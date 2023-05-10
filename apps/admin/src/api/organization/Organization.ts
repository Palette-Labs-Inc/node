import { Billing } from "../billing/Billing";
import { Contact } from "../contact/Contact";
import { Courier } from "../courier/Courier";
import { Location } from "../location/Location";
import { MenuItem } from "../menuItem/MenuItem";

export type Organization = {
  address: string;
  billings?: Array<Billing>;
  contact?: Array<Contact>;
  couriers?: Array<Courier>;
  createdAt: Date;
  id: string;
  location?: Array<Location>;
  menuItems?: Array<MenuItem>;
  updatedAt: Date;
};
