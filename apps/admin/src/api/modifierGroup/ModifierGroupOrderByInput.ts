import { SortOrder } from "../../util/SortOrder";

export type ModifierGroupOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  maximumPerModifierSelectionQuantity?: SortOrder;
  maximumSelections?: SortOrder;
  menuItemIDs?: SortOrder;
  minimumSelections?: SortOrder;
  sellerModifierGroupsId?: SortOrder;
  updatedAt?: SortOrder;
};
