import { ImageUpdateManyWithoutMenuItemsInput } from "./ImageUpdateManyWithoutMenuItemsInput";
import { InputJsonValue } from "../../types";
import { MediaFileUpdateManyWithoutMenuItemsInput } from "./MediaFileUpdateManyWithoutMenuItemsInput";
import { MenuItemUpdateManyWithoutMenuItemsInput } from "./MenuItemUpdateManyWithoutMenuItemsInput";
import { OrderUpdateManyWithoutMenuItemsInput } from "./OrderUpdateManyWithoutMenuItemsInput";
import { OrganizationUpdateManyWithoutMenuItemsInput } from "./OrganizationUpdateManyWithoutMenuItemsInput";
import { ItemQuantityWhereUniqueInput } from "../itemQuantity/ItemQuantityWhereUniqueInput";
import { QuoteUpdateManyWithoutMenuItemsInput } from "./QuoteUpdateManyWithoutMenuItemsInput";
import { SearchUpdateManyWithoutMenuItemsInput } from "./SearchUpdateManyWithoutMenuItemsInput";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";

export type MenuItemUpdateInput = {
  currencyCode?: string;
  fulfillmentModes?: Array<
    "Delivery" | "PickUp" | "DineIn" | "TakeOut" | "DriveThru"
  >;
  images?: ImageUpdateManyWithoutMenuItemsInput;
  isRateable?: boolean;
  locationIDs?: InputJsonValue;
  mediaFile?: MediaFileUpdateManyWithoutMenuItemsInput;
  menuItemsSelectedModifiers?: MenuItemUpdateManyWithoutMenuItemsInput;
  modifierGroupIDs?: InputJsonValue;
  orders?: OrderUpdateManyWithoutMenuItemsInput;
  organization?: OrganizationUpdateManyWithoutMenuItemsInput;
  paymentModes?: InputJsonValue;
  price?: number;
  quantity?: ItemQuantityWhereUniqueInput | null;
  quotes?: QuoteUpdateManyWithoutMenuItemsInput;
  rating?: number | null;
  searches?: SearchUpdateManyWithoutMenuItemsInput;
  selectedModifiers?: MenuItemUpdateManyWithoutMenuItemsInput;
  sellers?: SellerWhereUniqueInput | null;
  timeToLive?: Date;
};
