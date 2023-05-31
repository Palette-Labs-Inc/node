
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BazaarCreateNestedManyWithoutSellersInput } from "./BazaarCreateNestedManyWithoutSellersInput";
import {
  ValidateNested,
  IsOptional,
  IsBoolean,
  IsString,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
import { CategoryCreateNestedManyWithoutSellersInput } from "./CategoryCreateNestedManyWithoutSellersInput";
import { FulfillmentSpecificationCreateNestedManyWithoutSellersInput } from "./FulfillmentSpecificationCreateNestedManyWithoutSellersInput";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { LocationCreateNestedManyWithoutSellersInput } from "./LocationCreateNestedManyWithoutSellersInput";
import { MenuItemCreateNestedManyWithoutSellersInput } from "./MenuItemCreateNestedManyWithoutSellersInput";
import { MenuCreateNestedManyWithoutSellersInput } from "./MenuCreateNestedManyWithoutSellersInput";
import { ModifierGroupCreateNestedManyWithoutSellersInput } from "./ModifierGroupCreateNestedManyWithoutSellersInput";
import { PaymentTermWhereUniqueInput } from "../../paymentTerm/base/PaymentTermWhereUniqueInput";
import { PromotionCreateNestedManyWithoutSellersInput } from "./PromotionCreateNestedManyWithoutSellersInput";
import { RatingCreateNestedManyWithoutSellersInput } from "./RatingCreateNestedManyWithoutSellersInput";
import { SearchWhereUniqueInput } from "../../search/base/SearchWhereUniqueInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class SellerCreateInput {
  @ApiProperty({
    required: false,
    type: () => BazaarCreateNestedManyWithoutSellersInput,
  })
  @ValidateNested()
  @Type(() => BazaarCreateNestedManyWithoutSellersInput)
  @IsOptional()
  @Field(() => BazaarCreateNestedManyWithoutSellersInput, {
    nullable: true,
  })
  bazaar?: BazaarCreateNestedManyWithoutSellersInput;

  @ApiProperty({
    required: true,
    type: () => CategoryCreateNestedManyWithoutSellersInput,
  })
  @ValidateNested()
  @Type(() => CategoryCreateNestedManyWithoutSellersInput)
  @IsOptional()
  @Field(() => CategoryCreateNestedManyWithoutSellersInput, {
    nullable: true,
  })
  categories?: CategoryCreateNestedManyWithoutSellersInput;

  @ApiProperty({
    required: false,
    type: () => FulfillmentSpecificationCreateNestedManyWithoutSellersInput,
  })
  @ValidateNested()
  @Type(() => FulfillmentSpecificationCreateNestedManyWithoutSellersInput)
  @IsOptional()
  @Field(() => FulfillmentSpecificationCreateNestedManyWithoutSellersInput, {
    nullable: true,
  })
  fulfillmentSpecifications?: FulfillmentSpecificationCreateNestedManyWithoutSellersInput;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  holidays?: InputJsonValue;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isRateable!: boolean;

  @ApiProperty({
    required: false,
    type: () => LocationCreateNestedManyWithoutSellersInput,
  })
  @ValidateNested()
  @Type(() => LocationCreateNestedManyWithoutSellersInput)
  @IsOptional()
  @Field(() => LocationCreateNestedManyWithoutSellersInput, {
    nullable: true,
  })
  locations?: LocationCreateNestedManyWithoutSellersInput;

  @ApiProperty({
    required: true,
    type: () => MenuItemCreateNestedManyWithoutSellersInput,
  })
  @ValidateNested()
  @Type(() => MenuItemCreateNestedManyWithoutSellersInput)
  @IsOptional()
  @Field(() => MenuItemCreateNestedManyWithoutSellersInput, {
    nullable: true,
  })
  menuItems?: MenuItemCreateNestedManyWithoutSellersInput;

  @ApiProperty({
    required: true,
    type: () => MenuCreateNestedManyWithoutSellersInput,
  })
  @ValidateNested()
  @Type(() => MenuCreateNestedManyWithoutSellersInput)
  @IsOptional()
  @Field(() => MenuCreateNestedManyWithoutSellersInput, {
    nullable: true,
  })
  menus?: MenuCreateNestedManyWithoutSellersInput;

  @ApiProperty({
    required: true,
    type: () => ModifierGroupCreateNestedManyWithoutSellersInput,
  })
  @ValidateNested()
  @Type(() => ModifierGroupCreateNestedManyWithoutSellersInput)
  @IsOptional()
  @Field(() => ModifierGroupCreateNestedManyWithoutSellersInput, {
    nullable: true,
  })
  modifierGroups?: ModifierGroupCreateNestedManyWithoutSellersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string | null;

  @ApiProperty({
    required: false,
    type: () => PaymentTermWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PaymentTermWhereUniqueInput)
  @IsOptional()
  @Field(() => PaymentTermWhereUniqueInput, {
    nullable: true,
  })
  paymentTerm?: PaymentTermWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => PromotionCreateNestedManyWithoutSellersInput,
  })
  @ValidateNested()
  @Type(() => PromotionCreateNestedManyWithoutSellersInput)
  @IsOptional()
  @Field(() => PromotionCreateNestedManyWithoutSellersInput, {
    nullable: true,
  })
  promotions?: PromotionCreateNestedManyWithoutSellersInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  rating?: number | null;

  @ApiProperty({
    required: false,
    type: () => RatingCreateNestedManyWithoutSellersInput,
  })
  @ValidateNested()
  @Type(() => RatingCreateNestedManyWithoutSellersInput)
  @IsOptional()
  @Field(() => RatingCreateNestedManyWithoutSellersInput, {
    nullable: true,
  })
  ratings?: RatingCreateNestedManyWithoutSellersInput;

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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  sellerClassificationId?: string | null;

  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  users!: UserWhereUniqueInput;
}

export { SellerCreateInput as SellerCreateInput };
