import { FulfillmentSpecificationCreateNestedManyWithoutVehiclesInput } from "./FulfillmentSpecificationCreateNestedManyWithoutVehiclesInput";

export type VehicleCreateInput = {
  capacity?: number | null;
  category?: string | null;
  code?: string | null;
  color?: string | null;
  fulfillmentSpecifications?: FulfillmentSpecificationCreateNestedManyWithoutVehiclesInput;
  make?: string | null;
  model?: string | null;
  registration?: string | null;
  size?: string | null;
  volume?: string | null;
  wheelsCount?: number | null;
};
