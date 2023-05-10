import { LocationUpdateManyWithoutNodesInput } from "./LocationUpdateManyWithoutNodesInput";

export type NodeUpdateInput = {
  hostUrl?: string;
  industryCode?: "LastMileDelivery" | "Rideshare";
  location?: LocationUpdateManyWithoutNodesInput;
  operatorType?: "Uno" | "Bsn" | "Ssn" | "Csn";
};
