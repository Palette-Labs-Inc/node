import { CourierWhereUniqueInput } from "../courier/CourierWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ImageListRelationFilter } from "../image/ImageListRelationFilter";
import { MediaFileListRelationFilter } from "../mediaFile/MediaFileListRelationFilter";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";
import { FloatFilter } from "../../util/FloatFilter";

export type RatingWhereInput = {
  courier?: CourierWhereUniqueInput;
  entity?: "Item" | "Order" | "Fulfillment" | "Seller" | "Courier" | "Support";
  entityId?: StringFilter;
  id?: StringFilter;
  images?: ImageListRelationFilter;
  media?: MediaFileListRelationFilter;
  seller?: SellerWhereUniqueInput;
  value?: FloatFilter;
};
