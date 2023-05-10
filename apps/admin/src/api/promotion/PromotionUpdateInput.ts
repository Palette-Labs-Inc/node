import { BazaarWhereUniqueInput } from "../bazaar/BazaarWhereUniqueInput";
import { LocationUpdateManyWithoutPromotionsInput } from "./LocationUpdateManyWithoutPromotionsInput";
import { OrderUpdateManyWithoutPromotionsInput } from "./OrderUpdateManyWithoutPromotionsInput";
import { SearchWhereUniqueInput } from "../search/SearchWhereUniqueInput";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";

export type PromotionUpdateInput = {
  amount?: number | null;
  bazaar?: BazaarWhereUniqueInput | null;
  expirationDate?: Date | null;
  locations?: LocationUpdateManyWithoutPromotionsInput;
  maximumPurchase?: number | null;
  minimumPurchase?: number;
  name?: string;
  orders?: OrderUpdateManyWithoutPromotionsInput;
  percentage?: number | null;
  search?: SearchWhereUniqueInput | null;
  seller?: SellerWhereUniqueInput | null;
};
