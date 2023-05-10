import { Menu } from "../menu/Menu";

export type HourInterval = {
  createdAt: Date;
  days?: Array<
    "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday"
  >;
  fromHour: number;
  fromMinute: number;
  id: string;
  menus?: Menu | null;
  toHour: number;
  toMinute: number;
  updatedAt: Date;
};
