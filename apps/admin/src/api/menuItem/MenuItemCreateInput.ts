import { ImageCreateNestedManyWithoutMenuItemsInput } from "./ImageCreateNestedManyWithoutMenuItemsInput";
import { InputJsonValue } from "../../types";
import { MediaFileCreateNestedManyWithoutMenuItemsInput } from "./MediaFileCreateNestedManyWithoutMenuItemsInput";
import { MenuItemCreateNestedManyWithoutMenuItemsInput } from "./MenuItemCreateNestedManyWithoutMenuItemsInput";
import { OrderCreateNestedManyWithoutMenuItemsInput } from "./OrderCreateNestedManyWithoutMenuItemsInput";
import { OrganizationCreateNestedManyWithoutMenuItemsInput } from "./OrganizationCreateNestedManyWithoutMenuItemsInput";
import { ItemQuantityWhereUniqueInput } from "../itemQuantity/ItemQuantityWhereUniqueInput";
import { QuoteCreateNestedManyWithoutMenuItemsInput } from "./QuoteCreateNestedManyWithoutMenuItemsInput";
import { SearchCreateNestedManyWithoutMenuItemsInput } from "./SearchCreateNestedManyWithoutMenuItemsInput";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";

export type MenuItemCreateInput = {
  currencyCode: string;
  fulfillmentModes?: Array<
    "Delivery" | "PickUp" | "DineIn" | "TakeOut" | "DriveThru"
  >;
  images?: ImageCreateNestedManyWithoutMenuItemsInput;
  isRateable: boolean;
  locationIDs?: InputJsonValue;
  mediaFile?: MediaFileCreateNestedManyWithoutMenuItemsInput;
  menuItemsSelectedModifiers?: MenuItemCreateNestedManyWithoutMenuItemsInput;
  modifierGroupIDs?: InputJsonValue;
  orders?: OrderCreateNestedManyWithoutMenuItemsInput;
  organization?: OrganizationCreateNestedManyWithoutMenuItemsInput;
  paymentModes: InputJsonValue;
  price: number;
  quantity?: ItemQuantityWhereUniqueInput | null;
  quotes?: QuoteCreateNestedManyWithoutMenuItemsInput;
  rating?: number | null;
  searches?: SearchCreateNestedManyWithoutMenuItemsInput;
  selectedModifiers?: MenuItemCreateNestedManyWithoutMenuItemsInput;
  sellers?: SellerWhereUniqueInput | null;
  timeToLive: Date;
};
