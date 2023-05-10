
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SearchWhereInput } from "./SearchWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SearchListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SearchWhereInput,
  })
  @ValidateNested()
  @Type(() => SearchWhereInput)
  @IsOptional()
  @Field(() => SearchWhereInput, {
    nullable: true,
  })
  every?: SearchWhereInput;

  @ApiProperty({
    required: false,
    type: () => SearchWhereInput,
  })
  @ValidateNested()
  @Type(() => SearchWhereInput)
  @IsOptional()
  @Field(() => SearchWhereInput, {
    nullable: true,
  })
  some?: SearchWhereInput;

  @ApiProperty({
    required: false,
    type: () => SearchWhereInput,
  })
  @ValidateNested()
  @Type(() => SearchWhereInput)
  @IsOptional()
  @Field(() => SearchWhereInput, {
    nullable: true,
  })
  none?: SearchWhereInput;
}
export { SearchListRelationFilter as SearchListRelationFilter };
