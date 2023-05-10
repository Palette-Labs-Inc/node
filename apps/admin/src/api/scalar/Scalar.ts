import { ItemQuantity } from "../itemQuantity/ItemQuantity";
import { JsonValue } from "type-fest";

export type Scalar = {
  classification?: "Constant" | "Variable";
  computedValue: number | null;
  estimatedValue: number | null;
  id: string;
  itemQuantityAllocatedMeasure?: Array<ItemQuantity>;
  itemQuantityAvailableMeasure?: Array<ItemQuantity>;
  itemQuantityMaximumPurchasableMeasure?: Array<ItemQuantity>;
  itemQuantityMinimumPurchasableMeasure?: Array<ItemQuantity>;
  itemQuantitySelectedMeasure?: Array<ItemQuantity>;
  range: JsonValue;
  unit: string;
  value: number;
};
