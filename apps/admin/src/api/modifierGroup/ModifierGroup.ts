import { JsonValue } from "type-fest";
import { Seller } from "../seller/Seller";

export type ModifierGroup = {
  createdAt: Date;
  id: string;
  maximumPerModifierSelectionQuantity: number;
  maximumSelections: number;
  menuItemIDs: JsonValue;
  minimumSelections: number;
  sellerModifierGroups?: Seller | null;
  updatedAt: Date;
};
