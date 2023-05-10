import { CourierWhereUniqueInput } from "../courier/CourierWhereUniqueInput";
import { ImageUpdateManyWithoutRatingsInput } from "./ImageUpdateManyWithoutRatingsInput";
import { MediaFileUpdateManyWithoutRatingsInput } from "./MediaFileUpdateManyWithoutRatingsInput";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";

export type RatingUpdateInput = {
  courier?: CourierWhereUniqueInput | null;
  entity?: "Item" | "Order" | "Fulfillment" | "Seller" | "Courier" | "Support";
  entityId?: string;
  images?: ImageUpdateManyWithoutRatingsInput;
  media?: MediaFileUpdateManyWithoutRatingsInput;
  seller?: SellerWhereUniqueInput | null;
  value?: number;
};
