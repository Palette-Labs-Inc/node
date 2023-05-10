import { MenuItemWhereUniqueInput } from "../menuItem/MenuItemWhereUniqueInput";
import { RatingWhereUniqueInput } from "../rating/RatingWhereUniqueInput";

export type MediaFileUpdateInput = {
  menuItems?: MenuItemWhereUniqueInput | null;
  mimeType?: string;
  rating?: RatingWhereUniqueInput | null;
  url?: string;
};
