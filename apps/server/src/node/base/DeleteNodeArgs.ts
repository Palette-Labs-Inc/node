
import { ArgsType, Field } from "@nestjs/graphql";
import { NodeWhereUniqueInput } from "./NodeWhereUniqueInput";

@ArgsType()
class DeleteNodeArgs {
  @Field(() => NodeWhereUniqueInput, { nullable: false })
  where!: NodeWhereUniqueInput;
}

export { DeleteNodeArgs as DeleteNodeArgs };
