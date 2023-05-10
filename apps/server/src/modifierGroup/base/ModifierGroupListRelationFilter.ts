
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ModifierGroupWhereInput } from "./ModifierGroupWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ModifierGroupListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ModifierGroupWhereInput,
  })
  @ValidateNested()
  @Type(() => ModifierGroupWhereInput)
  @IsOptional()
  @Field(() => ModifierGroupWhereInput, {
    nullable: true,
  })
  every?: ModifierGroupWhereInput;

  @ApiProperty({
    required: false,
    type: () => ModifierGroupWhereInput,
  })
  @ValidateNested()
  @Type(() => ModifierGroupWhereInput)
  @IsOptional()
  @Field(() => ModifierGroupWhereInput, {
    nullable: true,
  })
  some?: ModifierGroupWhereInput;

  @ApiProperty({
    required: false,
    type: () => ModifierGroupWhereInput,
  })
  @ValidateNested()
  @Type(() => ModifierGroupWhereInput)
  @IsOptional()
  @Field(() => ModifierGroupWhereInput, {
    nullable: true,
  })
  none?: ModifierGroupWhereInput;
}
export { ModifierGroupListRelationFilter as ModifierGroupListRelationFilter };
