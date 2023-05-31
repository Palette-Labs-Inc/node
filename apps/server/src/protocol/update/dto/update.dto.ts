import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { Order } from "../../../order/base/Order";
import { RequestTransactionLifecycleDto } from "../../dto/request.dto"

@ObjectType()
class UpdateDto extends RequestTransactionLifecycleDto {
  @ApiProperty({
    required: true,
    type: () => Order,
  })
  @ValidateNested()
  @Type(() => Order)
  @Field(() => Order)
  order!: Order;
}

export { UpdateDto as UpdateDto };