
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumScalarClassification } from "./EnumScalarClassification";
import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";
import { ItemQuantity } from "../../itemQuantity/base/ItemQuantity";
import { Type } from "class-transformer";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";

@ObjectType()
class Scalar {
  @ApiProperty({
    required: true,
    enum: EnumScalarClassification,
  })
  @IsEnum(EnumScalarClassification)
  @Field(() => EnumScalarClassification, {
    nullable: true,
  })
  classification?: "Constant" | "Variable";

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  computedValue!: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  estimatedValue!: number | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [ItemQuantity],
  })
  @ValidateNested()
  @Type(() => ItemQuantity)
  @IsOptional()
  itemQuantityAllocatedMeasure?: Array<ItemQuantity>;

  @ApiProperty({
    required: false,
    type: () => [ItemQuantity],
  })
  @ValidateNested()
  @Type(() => ItemQuantity)
  @IsOptional()
  itemQuantityAvailableMeasure?: Array<ItemQuantity>;

  @ApiProperty({
    required: false,
    type: () => [ItemQuantity],
  })
  @ValidateNested()
  @Type(() => ItemQuantity)
  @IsOptional()
  itemQuantityMaximumPurchasableMeasure?: Array<ItemQuantity>;

  @ApiProperty({
    required: false,
    type: () => [ItemQuantity],
  })
  @ValidateNested()
  @Type(() => ItemQuantity)
  @IsOptional()
  itemQuantityMinimumPurchasableMeasure?: Array<ItemQuantity>;

  @ApiProperty({
    required: false,
    type: () => [ItemQuantity],
  })
  @ValidateNested()
  @Type(() => ItemQuantity)
  @IsOptional()
  itemQuantitySelectedMeasure?: Array<ItemQuantity>;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  range!: JsonValue;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  unit!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  value!: number;
}

export { Scalar as Scalar };
