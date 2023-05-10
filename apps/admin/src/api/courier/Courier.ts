import { FulfillmentSpecification } from "../fulfillmentSpecification/FulfillmentSpecification";
import { Individual } from "../individual/Individual";
import { Organization } from "../organization/Organization";
import { Rating } from "../rating/Rating";
import { User } from "../user/User";

export type Courier = {
  createdAt: Date;
  fulfillmentSpecifications?: Array<FulfillmentSpecification>;
  id: string;
  inidividual?: Individual | null;
  organization?: Array<Organization>;
  rating: number | null;
  ratings?: Array<Rating>;
  updatedAt: Date;
  users?: User;
};
