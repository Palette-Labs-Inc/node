
import { ArgsType, Field } from "@nestjs/graphql";
import { CancellationCreateInput } from "./CancellationCreateInput";

@ArgsType()
class CreateCancellationArgs {
  @Field(() => CancellationCreateInput, { nullable: false })
  data!: CancellationCreateInput;
}

export { CreateCancellationArgs as CreateCancellationArgs };
