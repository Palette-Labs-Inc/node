
import { ArgsType, Field } from "@nestjs/graphql";
import { ModifierGroupCreateInput } from "./ModifierGroupCreateInput";

@ArgsType()
class CreateModifierGroupArgs {
  @Field(() => ModifierGroupCreateInput, { nullable: false })
  data!: ModifierGroupCreateInput;
}

export { CreateModifierGroupArgs as CreateModifierGroupArgs };
