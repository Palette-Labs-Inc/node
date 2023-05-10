import { Individual } from "../individual/Individual";
import { MenuItem } from "../menuItem/MenuItem";
import { Rating } from "../rating/Rating";

export type Image = {
  createdAt: Date;
  height: string;
  id: string;
  individuals?: Individual | null;
  menuItem?: MenuItem | null;
  rating?: Rating | null;
  updatedAt: Date;
  url: string;
  width: string;
};
