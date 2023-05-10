
import { InputType, Field } from "@nestjs/graphql";
import { PromotionWhereUniqueInput } from "../../promotion/base/PromotionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PromotionCreateNestedManyWithoutOrdersInput {
  @Field(() => [PromotionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PromotionWhereUniqueInput],
  })
  connect?: Array<PromotionWhereUniqueInput>;
}

export { PromotionCreateNestedManyWithoutOrdersInput as PromotionCreateNestedManyWithoutOrdersInput };
