import { StringFilter } from "../../util/StringFilter";

export type ContactWhereInput = {
  email?: StringFilter;
  id?: StringFilter;
  phone?: StringFilter;
};
