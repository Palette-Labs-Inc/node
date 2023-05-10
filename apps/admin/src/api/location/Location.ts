import { Condition } from "../condition/Condition";
import { Node } from "../node/Node";
import { Organization } from "../organization/Organization";
import { Promotion } from "../promotion/Promotion";
import { Seller } from "../seller/Seller";
import { Tracking } from "../tracking/Tracking";
import { Waypoint } from "../waypoint/Waypoint";

export type Location = {
  address: string;
  areaCode: string;
  city: string;
  conditions?: Array<Condition>;
  coordinate: string;
  country: string;
  createdAt: Date;
  id: string;
  mapUrl: string | null;
  node?: Node | null;
  organizations?: Organization | null;
  promotion?: Array<Promotion>;
  radius: number | null;
  seller?: Seller | null;
  state: string;
  trackings?: Tracking | null;
  updatedAt: Date;
  waypoints?: Waypoint | null;
};
