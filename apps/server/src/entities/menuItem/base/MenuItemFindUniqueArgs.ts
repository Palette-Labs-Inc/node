
import { ArgsType, Field } from "@nestjs/graphql";
import { MenuItemWhereUniqueInput } from "./MenuItemWhereUniqueInput";

@ArgsType()
class MenuItemFindUniqueArgs {
  @Field(() => MenuItemWhereUniqueInput, { nullable: false })
  where!: MenuItemWhereUniqueInput;
}

export { MenuItemFindUniqueArgs as MenuItemFindUniqueArgs };
