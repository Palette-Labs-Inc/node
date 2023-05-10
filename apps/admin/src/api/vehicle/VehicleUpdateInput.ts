import { FulfillmentSpecificationUpdateManyWithoutVehiclesInput } from "./FulfillmentSpecificationUpdateManyWithoutVehiclesInput";

export type VehicleUpdateInput = {
  capacity?: number | null;
  category?: string | null;
  code?: string | null;
  color?: string | null;
  fulfillmentSpecifications?: FulfillmentSpecificationUpdateManyWithoutVehiclesInput;
  make?: string | null;
  model?: string | null;
  registration?: string | null;
  size?: string | null;
  volume?: string | null;
  wheelsCount?: number | null;
};
