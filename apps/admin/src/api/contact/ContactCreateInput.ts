import { FulfillmentSpecificationCreateNestedManyWithoutContactsInput } from "./FulfillmentSpecificationCreateNestedManyWithoutContactsInput";
import { IndividualCreateNestedManyWithoutContactsInput } from "./IndividualCreateNestedManyWithoutContactsInput";
import { OrganizationCreateNestedManyWithoutContactsInput } from "./OrganizationCreateNestedManyWithoutContactsInput";
import { WaypointCreateNestedManyWithoutContactsInput } from "./WaypointCreateNestedManyWithoutContactsInput";

export type ContactCreateInput = {
  email: string;
  fulfillmentSpecifications?: FulfillmentSpecificationCreateNestedManyWithoutContactsInput;
  individuals?: IndividualCreateNestedManyWithoutContactsInput;
  organizations?: OrganizationCreateNestedManyWithoutContactsInput;
  phone: string;
  waypoints?: WaypointCreateNestedManyWithoutContactsInput;
};
