
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ScalarWhereInput } from "./ScalarWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ScalarListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ScalarWhereInput,
  })
  @ValidateNested()
  @Type(() => ScalarWhereInput)
  @IsOptional()
  @Field(() => ScalarWhereInput, {
    nullable: true,
  })
  every?: ScalarWhereInput;

  @ApiProperty({
    required: false,
    type: () => ScalarWhereInput,
  })
  @ValidateNested()
  @Type(() => ScalarWhereInput)
  @IsOptional()
  @Field(() => ScalarWhereInput, {
    nullable: true,
  })
  some?: ScalarWhereInput;

  @ApiProperty({
    required: false,
    type: () => ScalarWhereInput,
  })
  @ValidateNested()
  @Type(() => ScalarWhereInput)
  @IsOptional()
  @Field(() => ScalarWhereInput, {
    nullable: true,
  })
  none?: ScalarWhereInput;
}
export { ScalarListRelationFilter as ScalarListRelationFilter };
