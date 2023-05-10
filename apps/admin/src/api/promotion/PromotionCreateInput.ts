import { BazaarWhereUniqueInput } from "../bazaar/BazaarWhereUniqueInput";
import { LocationCreateNestedManyWithoutPromotionsInput } from "./LocationCreateNestedManyWithoutPromotionsInput";
import { OrderCreateNestedManyWithoutPromotionsInput } from "./OrderCreateNestedManyWithoutPromotionsInput";
import { SearchWhereUniqueInput } from "../search/SearchWhereUniqueInput";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";

export type PromotionCreateInput = {
  amount?: number | null;
  bazaar?: BazaarWhereUniqueInput | null;
  expirationDate?: Date | null;
  locations?: LocationCreateNestedManyWithoutPromotionsInput;
  maximumPurchase?: number | null;
  minimumPurchase: number;
  name: string;
  orders?: OrderCreateNestedManyWithoutPromotionsInput;
  percentage?: number | null;
  search?: SearchWhereUniqueInput | null;
  seller?: SellerWhereUniqueInput | null;
};
