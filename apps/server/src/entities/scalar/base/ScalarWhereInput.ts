
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumScalarClassification } from "./EnumScalarClassification";
import { IsEnum, IsOptional, ValidateNested } from "class-validator";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { ItemQuantityListRelationFilter } from "../../itemQuantity/base/ItemQuantityListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatFilter } from "../../util/FloatFilter";

@InputType()
class ScalarWhereInput {
  @ApiProperty({
    required: false,
    enum: EnumScalarClassification,
  })
  @IsEnum(EnumScalarClassification)
  @IsOptional()
  @Field(() => EnumScalarClassification, {
    nullable: true,
  })
  classification?: "Constant" | "Variable";

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  computedValue?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  estimatedValue?: FloatNullableFilter;

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
    type: () => ItemQuantityListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ItemQuantityListRelationFilter)
  @IsOptional()
  @Field(() => ItemQuantityListRelationFilter, {
    nullable: true,
  })
  itemQuantityAllocatedMeasure?: ItemQuantityListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ItemQuantityListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ItemQuantityListRelationFilter)
  @IsOptional()
  @Field(() => ItemQuantityListRelationFilter, {
    nullable: true,
  })
  itemQuantityAvailableMeasure?: ItemQuantityListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ItemQuantityListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ItemQuantityListRelationFilter)
  @IsOptional()
  @Field(() => ItemQuantityListRelationFilter, {
    nullable: true,
  })
  itemQuantityMaximumPurchasableMeasure?: ItemQuantityListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ItemQuantityListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ItemQuantityListRelationFilter)
  @IsOptional()
  @Field(() => ItemQuantityListRelationFilter, {
    nullable: true,
  })
  itemQuantityMinimumPurchasableMeasure?: ItemQuantityListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ItemQuantityListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ItemQuantityListRelationFilter)
  @IsOptional()
  @Field(() => ItemQuantityListRelationFilter, {
    nullable: true,
  })
  itemQuantitySelectedMeasure?: ItemQuantityListRelationFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  range?: JsonFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  unit?: StringFilter;

  @ApiProperty({
    required: false,
    type: FloatFilter,
  })
  @Type(() => FloatFilter)
  @IsOptional()
  @Field(() => FloatFilter, {
    nullable: true,
  })
  value?: FloatFilter;
}

export { ScalarWhereInput as ScalarWhereInput };
