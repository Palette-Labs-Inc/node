import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { FulfillmentSpecificationWhereUniqueInput } from "../fulfillmentSpecification/FulfillmentSpecificationWhereUniqueInput";
import { IndividualUpdateManyWithoutWaypointsInput } from "./IndividualUpdateManyWithoutWaypointsInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type WaypointUpdateInput = {
  contact?: ContactWhereUniqueInput | null;
  fulfillmentSpecification?: FulfillmentSpecificationWhereUniqueInput | null;
  individual?: IndividualUpdateManyWithoutWaypointsInput;
  location?: LocationWhereUniqueInput | null;
  waypointCode?: string;
};
