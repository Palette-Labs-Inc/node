
import { ArgsType, Field } from "@nestjs/graphql";
import { ModifierGroupWhereUniqueInput } from "./ModifierGroupWhereUniqueInput";
import { ModifierGroupUpdateInput } from "./ModifierGroupUpdateInput";

@ArgsType()
class UpdateModifierGroupArgs {
  @Field(() => ModifierGroupWhereUniqueInput, { nullable: false })
  where!: ModifierGroupWhereUniqueInput;
  @Field(() => ModifierGroupUpdateInput, { nullable: false })
  data!: ModifierGroupUpdateInput;
}

export { UpdateModifierGroupArgs as UpdateModifierGroupArgs };
