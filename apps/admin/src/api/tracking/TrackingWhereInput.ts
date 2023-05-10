import { FulfillmentSpecificationWhereUniqueInput } from "../fulfillmentSpecification/FulfillmentSpecificationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type TrackingWhereInput = {
  fulfillmentSpecifications?: FulfillmentSpecificationWhereUniqueInput;
  id?: StringFilter;
  location?: LocationWhereUniqueInput;
  status?: "Active" | "Inactive";
};
