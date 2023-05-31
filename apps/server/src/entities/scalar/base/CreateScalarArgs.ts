
import { ArgsType, Field } from "@nestjs/graphql";
import { ScalarCreateInput } from "./ScalarCreateInput";

@ArgsType()
class CreateScalarArgs {
  @Field(() => ScalarCreateInput, { nullable: false })
  data!: ScalarCreateInput;
}

export { CreateScalarArgs as CreateScalarArgs };
