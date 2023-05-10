
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TrackingWhereInput } from "./TrackingWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TrackingListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TrackingWhereInput,
  })
  @ValidateNested()
  @Type(() => TrackingWhereInput)
  @IsOptional()
  @Field(() => TrackingWhereInput, {
    nullable: true,
  })
  every?: TrackingWhereInput;

  @ApiProperty({
    required: false,
    type: () => TrackingWhereInput,
  })
  @ValidateNested()
  @Type(() => TrackingWhereInput)
  @IsOptional()
  @Field(() => TrackingWhereInput, {
    nullable: true,
  })
  some?: TrackingWhereInput;

  @ApiProperty({
    required: false,
    type: () => TrackingWhereInput,
  })
  @ValidateNested()
  @Type(() => TrackingWhereInput)
  @IsOptional()
  @Field(() => TrackingWhereInput, {
    nullable: true,
  })
  none?: TrackingWhereInput;
}
export { TrackingListRelationFilter as TrackingListRelationFilter };
