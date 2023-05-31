
import { ArgsType, Field } from "@nestjs/graphql";
import { CancellationWhereUniqueInput } from "./CancellationWhereUniqueInput";
import { CancellationUpdateInput } from "./CancellationUpdateInput";

@ArgsType()
class UpdateCancellationArgs {
  @Field(() => CancellationWhereUniqueInput, { nullable: false })
  where!: CancellationWhereUniqueInput;
  @Field(() => CancellationUpdateInput, { nullable: false })
  data!: CancellationUpdateInput;
}

export { UpdateCancellationArgs as UpdateCancellationArgs };
