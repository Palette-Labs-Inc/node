import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { FulfillmentSpecificationWhereUniqueInput } from "../fulfillmentSpecification/FulfillmentSpecificationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IndividualListRelationFilter } from "../individual/IndividualListRelationFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type WaypointWhereInput = {
  contact?: ContactWhereUniqueInput;
  fulfillmentSpecification?: FulfillmentSpecificationWhereUniqueInput;
  id?: StringFilter;
  individual?: IndividualListRelationFilter;
  location?: LocationWhereUniqueInput;
  waypointCode?: StringFilter;
};
