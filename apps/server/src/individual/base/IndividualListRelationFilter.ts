
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IndividualWhereInput } from "./IndividualWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class IndividualListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => IndividualWhereInput,
  })
  @ValidateNested()
  @Type(() => IndividualWhereInput)
  @IsOptional()
  @Field(() => IndividualWhereInput, {
    nullable: true,
  })
  every?: IndividualWhereInput;

  @ApiProperty({
    required: false,
    type: () => IndividualWhereInput,
  })
  @ValidateNested()
  @Type(() => IndividualWhereInput)
  @IsOptional()
  @Field(() => IndividualWhereInput, {
    nullable: true,
  })
  some?: IndividualWhereInput;

  @ApiProperty({
    required: false,
    type: () => IndividualWhereInput,
  })
  @ValidateNested()
  @Type(() => IndividualWhereInput)
  @IsOptional()
  @Field(() => IndividualWhereInput, {
    nullable: true,
  })
  none?: IndividualWhereInput;
}
export { IndividualListRelationFilter as IndividualListRelationFilter };
