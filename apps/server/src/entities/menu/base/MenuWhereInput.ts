
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { JsonFilter } from "../../util/JsonFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { HourIntervalListRelationFilter } from "../../hourInterval/base/HourIntervalListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { SellerWhereUniqueInput } from "../../seller/base/SellerWhereUniqueInput";

@InputType()
class MenuWhereInput {
  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  categoryIDs?: JsonFilter;

  @ApiProperty({
    required: false,
    type: () => HourIntervalListRelationFilter,
  })
  @ValidateNested()
  @Type(() => HourIntervalListRelationFilter)
  @IsOptional()
  @Field(() => HourIntervalListRelationFilter, {
    nullable: true,
  })
  hourIntervals?: HourIntervalListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => SellerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SellerWhereUniqueInput)
  @IsOptional()
  @Field(() => SellerWhereUniqueInput, {
    nullable: true,
  })
  seller?: SellerWhereUniqueInput;
}

export { MenuWhereInput as MenuWhereInput };
