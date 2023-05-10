import { BillingCreateNestedManyWithoutOrganizationsInput } from "./BillingCreateNestedManyWithoutOrganizationsInput";
import { ContactCreateNestedManyWithoutOrganizationsInput } from "./ContactCreateNestedManyWithoutOrganizationsInput";
import { CourierCreateNestedManyWithoutOrganizationsInput } from "./CourierCreateNestedManyWithoutOrganizationsInput";
import { LocationCreateNestedManyWithoutOrganizationsInput } from "./LocationCreateNestedManyWithoutOrganizationsInput";
import { MenuItemCreateNestedManyWithoutOrganizationsInput } from "./MenuItemCreateNestedManyWithoutOrganizationsInput";

export type OrganizationCreateInput = {
  address: string;
  billings?: BillingCreateNestedManyWithoutOrganizationsInput;
  contact?: ContactCreateNestedManyWithoutOrganizationsInput;
  couriers?: CourierCreateNestedManyWithoutOrganizationsInput;
  location?: LocationCreateNestedManyWithoutOrganizationsInput;
  menuItems?: MenuItemCreateNestedManyWithoutOrganizationsInput;
};
