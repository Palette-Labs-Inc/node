
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumScalarClassification } from "./EnumScalarClassification";
import {
  IsEnum,
  IsNumber,
  IsOptional,
  ValidateNested,
  IsString,
} from "class-validator";
import { ItemQuantityCreateNestedManyWithoutScalarsInput } from "./ItemQuantityCreateNestedManyWithoutScalarsInput";
import { Type } from "class-transformer";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";

@InputType()
class ScalarCreateInput {
  @ApiProperty({
    required: true,
    enum: EnumScalarClassification,
  })
  @IsEnum(EnumScalarClassification)
  @Field(() => EnumScalarClassification)
  classification!: "Constant" | "Variable";

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
    type: () => ItemQuantityCreateNestedManyWithoutScalarsInput,
  })
  @ValidateNested()
  @Type(() => ItemQuantityCreateNestedManyWithoutScalarsInput)
  @IsOptional()
  @Field(() => ItemQuantityCreateNestedManyWithoutScalarsInput, {
    nullable: true,
  })
  itemQuantityAllocatedMeasure?: ItemQuantityCreateNestedManyWithoutScalarsInput;

  @ApiProperty({
    required: false,
    type: () => ItemQuantityCreateNestedManyWithoutScalarsInput,
  })
  @ValidateNested()
  @Type(() => ItemQuantityCreateNestedManyWithoutScalarsInput)
  @IsOptional()
  @Field(() => ItemQuantityCreateNestedManyWithoutScalarsInput, {
    nullable: true,
  })
  itemQuantityAvailableMeasure?: ItemQuantityCreateNestedManyWithoutScalarsInput;

  @ApiProperty({
    required: false,
    type: () => ItemQuantityCreateNestedManyWithoutScalarsInput,
  })
  @ValidateNested()
  @Type(() => ItemQuantityCreateNestedManyWithoutScalarsInput)
  @IsOptional()
  @Field(() => ItemQuantityCreateNestedManyWithoutScalarsInput, {
    nullable: true,
  })
  itemQuantityMaximumPurchasableMeasure?: ItemQuantityCreateNestedManyWithoutScalarsInput;

  @ApiProperty({
    required: false,
    type: () => ItemQuantityCreateNestedManyWithoutScalarsInput,
  })
  @ValidateNested()
  @Type(() => ItemQuantityCreateNestedManyWithoutScalarsInput)
  @IsOptional()
  @Field(() => ItemQuantityCreateNestedManyWithoutScalarsInput, {
    nullable: true,
  })
  itemQuantityMinimumPurchasableMeasure?: ItemQuantityCreateNestedManyWithoutScalarsInput;

  @ApiProperty({
    required: false,
    type: () => ItemQuantityCreateNestedManyWithoutScalarsInput,
  })
  @ValidateNested()
  @Type(() => ItemQuantityCreateNestedManyWithoutScalarsInput)
  @IsOptional()
  @Field(() => ItemQuantityCreateNestedManyWithoutScalarsInput, {
    nullable: true,
  })
  itemQuantitySelectedMeasure?: ItemQuantityCreateNestedManyWithoutScalarsInput;

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

export { ScalarCreateInput as ScalarCreateInput };
