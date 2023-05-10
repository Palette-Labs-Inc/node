import { IndividualWhereUniqueInput } from "../individual/IndividualWhereUniqueInput";
import { MenuItemWhereUniqueInput } from "../menuItem/MenuItemWhereUniqueInput";
import { RatingWhereUniqueInput } from "../rating/RatingWhereUniqueInput";

export type ImageUpdateInput = {
  height?: string;
  individuals?: IndividualWhereUniqueInput | null;
  menuItem?: MenuItemWhereUniqueInput | null;
  rating?: RatingWhereUniqueInput | null;
  url?: string;
  width?: string;
};
