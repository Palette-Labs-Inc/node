import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsEnum,
  IsOptional,
  IsString,
  ValidateNested,
  IsInt,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumBazaarFulfillmentModes } from "./EnumBazaarFulfillmentModes";
import { PaymentTerm } from "../../paymentTerm/base/PaymentTerm";
import { Promotion } from "../../promotion/base/Promotion";
import { Seller } from "../../seller/base/Seller";

@ObjectType()
class Bazaar {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    enum: EnumBazaarFulfillmentModes,
    isArray: true,
  })
  @IsEnum(EnumBazaarFulfillmentModes, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumBazaarFulfillmentModes], {
    nullable: true,
  })
  fulfillmentModes?: Array<
    "PickUp" | "Delivery" | "DineIn" | "TakeOut" | "DriveThru"
  >;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => PaymentTerm,
  })
  @ValidateNested()
  @Type(() => PaymentTerm)
  @IsOptional()
  paymentTerms?: PaymentTerm | null;

  @ApiProperty({
    required: false,
    type: () => [Promotion],
  })
  @ValidateNested()
  @Type(() => Promotion)
  @IsOptional()
  promotions?: Array<Promotion>;

  @ApiProperty({
    required: true,
    type: () => [Seller],
  })
  @ValidateNested()
  @Type(() => Seller)
  @IsOptional()
  sellers?: Array<Seller>;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  timeToLive!: number;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Bazaar as Bazaar };
