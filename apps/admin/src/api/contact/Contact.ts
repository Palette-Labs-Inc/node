import { FulfillmentSpecification } from "../fulfillmentSpecification/FulfillmentSpecification";
import { Individual } from "../individual/Individual";
import { Organization } from "../organization/Organization";
import { Waypoint } from "../waypoint/Waypoint";

export type Contact = {
  createdAt: Date;
  email: string;
  fulfillmentSpecifications?: Array<FulfillmentSpecification>;
  id: string;
  individuals?: Array<Individual>;
  organizations?: Array<Organization>;
  phone: string;
  updatedAt: Date;
  waypoints?: Array<Waypoint>;
};
