import { ModifierGroup as TModifierGroup } from "../api/modifierGroup/ModifierGroup";

export const MODIFIERGROUP_TITLE_FIELD = "id";

export const ModifierGroupTitle = (record: TModifierGroup): string => {
  return record.id || String(record.id);
};
