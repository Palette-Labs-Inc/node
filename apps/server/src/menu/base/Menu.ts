
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import {
  IsDate,
  IsEnum,
  IsOptional,
  ValidateNested,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumMenuFulfillmentModes } from "./EnumMenuFulfillmentModes";
import { HourInterval } from "../../hourInterval/base/HourInterval";
import { Seller } from "../../seller/base/Seller";

@ObjectType()
class Menu {
  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  categoryIDs!: JsonValue;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    enum: EnumMenuFulfillmentModes,
    isArray: true,
  })
  @IsEnum(EnumMenuFulfillmentModes, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumMenuFulfillmentModes], {
    nullable: true,
  })
  fulfillmentModes?: Array<
    "PickUp" | "Delivery" | "DineIn" | "TakeOut" | "DriveThru"
  >;

  @ApiProperty({
    required: true,
    type: () => [HourInterval],
  })
  @ValidateNested()
  @Type(() => HourInterval)
  @IsOptional()
  hourIntervals?: Array<HourInterval>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: () => Seller,
  })
  @ValidateNested()
  @Type(() => Seller)
  seller?: Seller;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Menu as Menu };
