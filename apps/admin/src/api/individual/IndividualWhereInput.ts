import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { CourierWhereUniqueInput } from "../courier/CourierWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ImageListRelationFilter } from "../image/ImageListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type IndividualWhereInput = {
  contact?: ContactWhereUniqueInput;
  couriers?: CourierWhereUniqueInput;
  dateOfBirth?: DateTimeNullableFilter;
  firstName?: StringFilter;
  gender?: "Male" | "Female" | "Na";
  id?: StringFilter;
  image?: ImageListRelationFilter;
  lastName?: StringFilter;
  middleName?: StringNullableFilter;
  username?: StringFilter;
  users?: UserWhereUniqueInput;
};
