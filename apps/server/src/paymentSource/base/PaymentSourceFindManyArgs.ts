
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PaymentSourceWhereInput } from "./PaymentSourceWhereInput";
import { Type } from "class-transformer";
import { PaymentSourceOrderByInput } from "./PaymentSourceOrderByInput";

@ArgsType()
class PaymentSourceFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PaymentSourceWhereInput,
  })
  @Field(() => PaymentSourceWhereInput, { nullable: true })
  @Type(() => PaymentSourceWhereInput)
  where?: PaymentSourceWhereInput;

  @ApiProperty({
    required: false,
    type: [PaymentSourceOrderByInput],
  })
  @Field(() => [PaymentSourceOrderByInput], { nullable: true })
  @Type(() => PaymentSourceOrderByInput)
  orderBy?: Array<PaymentSourceOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PaymentSourceFindManyArgs as PaymentSourceFindManyArgs };
