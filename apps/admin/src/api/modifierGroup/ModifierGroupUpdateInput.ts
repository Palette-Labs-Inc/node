import { InputJsonValue } from "../../types";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";

export type ModifierGroupUpdateInput = {
  maximumPerModifierSelectionQuantity?: number;
  maximumSelections?: number;
  menuItemIDs?: InputJsonValue;
  minimumSelections?: number;
  sellerModifierGroups?: SellerWhereUniqueInput | null;
};
