import { Location } from "../location/Location";

export type Node = {
  createdAt: Date;
  hostUrl: string;
  id: number;
  industryCode?: "LastMileDelivery" | "Rideshare";
  location?: Array<Location>;
  operatorType?: "Uno" | "Bsn" | "Ssn" | "Csn";
  updatedAt: Date;
};
