import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { FulfillmentSpecificationWhereUniqueInput } from "../fulfillmentSpecification/FulfillmentSpecificationWhereUniqueInput";
import { IndividualCreateNestedManyWithoutWaypointsInput } from "./IndividualCreateNestedManyWithoutWaypointsInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type WaypointCreateInput = {
  contact?: ContactWhereUniqueInput | null;
  fulfillmentSpecification?: FulfillmentSpecificationWhereUniqueInput | null;
  individual?: IndividualCreateNestedManyWithoutWaypointsInput;
  location?: LocationWhereUniqueInput | null;
  waypointCode: string;
};
