import { Cancellation as TCancellation } from "../api/cancellation/Cancellation";

export const CANCELLATION_TITLE_FIELD = "reason";

export const CancellationTitle = (record: TCancellation): string => {
  return record.reason || String(record.id);
};
