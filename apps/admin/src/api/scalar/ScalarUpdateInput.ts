import { ItemQuantityUpdateManyWithoutScalarsInput } from "./ItemQuantityUpdateManyWithoutScalarsInput";
import { InputJsonValue } from "../../types";

export type ScalarUpdateInput = {
  classification?: "Constant" | "Variable";
  computedValue?: number | null;
  estimatedValue?: number | null;
  itemQuantityAllocatedMeasure?: ItemQuantityUpdateManyWithoutScalarsInput;
  itemQuantityAvailableMeasure?: ItemQuantityUpdateManyWithoutScalarsInput;
  itemQuantityMaximumPurchasableMeasure?: ItemQuantityUpdateManyWithoutScalarsInput;
  itemQuantityMinimumPurchasableMeasure?: ItemQuantityUpdateManyWithoutScalarsInput;
  itemQuantitySelectedMeasure?: ItemQuantityUpdateManyWithoutScalarsInput;
  range?: InputJsonValue;
  unit?: string;
  value?: number;
};
