
import { ArgsType, Field } from "@nestjs/graphql";
import { ScalarWhereUniqueInput } from "./ScalarWhereUniqueInput";
import { ScalarUpdateInput } from "./ScalarUpdateInput";

@ArgsType()
class UpdateScalarArgs {
  @Field(() => ScalarWhereUniqueInput, { nullable: false })
  where!: ScalarWhereUniqueInput;
  @Field(() => ScalarUpdateInput, { nullable: false })
  data!: ScalarUpdateInput;
}

export { UpdateScalarArgs as UpdateScalarArgs };
