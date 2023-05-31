
import { ArgsType, Field } from "@nestjs/graphql";
import { ScalarWhereUniqueInput } from "./ScalarWhereUniqueInput";

@ArgsType()
class DeleteScalarArgs {
  @Field(() => ScalarWhereUniqueInput, { nullable: false })
  where!: ScalarWhereUniqueInput;
}

export { DeleteScalarArgs as DeleteScalarArgs };
