
import { InputType, Field } from "@nestjs/graphql";
import { ItemQuantityWhereUniqueInput } from "../../itemQuantity/base/ItemQuantityWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ItemQuantityUpdateManyWithoutScalarsInput {
  @Field(() => [ItemQuantityWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ItemQuantityWhereUniqueInput],
  })
  connect?: Array<ItemQuantityWhereUniqueInput>;

  @Field(() => [ItemQuantityWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ItemQuantityWhereUniqueInput],
  })
  disconnect?: Array<ItemQuantityWhereUniqueInput>;

  @Field(() => [ItemQuantityWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ItemQuantityWhereUniqueInput],
  })
  set?: Array<ItemQuantityWhereUniqueInput>;
}

export { ItemQuantityUpdateManyWithoutScalarsInput as ItemQuantityUpdateManyWithoutScalarsInput };
