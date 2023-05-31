
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsNumber,
  IsOptional,
  ValidateNested,
  IsDate,
  IsString,
} from "class-validator";
import { BazaarWhereUniqueInput } from "../../bazaar/base/BazaarWhereUniqueInput";
import { Type } from "class-transformer";
import { LocationUpdateManyWithoutPromotionsInput } from "./LocationUpdateManyWithoutPromotionsInput";
import { OrderUpdateManyWithoutPromotionsInput } from "./OrderUpdateManyWithoutPromotionsInput";
import { SearchWhereUniqueInput } from "../../search/base/SearchWhereUniqueInput";
import { SellerWhereUniqueInput } from "../../seller/base/SellerWhereUniqueInput";

@InputType()
class PromotionUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount?: number | null;

  @ApiProperty({
    required: false,
    type: () => BazaarWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BazaarWhereUniqueInput)
  @IsOptional()
  @Field(() => BazaarWhereUniqueInput, {
    nullable: true,
  })
  bazaar?: BazaarWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  expirationDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => LocationUpdateManyWithoutPromotionsInput,
  })
  @ValidateNested()
  @Type(() => LocationUpdateManyWithoutPromotionsInput)
  @IsOptional()
  @Field(() => LocationUpdateManyWithoutPromotionsInput, {
    nullable: true,
  })
  locations?: LocationUpdateManyWithoutPromotionsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  maximumPurchase?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  minimumPurchase?: number;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: () => OrderUpdateManyWithoutPromotionsInput,
  })
  @ValidateNested()
  @Type(() => OrderUpdateManyWithoutPromotionsInput)
  @IsOptional()
  @Field(() => OrderUpdateManyWithoutPromotionsInput, {
    nullable: true,
  })
  orders?: OrderUpdateManyWithoutPromotionsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  percentage?: number | null;

  @ApiProperty({
    required: false,
    type: () => SearchWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SearchWhereUniqueInput)
  @IsOptional()
  @Field(() => SearchWhereUniqueInput, {
    nullable: true,
  })
  search?: SearchWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => SellerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SellerWhereUniqueInput)
  @IsOptional()
  @Field(() => SellerWhereUniqueInput, {
    nullable: true,
  })
  seller?: SellerWhereUniqueInput | null;
}

export { PromotionUpdateInput as PromotionUpdateInput };
