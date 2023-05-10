import { SortOrder } from "../../util/SortOrder";

export type ItemQuantityOrderByInput = {
  allocatedCount?: SortOrder;
  allocatedMeasureId?: SortOrder;
  availableCount?: SortOrder;
  availableMeasureId?: SortOrder;
  id?: SortOrder;
  maximumPurchasableCount?: SortOrder;
  maximumPurchasableMeasureId?: SortOrder;
  menuItemId?: SortOrder;
  minimumPurchasableCount?: SortOrder;
  minimumPurchasableMeasureId?: SortOrder;
  selectedCount?: SortOrder;
  selectedMeasureId?: SortOrder;
};
