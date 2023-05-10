import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { LocationListRelationFilter } from "../location/LocationListRelationFilter";

export type NodeWhereInput = {
  hostUrl?: StringFilter;
  id?: IntFilter;
  industryCode?: "LastMileDelivery" | "Rideshare";
  location?: LocationListRelationFilter;
  operatorType?: "Uno" | "Bsn" | "Ssn" | "Csn";
};
