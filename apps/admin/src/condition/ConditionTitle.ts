import { Condition as TCondition } from "../api/condition/Condition";

export const CONDITION_TITLE_FIELD = "bsnId";

export const ConditionTitle = (record: TCondition): string => {
  return record.bsnId || String(record.id);
};
