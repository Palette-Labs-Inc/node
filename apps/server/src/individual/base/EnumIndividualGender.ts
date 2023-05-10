
import { registerEnumType } from "@nestjs/graphql";

export enum EnumIndividualGender {
  Male = "Male",
  Female = "Female",
  Na = "Na",
}

registerEnumType(EnumIndividualGender, {
  name: "EnumIndividualGender",
});
