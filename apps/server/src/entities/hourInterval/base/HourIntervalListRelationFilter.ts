
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HourIntervalWhereInput } from "./HourIntervalWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class HourIntervalListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => HourIntervalWhereInput,
  })
  @ValidateNested()
  @Type(() => HourIntervalWhereInput)
  @IsOptional()
  @Field(() => HourIntervalWhereInput, {
    nullable: true,
  })
  every?: HourIntervalWhereInput;

  @ApiProperty({
    required: false,
    type: () => HourIntervalWhereInput,
  })
  @ValidateNested()
  @Type(() => HourIntervalWhereInput)
  @IsOptional()
  @Field(() => HourIntervalWhereInput, {
    nullable: true,
  })
  some?: HourIntervalWhereInput;

  @ApiProperty({
    required: false,
    type: () => HourIntervalWhereInput,
  })
  @ValidateNested()
  @Type(() => HourIntervalWhereInput)
  @IsOptional()
  @Field(() => HourIntervalWhereInput, {
    nullable: true,
  })
  none?: HourIntervalWhereInput;
}
export { HourIntervalListRelationFilter as HourIntervalListRelationFilter };
