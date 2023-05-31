
import { ArgsType, Field } from "@nestjs/graphql";
import { CancellationWhereUniqueInput } from "./CancellationWhereUniqueInput";

@ArgsType()
class CancellationFindUniqueArgs {
  @Field(() => CancellationWhereUniqueInput, { nullable: false })
  where!: CancellationWhereUniqueInput;
}

export { CancellationFindUniqueArgs as CancellationFindUniqueArgs };
