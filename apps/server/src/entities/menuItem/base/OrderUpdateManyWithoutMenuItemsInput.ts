
import { InputType, Field } from "@nestjs/graphql";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class OrderUpdateManyWithoutMenuItemsInput {
  @Field(() => [OrderWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrderWhereUniqueInput],
  })
  connect?: Array<OrderWhereUniqueInput>;

  @Field(() => [OrderWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrderWhereUniqueInput],
  })
  disconnect?: Array<OrderWhereUniqueInput>;

  @Field(() => [OrderWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrderWhereUniqueInput],
  })
  set?: Array<OrderWhereUniqueInput>;
}

export { OrderUpdateManyWithoutMenuItemsInput as OrderUpdateManyWithoutMenuItemsInput };
