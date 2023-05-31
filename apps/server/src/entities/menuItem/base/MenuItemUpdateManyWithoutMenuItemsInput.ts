
import { InputType, Field } from "@nestjs/graphql";
import { MenuItemWhereUniqueInput } from "./MenuItemWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MenuItemUpdateManyWithoutMenuItemsInput {
  @Field(() => [MenuItemWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MenuItemWhereUniqueInput],
  })
  connect?: Array<MenuItemWhereUniqueInput>;

  @Field(() => [MenuItemWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MenuItemWhereUniqueInput],
  })
  disconnect?: Array<MenuItemWhereUniqueInput>;

  @Field(() => [MenuItemWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MenuItemWhereUniqueInput],
  })
  set?: Array<MenuItemWhereUniqueInput>;
}

export { MenuItemUpdateManyWithoutMenuItemsInput as MenuItemUpdateManyWithoutMenuItemsInput };
