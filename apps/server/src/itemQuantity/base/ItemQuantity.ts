
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, ValidateNested, IsString, IsOptional } from "class-validator";
import { Scalar } from "../../scalar/base/Scalar";
import { Type } from "class-transformer";
import { MenuItem } from "../../menuItem/base/MenuItem";

@ObjectType()
class ItemQuantity {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  allocatedCount!: number;

  @ApiProperty({
    required: true,
    type: () => Scalar,
  })
  @ValidateNested()
  @Type(() => Scalar)
  allocatedMeasure?: Scalar;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  availableCount!: number;

  @ApiProperty({
    required: true,
    type: () => Scalar,
  })
  @ValidateNested()
  @Type(() => Scalar)
  availableMeasure?: Scalar;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  maximumPurchasableCount!: number;

  @ApiProperty({
    required: true,
    type: () => Scalar,
  })
  @ValidateNested()
  @Type(() => Scalar)
  maximumPurchasableMeasure?: Scalar;

  @ApiProperty({
    required: false,
    type: () => MenuItem,
  })
  @ValidateNested()
  @Type(() => MenuItem)
  @IsOptional()
  menuItem?: MenuItem | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  minimumPurchasableCount!: number;

  @ApiProperty({
    required: false,
    type: () => Scalar,
  })
  @ValidateNested()
  @Type(() => Scalar)
  @IsOptional()
  minimumPurchasableMeasure?: Scalar | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  selectedCount!: number | null;

  @ApiProperty({
    required: false,
    type: () => Scalar,
  })
  @ValidateNested()
  @Type(() => Scalar)
  @IsOptional()
  selectedMeasure?: Scalar | null;
}

export { ItemQuantity as ItemQuantity };
