import { SortOrder } from "../../util/SortOrder";

export type LocationOrderByInput = {
  address?: SortOrder;
  areaCode?: SortOrder;
  city?: SortOrder;
  coordinate?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  mapUrl?: SortOrder;
  nodeId?: SortOrder;
  organizationsId?: SortOrder;
  radius?: SortOrder;
  sellerId?: SortOrder;
  state?: SortOrder;
  trackingsId?: SortOrder;
  updatedAt?: SortOrder;
  waypointsId?: SortOrder;
};
