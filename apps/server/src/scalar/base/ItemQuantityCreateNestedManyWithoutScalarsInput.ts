
import { InputType, Field } from "@nestjs/graphql";
import { ItemQuantityWhereUniqueInput } from "../../itemQuantity/base/ItemQuantityWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ItemQuantityCreateNestedManyWithoutScalarsInput {
  @Field(() => [ItemQuantityWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ItemQuantityWhereUniqueInput],
  })
  connect?: Array<ItemQuantityWhereUniqueInput>;
}

export { ItemQuantityCreateNestedManyWithoutScalarsInput as ItemQuantityCreateNestedManyWithoutScalarsInput };
