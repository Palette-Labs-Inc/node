import { LocationCreateNestedManyWithoutNodesInput } from "./LocationCreateNestedManyWithoutNodesInput";

export type NodeCreateInput = {
  hostUrl: string;
  industryCode: "LastMileDelivery" | "Rideshare";
  location?: LocationCreateNestedManyWithoutNodesInput;
  operatorType: "Uno" | "Bsn" | "Ssn" | "Csn";
};
