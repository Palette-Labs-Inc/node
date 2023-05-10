import { CourierWhereUniqueInput } from "../courier/CourierWhereUniqueInput";
import { ImageCreateNestedManyWithoutRatingsInput } from "./ImageCreateNestedManyWithoutRatingsInput";
import { MediaFileCreateNestedManyWithoutRatingsInput } from "./MediaFileCreateNestedManyWithoutRatingsInput";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";

export type RatingCreateInput = {
  courier?: CourierWhereUniqueInput | null;
  entity: "Item" | "Order" | "Fulfillment" | "Seller" | "Courier" | "Support";
  entityId: string;
  images?: ImageCreateNestedManyWithoutRatingsInput;
  media?: MediaFileCreateNestedManyWithoutRatingsInput;
  seller?: SellerWhereUniqueInput | null;
  value: number;
};
