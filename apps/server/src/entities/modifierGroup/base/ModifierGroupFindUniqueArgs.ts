
import { ArgsType, Field } from "@nestjs/graphql";
import { ModifierGroupWhereUniqueInput } from "./ModifierGroupWhereUniqueInput";

@ArgsType()
class ModifierGroupFindUniqueArgs {
  @Field(() => ModifierGroupWhereUniqueInput, { nullable: false })
  where!: ModifierGroupWhereUniqueInput;
}

export { ModifierGroupFindUniqueArgs as ModifierGroupFindUniqueArgs };
