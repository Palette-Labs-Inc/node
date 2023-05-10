import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ItemQuantityListRelationFilter } from "../itemQuantity/ItemQuantityListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type ScalarWhereInput = {
  classification?: "Constant" | "Variable";
  computedValue?: FloatNullableFilter;
  estimatedValue?: FloatNullableFilter;
  id?: StringFilter;
  itemQuantityAllocatedMeasure?: ItemQuantityListRelationFilter;
  itemQuantityAvailableMeasure?: ItemQuantityListRelationFilter;
  itemQuantityMaximumPurchasableMeasure?: ItemQuantityListRelationFilter;
  itemQuantityMinimumPurchasableMeasure?: ItemQuantityListRelationFilter;
  itemQuantitySelectedMeasure?: ItemQuantityListRelationFilter;
  range?: JsonFilter;
  unit?: StringFilter;
  value?: FloatFilter;
};
