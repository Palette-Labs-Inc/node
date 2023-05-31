
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsNumber,
  IsOptional,
  ValidateNested,
  IsDate,
  IsString,
} from "class-validator";
import { Bazaar } from "../../bazaar/base/Bazaar";
import { Type } from "class-transformer";
import { Location } from "../../location/base/Location";
import { Order } from "../../order/base/Order";
import { Search } from "../../search/base/Search";
import { Seller } from "../../seller/base/Seller";

@ObjectType()
class Promotion {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount!: number | null;

  @ApiProperty({
    required: false,
    type: () => Bazaar,
  })
  @ValidateNested()
  @Type(() => Bazaar)
  @IsOptional()
  bazaar?: Bazaar | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  expirationDate!: Date | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [Location],
  })
  @ValidateNested()
  @Type(() => Location)
  @IsOptional()
  locations?: Array<Location>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  maximumPurchase!: number | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  minimumPurchase!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: () => [Order],
  })
  @ValidateNested()
  @Type(() => Order)
  @IsOptional()
  orders?: Array<Order>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  percentage!: number | null;

  @ApiProperty({
    required: false,
    type: () => Search,
  })
  @ValidateNested()
  @Type(() => Search)
  @IsOptional()
  search?: Search | null;

  @ApiProperty({
    required: false,
    type: () => Seller,
  })
  @ValidateNested()
  @Type(() => Seller)
  @IsOptional()
  seller?: Seller | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Promotion as Promotion };
