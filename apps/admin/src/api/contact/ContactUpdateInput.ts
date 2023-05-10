import { FulfillmentSpecificationUpdateManyWithoutContactsInput } from "./FulfillmentSpecificationUpdateManyWithoutContactsInput";
import { IndividualUpdateManyWithoutContactsInput } from "./IndividualUpdateManyWithoutContactsInput";
import { OrganizationUpdateManyWithoutContactsInput } from "./OrganizationUpdateManyWithoutContactsInput";
import { WaypointUpdateManyWithoutContactsInput } from "./WaypointUpdateManyWithoutContactsInput";

export type ContactUpdateInput = {
  email?: string;
  fulfillmentSpecifications?: FulfillmentSpecificationUpdateManyWithoutContactsInput;
  individuals?: IndividualUpdateManyWithoutContactsInput;
  organizations?: OrganizationUpdateManyWithoutContactsInput;
  phone?: string;
  waypoints?: WaypointUpdateManyWithoutContactsInput;
};
