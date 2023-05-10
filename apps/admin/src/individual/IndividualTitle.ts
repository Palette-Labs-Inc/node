import { Individual as TIndividual } from "../api/individual/Individual";

export const INDIVIDUAL_TITLE_FIELD = "firstName";

export const IndividualTitle = (record: TIndividual): string => {
  return record.firstName || String(record.id);
};
