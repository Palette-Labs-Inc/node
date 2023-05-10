
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsOptional, ValidateNested } from "class-validator";
import { ScalarWhereUniqueInput } from "../../scalar/base/ScalarWhereUniqueInput";
import { Type } from "class-transformer";
import { MenuItemWhereUniqueInput } from "../../menuItem/base/MenuItemWhereUniqueInput";

@InputType()
class ItemQuantityUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  allocatedCount?: number;

  @ApiProperty({
    required: false,
    type: () => ScalarWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ScalarWhereUniqueInput)
  @IsOptional()
  @Field(() => ScalarWhereUniqueInput, {
    nullable: true,
  })
  allocatedMeasure?: ScalarWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  availableCount?: number;

  @ApiProperty({
    required: false,
    type: () => ScalarWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ScalarWhereUniqueInput)
  @IsOptional()
  @Field(() => ScalarWhereUniqueInput, {
    nullable: true,
  })
  availableMeasure?: ScalarWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  maximumPurchasableCount?: number;

  @ApiProperty({
    required: false,
    type: () => ScalarWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ScalarWhereUniqueInput)
  @IsOptional()
  @Field(() => ScalarWhereUniqueInput, {
    nullable: true,
  })
  maximumPurchasableMeasure?: ScalarWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => MenuItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MenuItemWhereUniqueInput)
  @IsOptional()
  @Field(() => MenuItemWhereUniqueInput, {
    nullable: true,
  })
  menuItem?: MenuItemWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  minimumPurchasableCount?: number;

  @ApiProperty({
    required: false,
    type: () => ScalarWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ScalarWhereUniqueInput)
  @IsOptional()
  @Field(() => ScalarWhereUniqueInput, {
    nullable: true,
  })
  minimumPurchasableMeasure?: ScalarWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  selectedCount?: number | null;

  @ApiProperty({
    required: false,
    type: () => ScalarWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ScalarWhereUniqueInput)
  @IsOptional()
  @Field(() => ScalarWhereUniqueInput, {
    nullable: true,
  })
  selectedMeasure?: ScalarWhereUniqueInput | null;
}

export { ItemQuantityUpdateInput as ItemQuantityUpdateInput };
