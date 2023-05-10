import { FulfillmentSpecification as TFulfillmentSpecification } from "../api/fulfillmentSpecification/FulfillmentSpecification";

export const FULFILLMENTSPECIFICATION_TITLE_FIELD = "updatedBy";

export const FulfillmentSpecificationTitle = (
  record: TFulfillmentSpecification
): string => {
  return record.updatedBy || String(record.id);
};
