
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
import { LocationCreateNestedManyWithoutPromotionsInput } from "./LocationCreateNestedManyWithoutPromotionsInput";
import { OrderCreateNestedManyWithoutPromotionsInput } from "./OrderCreateNestedManyWithoutPromotionsInput";
import { SearchWhereUniqueInput } from "../../search/base/SearchWhereUniqueInput";
import { SellerWhereUniqueInput } from "../../seller/base/SellerWhereUniqueInput";

@InputType()
class PromotionCreateInput {
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
    type: () => LocationCreateNestedManyWithoutPromotionsInput,
  })
  @ValidateNested()
  @Type(() => LocationCreateNestedManyWithoutPromotionsInput)
  @IsOptional()
  @Field(() => LocationCreateNestedManyWithoutPromotionsInput, {
    nullable: true,
  })
  locations?: LocationCreateNestedManyWithoutPromotionsInput;

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
    type: () => OrderCreateNestedManyWithoutPromotionsInput,
  })
  @ValidateNested()
  @Type(() => OrderCreateNestedManyWithoutPromotionsInput)
  @IsOptional()
  @Field(() => OrderCreateNestedManyWithoutPromotionsInput, {
    nullable: true,
  })
  orders?: OrderCreateNestedManyWithoutPromotionsInput;

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

export { PromotionCreateInput as PromotionCreateInput };
