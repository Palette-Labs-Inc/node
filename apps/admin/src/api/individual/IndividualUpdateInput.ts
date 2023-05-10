import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { CourierWhereUniqueInput } from "../courier/CourierWhereUniqueInput";
import { ImageUpdateManyWithoutIndividualsInput } from "./ImageUpdateManyWithoutIndividualsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WaypointUpdateManyWithoutIndividualsInput } from "./WaypointUpdateManyWithoutIndividualsInput";

export type IndividualUpdateInput = {
  contact?: ContactWhereUniqueInput | null;
  couriers?: CourierWhereUniqueInput | null;
  dateOfBirth?: Date | null;
  firstName?: string;
  gender?: "Male" | "Female" | "Na" | null;
  image?: ImageUpdateManyWithoutIndividualsInput;
  lastName?: string;
  middleName?: string | null;
  username?: string;
  users?: UserWhereUniqueInput | null;
  waypoints?: WaypointUpdateManyWithoutIndividualsInput;
};
