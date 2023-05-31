
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RatingWhereInput } from "./RatingWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RatingListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => RatingWhereInput,
  })
  @ValidateNested()
  @Type(() => RatingWhereInput)
  @IsOptional()
  @Field(() => RatingWhereInput, {
    nullable: true,
  })
  every?: RatingWhereInput;

  @ApiProperty({
    required: false,
    type: () => RatingWhereInput,
  })
  @ValidateNested()
  @Type(() => RatingWhereInput)
  @IsOptional()
  @Field(() => RatingWhereInput, {
    nullable: true,
  })
  some?: RatingWhereInput;

  @ApiProperty({
    required: false,
    type: () => RatingWhereInput,
  })
  @ValidateNested()
  @Type(() => RatingWhereInput)
  @IsOptional()
  @Field(() => RatingWhereInput, {
    nullable: true,
  })
  none?: RatingWhereInput;
}
export { RatingListRelationFilter as RatingListRelationFilter };
