
import { registerEnumType } from "@nestjs/graphql";

export enum EnumScalarClassification {
  Constant = "Constant",
  Variable = "Variable",
}

registerEnumType(EnumScalarClassification, {
  name: "EnumScalarClassification",
});
