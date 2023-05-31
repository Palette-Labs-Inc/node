
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, ValidateNested, IsOptional } from "class-validator";
import { ScalarWhereUniqueInput } from "../../scalar/base/ScalarWhereUniqueInput";
import { Type } from "class-transformer";
import { MenuItemWhereUniqueInput } from "../../menuItem/base/MenuItemWhereUniqueInput";

@InputType()
class ItemQuantityCreateInput {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  allocatedCount!: number;

  @ApiProperty({
    required: true,
    type: () => ScalarWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ScalarWhereUniqueInput)
  @Field(() => ScalarWhereUniqueInput)
  allocatedMeasure!: ScalarWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  availableCount!: number;

  @ApiProperty({
    required: true,
    type: () => ScalarWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ScalarWhereUniqueInput)
  @Field(() => ScalarWhereUniqueInput)
  availableMeasure!: ScalarWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  maximumPurchasableCount!: number;

  @ApiProperty({
    required: true,
    type: () => ScalarWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ScalarWhereUniqueInput)
  @Field(() => ScalarWhereUniqueInput)
  maximumPurchasableMeasure!: ScalarWhereUniqueInput;

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
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  minimumPurchasableCount!: number;

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

export { ItemQuantityCreateInput as ItemQuantityCreateInput };
