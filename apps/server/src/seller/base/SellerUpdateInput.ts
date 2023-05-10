
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BazaarUpdateManyWithoutSellersInput } from "./BazaarUpdateManyWithoutSellersInput";
import {
  ValidateNested,
  IsOptional,
  IsBoolean,
  IsString,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
import { CategoryUpdateManyWithoutSellersInput } from "./CategoryUpdateManyWithoutSellersInput";
import { FulfillmentSpecificationUpdateManyWithoutSellersInput } from "./FulfillmentSpecificationUpdateManyWithoutSellersInput";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { LocationUpdateManyWithoutSellersInput } from "./LocationUpdateManyWithoutSellersInput";
import { MenuItemUpdateManyWithoutSellersInput } from "./MenuItemUpdateManyWithoutSellersInput";
import { MenuUpdateManyWithoutSellersInput } from "./MenuUpdateManyWithoutSellersInput";
import { ModifierGroupUpdateManyWithoutSellersInput } from "./ModifierGroupUpdateManyWithoutSellersInput";
import { PaymentTermWhereUniqueInput } from "../../paymentTerm/base/PaymentTermWhereUniqueInput";
import { PromotionUpdateManyWithoutSellersInput } from "./PromotionUpdateManyWithoutSellersInput";
import { RatingUpdateManyWithoutSellersInput } from "./RatingUpdateManyWithoutSellersInput";
import { SearchWhereUniqueInput } from "../../search/base/SearchWhereUniqueInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class SellerUpdateInput {
  @ApiProperty({
    required: false,
    type: () => BazaarUpdateManyWithoutSellersInput,
  })
  @ValidateNested()
  @Type(() => BazaarUpdateManyWithoutSellersInput)
  @IsOptional()
  @Field(() => BazaarUpdateManyWithoutSellersInput, {
    nullable: true,
  })
  bazaar?: BazaarUpdateManyWithoutSellersInput;

  @ApiProperty({
    required: false,
    type: () => CategoryUpdateManyWithoutSellersInput,
  })
  @ValidateNested()
  @Type(() => CategoryUpdateManyWithoutSellersInput)
  @IsOptional()
  @Field(() => CategoryUpdateManyWithoutSellersInput, {
    nullable: true,
  })
  categories?: CategoryUpdateManyWithoutSellersInput;

  @ApiProperty({
    required: false,
    type: () => FulfillmentSpecificationUpdateManyWithoutSellersInput,
  })
  @ValidateNested()
  @Type(() => FulfillmentSpecificationUpdateManyWithoutSellersInput)
  @IsOptional()
  @Field(() => FulfillmentSpecificationUpdateManyWithoutSellersInput, {
    nullable: true,
  })
  fulfillmentSpecifications?: FulfillmentSpecificationUpdateManyWithoutSellersInput;

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
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isRateable?: boolean;

  @ApiProperty({
    required: false,
    type: () => LocationUpdateManyWithoutSellersInput,
  })
  @ValidateNested()
  @Type(() => LocationUpdateManyWithoutSellersInput)
  @IsOptional()
  @Field(() => LocationUpdateManyWithoutSellersInput, {
    nullable: true,
  })
  locations?: LocationUpdateManyWithoutSellersInput;

  @ApiProperty({
    required: false,
    type: () => MenuItemUpdateManyWithoutSellersInput,
  })
  @ValidateNested()
  @Type(() => MenuItemUpdateManyWithoutSellersInput)
  @IsOptional()
  @Field(() => MenuItemUpdateManyWithoutSellersInput, {
    nullable: true,
  })
  menuItems?: MenuItemUpdateManyWithoutSellersInput;

  @ApiProperty({
    required: false,
    type: () => MenuUpdateManyWithoutSellersInput,
  })
  @ValidateNested()
  @Type(() => MenuUpdateManyWithoutSellersInput)
  @IsOptional()
  @Field(() => MenuUpdateManyWithoutSellersInput, {
    nullable: true,
  })
  menus?: MenuUpdateManyWithoutSellersInput;

  @ApiProperty({
    required: false,
    type: () => ModifierGroupUpdateManyWithoutSellersInput,
  })
  @ValidateNested()
  @Type(() => ModifierGroupUpdateManyWithoutSellersInput)
  @IsOptional()
  @Field(() => ModifierGroupUpdateManyWithoutSellersInput, {
    nullable: true,
  })
  modifierGroups?: ModifierGroupUpdateManyWithoutSellersInput;

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
    type: () => PromotionUpdateManyWithoutSellersInput,
  })
  @ValidateNested()
  @Type(() => PromotionUpdateManyWithoutSellersInput)
  @IsOptional()
  @Field(() => PromotionUpdateManyWithoutSellersInput, {
    nullable: true,
  })
  promotions?: PromotionUpdateManyWithoutSellersInput;

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
    type: () => RatingUpdateManyWithoutSellersInput,
  })
  @ValidateNested()
  @Type(() => RatingUpdateManyWithoutSellersInput)
  @IsOptional()
  @Field(() => RatingUpdateManyWithoutSellersInput, {
    nullable: true,
  })
  ratings?: RatingUpdateManyWithoutSellersInput;

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
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  users?: UserWhereUniqueInput;
}

export { SellerUpdateInput as SellerUpdateInput };
