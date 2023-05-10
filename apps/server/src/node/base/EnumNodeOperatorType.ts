
import { registerEnumType } from "@nestjs/graphql";

export enum EnumNodeOperatorType {
  Uno = "Uno",
  Bsn = "Bsn",
  Ssn = "Ssn",
  Csn = "Csn",
}

registerEnumType(EnumNodeOperatorType, {
  name: "EnumNodeOperatorType",
});
