import { Contact } from "../contact/Contact";
import { Courier } from "../courier/Courier";
import { Image } from "../image/Image";
import { User } from "../user/User";
import { Waypoint } from "../waypoint/Waypoint";

export type Individual = {
  contact?: Contact | null;
  couriers?: Courier | null;
  createdAt: Date;
  dateOfBirth: Date | null;
  firstName: string;
  gender?: "Male" | "Female" | "Na" | null;
  id: string;
  image?: Array<Image>;
  lastName: string;
  middleName: string | null;
  updatedAt: Date;
  username: string;
  users?: User | null;
  waypoints?: Array<Waypoint>;
};
