import { BillingUpdateManyWithoutOrganizationsInput } from "./BillingUpdateManyWithoutOrganizationsInput";
import { ContactUpdateManyWithoutOrganizationsInput } from "./ContactUpdateManyWithoutOrganizationsInput";
import { CourierUpdateManyWithoutOrganizationsInput } from "./CourierUpdateManyWithoutOrganizationsInput";
import { LocationUpdateManyWithoutOrganizationsInput } from "./LocationUpdateManyWithoutOrganizationsInput";
import { MenuItemUpdateManyWithoutOrganizationsInput } from "./MenuItemUpdateManyWithoutOrganizationsInput";

export type OrganizationUpdateInput = {
  address?: string;
  billings?: BillingUpdateManyWithoutOrganizationsInput;
  contact?: ContactUpdateManyWithoutOrganizationsInput;
  couriers?: CourierUpdateManyWithoutOrganizationsInput;
  location?: LocationUpdateManyWithoutOrganizationsInput;
  menuItems?: MenuItemUpdateManyWithoutOrganizationsInput;
};
