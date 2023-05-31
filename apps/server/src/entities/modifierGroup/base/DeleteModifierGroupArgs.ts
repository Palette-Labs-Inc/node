
import { ArgsType, Field } from "@nestjs/graphql";
import { ModifierGroupWhereUniqueInput } from "./ModifierGroupWhereUniqueInput";

@ArgsType()
class DeleteModifierGroupArgs {
  @Field(() => ModifierGroupWhereUniqueInput, { nullable: false })
  where!: ModifierGroupWhereUniqueInput;
}

export { DeleteModifierGroupArgs as DeleteModifierGroupArgs };
