import { MenuItem } from "../menuItem/MenuItem";
import { Rating } from "../rating/Rating";

export type MediaFile = {
  createdAt: Date;
  id: string;
  menuItems?: MenuItem | null;
  mimeType: string;
  rating?: Rating | null;
  updatedAt: Date;
  url: string;
};
