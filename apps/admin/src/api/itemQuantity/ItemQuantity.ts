import { Scalar } from "../scalar/Scalar";
import { MenuItem } from "../menuItem/MenuItem";

export type ItemQuantity = {
  allocatedCount: number;
  allocatedMeasure?: Scalar;
  availableCount: number;
  availableMeasure?: Scalar;
  id: string;
  maximumPurchasableCount: number;
  maximumPurchasableMeasure?: Scalar;
  menuItem?: MenuItem | null;
  minimumPurchasableCount: number;
  minimumPurchasableMeasure?: Scalar | null;
  selectedCount: number | null;
  selectedMeasure?: Scalar | null;
};
