
import { registerEnumType } from "@nestjs/graphql";

export enum EnumNodeIndustryCode {
  LastMileDelivery = "LastMileDelivery",
  Rideshare = "Rideshare",
}

registerEnumType(EnumNodeIndustryCode, {
  name: "EnumNodeIndustryCode",
});
