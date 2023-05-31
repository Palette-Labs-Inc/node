
import { ArgsType, Field } from "@nestjs/graphql";
import { NodeWhereUniqueInput } from "./NodeWhereUniqueInput";
import { NodeUpdateInput } from "./NodeUpdateInput";

@ArgsType()
class UpdateNodeArgs {
  @Field(() => NodeWhereUniqueInput, { nullable: false })
  where!: NodeWhereUniqueInput;
  @Field(() => NodeUpdateInput, { nullable: false })
  data!: NodeUpdateInput;
}

export { UpdateNodeArgs as UpdateNodeArgs };
