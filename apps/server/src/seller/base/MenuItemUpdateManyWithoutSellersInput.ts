
import { InputType, Field } from "@nestjs/graphql";
import { MenuItemWhereUniqueInput } from "../../menuItem/base/MenuItemWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MenuItemUpdateManyWithoutSellersInput {
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

export { MenuItemUpdateManyWithoutSellersInput as MenuItemUpdateManyWithoutSellersInput };
