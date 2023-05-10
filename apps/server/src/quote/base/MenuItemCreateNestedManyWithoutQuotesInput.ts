
import { InputType, Field } from "@nestjs/graphql";
import { MenuItemWhereUniqueInput } from "../../menuItem/base/MenuItemWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MenuItemCreateNestedManyWithoutQuotesInput {
  @Field(() => [MenuItemWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MenuItemWhereUniqueInput],
  })
  connect?: Array<MenuItemWhereUniqueInput>;
}

export { MenuItemCreateNestedManyWithoutQuotesInput as MenuItemCreateNestedManyWithoutQuotesInput };
