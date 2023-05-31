import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { Order } from "../../../order/base/Order";
import { CallbackTransactionLifecycleDto } from "../../dto/callback.dto"

@ObjectType()
class HandleTrackDto extends CallbackTransactionLifecycleDto {
  @ApiProperty({
    required: true,
    type: () => Order,
  })
  @ValidateNested()
  @Type(() => Order)
  @Field(() => Order)
  order!: Order;
}

export { HandleTrackDto as HandleTrackDto };