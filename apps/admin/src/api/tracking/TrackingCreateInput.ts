import { FulfillmentSpecificationWhereUniqueInput } from "../fulfillmentSpecification/FulfillmentSpecificationWhereUniqueInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type TrackingCreateInput = {
  fulfillmentSpecifications?: FulfillmentSpecificationWhereUniqueInput | null;
  location?: LocationWhereUniqueInput | null;
  status: "Active" | "Inactive";
  trackingUrl: string;
};
