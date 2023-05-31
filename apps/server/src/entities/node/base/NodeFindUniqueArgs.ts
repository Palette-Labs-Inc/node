
import { ArgsType, Field } from "@nestjs/graphql";
import { NodeWhereUniqueInput } from "./NodeWhereUniqueInput";

@ArgsType()
class NodeFindUniqueArgs {
  @Field(() => NodeWhereUniqueInput, { nullable: false })
  where!: NodeWhereUniqueInput;
}

export { NodeFindUniqueArgs as NodeFindUniqueArgs };
