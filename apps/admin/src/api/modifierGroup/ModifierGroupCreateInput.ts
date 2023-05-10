import { InputJsonValue } from "../../types";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";

export type ModifierGroupCreateInput = {
  maximumPerModifierSelectionQuantity: number;
  maximumSelections: number;
  menuItemIDs: InputJsonValue;
  minimumSelections: number;
  sellerModifierGroups?: SellerWhereUniqueInput | null;
};
