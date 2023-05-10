import { FulfillmentSpecification } from "../fulfillmentSpecification/FulfillmentSpecification";
import { Location } from "../location/Location";

export type Tracking = {
  createdAt: Date;
  fulfillmentSpecifications?: FulfillmentSpecification | null;
  id: string;
  location?: Location | null;
  status?: "Active" | "Inactive";
  trackingUrl: string;
  updatedAt: Date;
};
