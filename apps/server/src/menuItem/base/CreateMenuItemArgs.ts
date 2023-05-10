
import { ArgsType, Field } from "@nestjs/graphql";
import { MenuItemCreateInput } from "./MenuItemCreateInput";

@ArgsType()
class CreateMenuItemArgs {
  @Field(() => MenuItemCreateInput, { nullable: false })
  data!: MenuItemCreateInput;
}

export { CreateMenuItemArgs as CreateMenuItemArgs };
