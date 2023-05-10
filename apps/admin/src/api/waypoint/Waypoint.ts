import { Contact } from "../contact/Contact";
import { FulfillmentSpecification } from "../fulfillmentSpecification/FulfillmentSpecification";
import { Individual } from "../individual/Individual";
import { Location } from "../location/Location";

export type Waypoint = {
  contact?: Contact | null;
  createdAt: Date;
  fulfillmentSpecification?: FulfillmentSpecification | null;
  id: string;
  individual?: Array<Individual>;
  location?: Location | null;
  updatedAt: Date;
  waypointCode: string;
};
