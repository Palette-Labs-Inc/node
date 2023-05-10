import { FulfillmentSpecificationWhereUniqueInput } from "../fulfillmentSpecification/FulfillmentSpecificationWhereUniqueInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type TrackingUpdateInput = {
  fulfillmentSpecifications?: FulfillmentSpecificationWhereUniqueInput | null;
  location?: LocationWhereUniqueInput | null;
  status?: "Active" | "Inactive";
  trackingUrl?: string;
};
