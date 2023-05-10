
import { InputType, Field } from "@nestjs/graphql";
import { RatingWhereUniqueInput } from "../../rating/base/RatingWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class RatingCreateNestedManyWithoutCouriersInput {
  @Field(() => [RatingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RatingWhereUniqueInput],
  })
  connect?: Array<RatingWhereUniqueInput>;
}

export { RatingCreateNestedManyWithoutCouriersInput as RatingCreateNestedManyWithoutCouriersInput };
