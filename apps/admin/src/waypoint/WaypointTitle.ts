import { Waypoint as TWaypoint } from "../api/waypoint/Waypoint";

export const WAYPOINT_TITLE_FIELD = "waypointCode";

export const WaypointTitle = (record: TWaypoint): string => {
  return record.waypointCode || String(record.id);
};
