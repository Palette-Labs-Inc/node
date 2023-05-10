import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { CourierWhereUniqueInput } from "../courier/CourierWhereUniqueInput";
import { ImageCreateNestedManyWithoutIndividualsInput } from "./ImageCreateNestedManyWithoutIndividualsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WaypointCreateNestedManyWithoutIndividualsInput } from "./WaypointCreateNestedManyWithoutIndividualsInput";

export type IndividualCreateInput = {
  contact?: ContactWhereUniqueInput | null;
  couriers?: CourierWhereUniqueInput | null;
  dateOfBirth?: Date | null;
  firstName: string;
  gender?: "Male" | "Female" | "Na" | null;
  image?: ImageCreateNestedManyWithoutIndividualsInput;
  lastName: string;
  middleName?: string | null;
  username: string;
  users?: UserWhereUniqueInput | null;
  waypoints?: WaypointCreateNestedManyWithoutIndividualsInput;
};
