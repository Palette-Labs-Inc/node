import { Courier } from "../courier/Courier";
import { Image } from "../image/Image";
import { MediaFile } from "../mediaFile/MediaFile";
import { Seller } from "../seller/Seller";

export type Rating = {
  courier?: Courier | null;
  createdAt: Date;
  entity?: "Item" | "Order" | "Fulfillment" | "Seller" | "Courier" | "Support";
  entityId: string;
  id: string;
  images?: Array<Image>;
  media?: Array<MediaFile>;
  seller?: Seller | null;
  updatedAt: Date;
  value: number;
};
