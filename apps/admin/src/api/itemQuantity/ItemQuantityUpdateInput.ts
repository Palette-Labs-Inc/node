import { ScalarWhereUniqueInput } from "../scalar/ScalarWhereUniqueInput";
import { MenuItemWhereUniqueInput } from "../menuItem/MenuItemWhereUniqueInput";

export type ItemQuantityUpdateInput = {
  allocatedCount?: number;
  allocatedMeasure?: ScalarWhereUniqueInput;
  availableCount?: number;
  availableMeasure?: ScalarWhereUniqueInput;
  maximumPurchasableCount?: number;
  maximumPurchasableMeasure?: ScalarWhereUniqueInput;
  menuItem?: MenuItemWhereUniqueInput | null;
  minimumPurchasableCount?: number;
  minimumPurchasableMeasure?: ScalarWhereUniqueInput | null;
  selectedCount?: number | null;
  selectedMeasure?: ScalarWhereUniqueInput | null;
};
