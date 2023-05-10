
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BillingWhereInput } from "./BillingWhereInput";
import { Type } from "class-transformer";
import { BillingOrderByInput } from "./BillingOrderByInput";

@ArgsType()
class BillingFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BillingWhereInput,
  })
  @Field(() => BillingWhereInput, { nullable: true })
  @Type(() => BillingWhereInput)
  where?: BillingWhereInput;

  @ApiProperty({
    required: false,
    type: [BillingOrderByInput],
  })
  @Field(() => [BillingOrderByInput], { nullable: true })
  @Type(() => BillingOrderByInput)
  orderBy?: Array<BillingOrderByInput>;

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

export { BillingFindManyArgs as BillingFindManyArgs };
