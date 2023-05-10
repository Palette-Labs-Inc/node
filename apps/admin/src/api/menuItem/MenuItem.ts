import { Image } from "../image/Image";
import { JsonValue } from "type-fest";
import { MediaFile } from "../mediaFile/MediaFile";
import { Order } from "../order/Order";
import { Organization } from "../organization/Organization";
import { ItemQuantity } from "../itemQuantity/ItemQuantity";
import { Quote } from "../quote/Quote";
import { Search } from "../search/Search";
import { Seller } from "../seller/Seller";

export type MenuItem = {
  createdAt: Date;
  currencyCode: string;
  fulfillmentModes?: Array<
    "Delivery" | "PickUp" | "DineIn" | "TakeOut" | "DriveThru"
  >;
  id: string;
  images?: Array<Image>;
  isRateable: boolean;
  locationIDs: JsonValue;
  mediaFile?: Array<MediaFile>;
  menuItemsSelectedModifiers?: Array<MenuItem>;
  modifierGroupIDs: JsonValue;
  orders?: Array<Order>;
  organization?: Array<Organization>;
  paymentModes: JsonValue;
  price: number;
  quantity?: ItemQuantity | null;
  quotes?: Array<Quote>;
  rating: number | null;
  searches?: Array<Search>;
  selectedModifiers?: Array<MenuItem>;
  sellers?: Seller | null;
  timeToLive: Date;
  updatedAt: Date;
};
