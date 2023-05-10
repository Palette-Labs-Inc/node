import { Rating as TRating } from "../api/rating/Rating";

export const RATING_TITLE_FIELD = "entityId";

export const RatingTitle = (record: TRating): string => {
  return record.entityId || String(record.id);
};
