import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { Rating } from "../../../rating/base/Rating";
import { RequestTransactionLifecycleDto } from "../../dto/request.dto"

@ObjectType()
class RatingDto extends RequestTransactionLifecycleDto {
  @ApiProperty({
    required: true,
    type: () => Rating,
  })
  @ValidateNested()
  @Type(() => Rating)
  @Field(() => Rating)
  rating!: Rating;
}

export { RatingDto as RatingDto };