
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumScalarClassification } from "./EnumScalarClassification";
import {
  IsEnum,
  IsOptional,
  IsNumber,
  ValidateNested,
  IsString,
} from "class-validator";
import { ItemQuantityUpdateManyWithoutScalarsInput } from "./ItemQuantityUpdateManyWithoutScalarsInput";
import { Type } from "class-transformer";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";

@InputType()
class ScalarUpdateInput {
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
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  computedValue?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  estimatedValue?: number | null;

  @ApiProperty({
    required: false,
    type: () => ItemQuantityUpdateManyWithoutScalarsInput,
  })
  @ValidateNested()
  @Type(() => ItemQuantityUpdateManyWithoutScalarsInput)
  @IsOptional()
  @Field(() => ItemQuantityUpdateManyWithoutScalarsInput, {
    nullable: true,
  })
  itemQuantityAllocatedMeasure?: ItemQuantityUpdateManyWithoutScalarsInput;

  @ApiProperty({
    required: false,
    type: () => ItemQuantityUpdateManyWithoutScalarsInput,
  })
  @ValidateNested()
  @Type(() => ItemQuantityUpdateManyWithoutScalarsInput)
  @IsOptional()
  @Field(() => ItemQuantityUpdateManyWithoutScalarsInput, {
    nullable: true,
  })
  itemQuantityAvailableMeasure?: ItemQuantityUpdateManyWithoutScalarsInput;

  @ApiProperty({
    required: false,
    type: () => ItemQuantityUpdateManyWithoutScalarsInput,
  })
  @ValidateNested()
  @Type(() => ItemQuantityUpdateManyWithoutScalarsInput)
  @IsOptional()
  @Field(() => ItemQuantityUpdateManyWithoutScalarsInput, {
    nullable: true,
  })
  itemQuantityMaximumPurchasableMeasure?: ItemQuantityUpdateManyWithoutScalarsInput;

  @ApiProperty({
    required: false,
    type: () => ItemQuantityUpdateManyWithoutScalarsInput,
  })
  @ValidateNested()
  @Type(() => ItemQuantityUpdateManyWithoutScalarsInput)
  @IsOptional()
  @Field(() => ItemQuantityUpdateManyWithoutScalarsInput, {
    nullable: true,
  })
  itemQuantityMinimumPurchasableMeasure?: ItemQuantityUpdateManyWithoutScalarsInput;

  @ApiProperty({
    required: false,
    type: () => ItemQuantityUpdateManyWithoutScalarsInput,
  })
  @ValidateNested()
  @Type(() => ItemQuantityUpdateManyWithoutScalarsInput)
  @IsOptional()
  @Field(() => ItemQuantityUpdateManyWithoutScalarsInput, {
    nullable: true,
  })
  itemQuantitySelectedMeasure?: ItemQuantityUpdateManyWithoutScalarsInput;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  range?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  unit?: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  value?: number;
}

export { ScalarUpdateInput as ScalarUpdateInput };
