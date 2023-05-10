import { MenuWhereInput } from "./MenuWhereInput";
import { MenuOrderByInput } from "./MenuOrderByInput";

export type MenuFindManyArgs = {
  where?: MenuWhereInput;
  orderBy?: Array<MenuOrderByInput>;
  skip?: number;
  take?: number;
};
