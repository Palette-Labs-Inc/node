import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ItemQuantityWhereInput = {
  allocatedCount?: IntFilter;
  availableCount?: IntFilter;
  id?: StringFilter;
  maximumPurchasableCount?: IntFilter;
  minimumPurchasableCount?: IntFilter;
  selectedCount?: IntNullableFilter;
};
