import { ItemQuantityCreateNestedManyWithoutScalarsInput } from "./ItemQuantityCreateNestedManyWithoutScalarsInput";
import { InputJsonValue } from "../../types";

export type ScalarCreateInput = {
  classification: "Constant" | "Variable";
  computedValue?: number | null;
  estimatedValue?: number | null;
  itemQuantityAllocatedMeasure?: ItemQuantityCreateNestedManyWithoutScalarsInput;
  itemQuantityAvailableMeasure?: ItemQuantityCreateNestedManyWithoutScalarsInput;
  itemQuantityMaximumPurchasableMeasure?: ItemQuantityCreateNestedManyWithoutScalarsInput;
  itemQuantityMinimumPurchasableMeasure?: ItemQuantityCreateNestedManyWithoutScalarsInput;
  itemQuantitySelectedMeasure?: ItemQuantityCreateNestedManyWithoutScalarsInput;
  range?: InputJsonValue;
  unit: string;
  value: number;
};
