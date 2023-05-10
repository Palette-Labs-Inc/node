import { MenuItemWhereInput } from "./MenuItemWhereInput";
import { MenuItemOrderByInput } from "./MenuItemOrderByInput";

export type MenuItemFindManyArgs = {
  where?: MenuItemWhereInput;
  orderBy?: Array<MenuItemOrderByInput>;
  skip?: number;
  take?: number;
};
