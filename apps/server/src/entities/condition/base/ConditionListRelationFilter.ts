
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ConditionWhereInput } from "./ConditionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ConditionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ConditionWhereInput,
  })
  @ValidateNested()
  @Type(() => ConditionWhereInput)
  @IsOptional()
  @Field(() => ConditionWhereInput, {
    nullable: true,
  })
  every?: ConditionWhereInput;

  @ApiProperty({
    required: false,
    type: () => ConditionWhereInput,
  })
  @ValidateNested()
  @Type(() => ConditionWhereInput)
  @IsOptional()
  @Field(() => ConditionWhereInput, {
    nullable: true,
  })
  some?: ConditionWhereInput;

  @ApiProperty({
    required: false,
    type: () => ConditionWhereInput,
  })
  @ValidateNested()
  @Type(() => ConditionWhereInput)
  @IsOptional()
  @Field(() => ConditionWhereInput, {
    nullable: true,
  })
  none?: ConditionWhereInput;
}
export { ConditionListRelationFilter as ConditionListRelationFilter };
