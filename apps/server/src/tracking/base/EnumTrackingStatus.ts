
import { registerEnumType } from "@nestjs/graphql";

export enum EnumTrackingStatus {
  Active = "Active",
  Inactive = "Inactive",
}

registerEnumType(EnumTrackingStatus, {
  name: "EnumTrackingStatus",
});
