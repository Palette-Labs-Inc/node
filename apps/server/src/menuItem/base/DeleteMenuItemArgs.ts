
import { ArgsType, Field } from "@nestjs/graphql";
import { MenuItemWhereUniqueInput } from "./MenuItemWhereUniqueInput";

@ArgsType()
class DeleteMenuItemArgs {
  @Field(() => MenuItemWhereUniqueInput, { nullable: false })
  where!: MenuItemWhereUniqueInput;
}

export { DeleteMenuItemArgs as DeleteMenuItemArgs };
