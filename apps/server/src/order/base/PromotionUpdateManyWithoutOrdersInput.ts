
import { InputType, Field } from "@nestjs/graphql";
import { PromotionWhereUniqueInput } from "../../promotion/base/PromotionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PromotionUpdateManyWithoutOrdersInput {
  @Field(() => [PromotionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PromotionWhereUniqueInput],
  })
  connect?: Array<PromotionWhereUniqueInput>;

  @Field(() => [PromotionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PromotionWhereUniqueInput],
  })
  disconnect?: Array<PromotionWhereUniqueInput>;

  @Field(() => [PromotionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PromotionWhereUniqueInput],
  })
  set?: Array<PromotionWhereUniqueInput>;
}

export { PromotionUpdateManyWithoutOrdersInput as PromotionUpdateManyWithoutOrdersInput };
