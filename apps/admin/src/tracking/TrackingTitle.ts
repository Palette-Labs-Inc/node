import { Tracking as TTracking } from "../api/tracking/Tracking";

export const TRACKING_TITLE_FIELD = "trackingUrl";

export const TrackingTitle = (record: TTracking): string => {
  return record.trackingUrl || String(record.id);
};
