
import { ArgsType, Field } from "@nestjs/graphql";
import { NodeCreateInput } from "./NodeCreateInput";

@ArgsType()
class CreateNodeArgs {
  @Field(() => NodeCreateInput, { nullable: false })
  data!: NodeCreateInput;
}

export { CreateNodeArgs as CreateNodeArgs };
