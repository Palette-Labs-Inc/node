
import { InputType, Field } from "@nestjs/graphql";
import { RatingWhereUniqueInput } from "../../rating/base/RatingWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class RatingUpdateManyWithoutSellersInput {
  @Field(() => [RatingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RatingWhereUniqueInput],
  })
  connect?: Array<RatingWhereUniqueInput>;

  @Field(() => [RatingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RatingWhereUniqueInput],
  })
  disconnect?: Array<RatingWhereUniqueInput>;

  @Field(() => [RatingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RatingWhereUniqueInput],
  })
  set?: Array<RatingWhereUniqueInput>;
}

export { RatingUpdateManyWithoutSellersInput as RatingUpdateManyWithoutSellersInput };
