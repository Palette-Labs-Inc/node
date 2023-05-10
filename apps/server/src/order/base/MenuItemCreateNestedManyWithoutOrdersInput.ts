
import { InputType, Field } from "@nestjs/graphql";
import { MenuItemWhereUniqueInput } from "../../menuItem/base/MenuItemWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MenuItemCreateNestedManyWithoutOrdersInput {
  @Field(() => [MenuItemWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MenuItemWhereUniqueInput],
  })
  connect?: Array<MenuItemWhereUniqueInput>;
}

export { MenuItemCreateNestedManyWithoutOrdersInput as MenuItemCreateNestedManyWithoutOrdersInput };
