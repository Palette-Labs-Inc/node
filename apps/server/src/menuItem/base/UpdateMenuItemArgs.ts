
import { ArgsType, Field } from "@nestjs/graphql";
import { MenuItemWhereUniqueInput } from "./MenuItemWhereUniqueInput";
import { MenuItemUpdateInput } from "./MenuItemUpdateInput";

@ArgsType()
class UpdateMenuItemArgs {
  @Field(() => MenuItemWhereUniqueInput, { nullable: false })
  where!: MenuItemWhereUniqueInput;
  @Field(() => MenuItemUpdateInput, { nullable: false })
  data!: MenuItemUpdateInput;
}

export { UpdateMenuItemArgs as UpdateMenuItemArgs };
