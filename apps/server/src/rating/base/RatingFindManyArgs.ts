
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RatingWhereInput } from "./RatingWhereInput";
import { Type } from "class-transformer";
import { RatingOrderByInput } from "./RatingOrderByInput";

@ArgsType()
class RatingFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RatingWhereInput,
  })
  @Field(() => RatingWhereInput, { nullable: true })
  @Type(() => RatingWhereInput)
  where?: RatingWhereInput;

  @ApiProperty({
    required: false,
    type: [RatingOrderByInput],
  })
  @Field(() => [RatingOrderByInput], { nullable: true })
  @Type(() => RatingOrderByInput)
  orderBy?: Array<RatingOrderByInput>;

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

export { RatingFindManyArgs as RatingFindManyArgs };
