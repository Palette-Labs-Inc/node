
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PromotionWhereInput } from "./PromotionWhereInput";
import { Type } from "class-transformer";
import { PromotionOrderByInput } from "./PromotionOrderByInput";

@ArgsType()
class PromotionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PromotionWhereInput,
  })
  @Field(() => PromotionWhereInput, { nullable: true })
  @Type(() => PromotionWhereInput)
  where?: PromotionWhereInput;

  @ApiProperty({
    required: false,
    type: [PromotionOrderByInput],
  })
  @Field(() => [PromotionOrderByInput], { nullable: true })
  @Type(() => PromotionOrderByInput)
  orderBy?: Array<PromotionOrderByInput>;

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

export { PromotionFindManyArgs as PromotionFindManyArgs };
