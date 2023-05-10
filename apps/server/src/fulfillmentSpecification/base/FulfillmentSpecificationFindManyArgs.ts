
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FulfillmentSpecificationWhereInput } from "./FulfillmentSpecificationWhereInput";
import { Type } from "class-transformer";
import { FulfillmentSpecificationOrderByInput } from "./FulfillmentSpecificationOrderByInput";

@ArgsType()
class FulfillmentSpecificationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FulfillmentSpecificationWhereInput,
  })
  @Field(() => FulfillmentSpecificationWhereInput, { nullable: true })
  @Type(() => FulfillmentSpecificationWhereInput)
  where?: FulfillmentSpecificationWhereInput;

  @ApiProperty({
    required: false,
    type: [FulfillmentSpecificationOrderByInput],
  })
  @Field(() => [FulfillmentSpecificationOrderByInput], { nullable: true })
  @Type(() => FulfillmentSpecificationOrderByInput)
  orderBy?: Array<FulfillmentSpecificationOrderByInput>;

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

export { FulfillmentSpecificationFindManyArgs as FulfillmentSpecificationFindManyArgs };
