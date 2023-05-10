import { SortOrder } from "../../util/SortOrder";

export type VehicleOrderByInput = {
  capacity?: SortOrder;
  category?: SortOrder;
  code?: SortOrder;
  color?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  make?: SortOrder;
  model?: SortOrder;
  registration?: SortOrder;
  size?: SortOrder;
  updatedAt?: SortOrder;
  volume?: SortOrder;
  wheelsCount?: SortOrder;
};
