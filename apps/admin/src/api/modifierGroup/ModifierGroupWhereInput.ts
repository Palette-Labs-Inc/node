import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";

export type ModifierGroupWhereInput = {
  id?: StringFilter;
  maximumPerModifierSelectionQuantity?: IntFilter;
  maximumSelections?: IntFilter;
  menuItemIDs?: JsonFilter;
  minimumSelections?: IntFilter;
  sellerModifierGroups?: SellerWhereUniqueInput;
};
