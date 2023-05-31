
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsString,
  IsInt,
  ValidateNested,
  IsOptional,
} from "class-validator";
import { Type } from "class-transformer";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { Seller } from "../../seller/base/Seller";

@ObjectType()
class ModifierGroup {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

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
  maximumPerModifierSelectionQuantity!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  maximumSelections!: number;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  menuItemIDs!: JsonValue;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  minimumSelections!: number;

  @ApiProperty({
    required: false,
    type: () => Seller,
  })
  @ValidateNested()
  @Type(() => Seller)
  @IsOptional()
  sellerModifierGroups?: Seller | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { ModifierGroup as ModifierGroup };
