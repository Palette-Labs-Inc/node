import { FulfillmentSpecification } from "../fulfillmentSpecification/FulfillmentSpecification";

export type Vehicle = {
  capacity: number | null;
  category: string | null;
  code: string | null;
  color: string | null;
  createdAt: Date;
  fulfillmentSpecifications?: Array<FulfillmentSpecification>;
  id: string;
  make: string | null;
  model: string | null;
  registration: string | null;
  size: string | null;
  updatedAt: Date;
  volume: string | null;
  wheelsCount: number | null;
};
