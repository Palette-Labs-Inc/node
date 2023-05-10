
import { ArgsType, Field } from "@nestjs/graphql";
import { CancellationWhereUniqueInput } from "./CancellationWhereUniqueInput";

@ArgsType()
class DeleteCancellationArgs {
  @Field(() => CancellationWhereUniqueInput, { nullable: false })
  where!: CancellationWhereUniqueInput;
}

export { DeleteCancellationArgs as DeleteCancellationArgs };
