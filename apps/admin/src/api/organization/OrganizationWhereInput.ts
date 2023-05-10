import { StringFilter } from "../../util/StringFilter";
import { BillingListRelationFilter } from "../billing/BillingListRelationFilter";
import { ContactListRelationFilter } from "../contact/ContactListRelationFilter";
import { CourierListRelationFilter } from "../courier/CourierListRelationFilter";
import { LocationListRelationFilter } from "../location/LocationListRelationFilter";
import { MenuItemListRelationFilter } from "../menuItem/MenuItemListRelationFilter";

export type OrganizationWhereInput = {
  address?: StringFilter;
  billings?: BillingListRelationFilter;
  contact?: ContactListRelationFilter;
  couriers?: CourierListRelationFilter;
  id?: StringFilter;
  location?: LocationListRelationFilter;
  menuItems?: MenuItemListRelationFilter;
};
