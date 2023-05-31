
import { registerEnumType } from "@nestjs/graphql";

export enum EnumPaymentTermCollectedBy {
  Ssn = "SSN",
  Bsn = "BSN",
  Csn = "CSN",
}

registerEnumType(EnumPaymentTermCollectedBy, {
  name: "EnumPaymentTermCollectedBy",
});
