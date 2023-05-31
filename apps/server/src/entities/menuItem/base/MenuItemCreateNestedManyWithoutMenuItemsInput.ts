
import { InputType, Field } from "@nestjs/graphql";
import { MenuItemWhereUniqueInput } from "./MenuItemWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MenuItemCreateNestedManyWithoutMenuItemsInput {
  @Field(() => [MenuItemWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MenuItemWhereUniqueInput],
  })
  connect?: Array<MenuItemWhereUniqueInput>;
}

export { MenuItemCreateNestedManyWithoutMenuItemsInput as MenuItemCreateNestedManyWithoutMenuItemsInput };
