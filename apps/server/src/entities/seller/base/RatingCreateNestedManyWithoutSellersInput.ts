
import { InputType, Field } from "@nestjs/graphql";
import { RatingWhereUniqueInput } from "../../rating/base/RatingWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class RatingCreateNestedManyWithoutSellersInput {
  @Field(() => [RatingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RatingWhereUniqueInput],
  })
  connect?: Array<RatingWhereUniqueInput>;
}

export { RatingCreateNestedManyWithoutSellersInput as RatingCreateNestedManyWithoutSellersInput };
