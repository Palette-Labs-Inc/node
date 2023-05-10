
import { registerEnumType } from "@nestjs/graphql";

export enum EnumOrderStatus {
  Active = "Active",
  Complete = "Complete",
  Cancelled = "Cancelled",
}

registerEnumType(EnumOrderStatus, {
  name: "EnumOrderStatus",
});
