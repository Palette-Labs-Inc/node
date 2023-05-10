
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BazaarListRelationFilter } from "../../bazaar/base/BazaarListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { CategoryListRelationFilter } from "../../category/base/CategoryListRelationFilter";
import { FulfillmentSpecificationListRelationFilter } from "../../fulfillmentSpecification/base/FulfillmentSpecificationListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { LocationListRelationFilter } from "../../location/base/LocationListRelationFilter";
import { MenuItemListRelationFilter } from "../../menuItem/base/MenuItemListRelationFilter";
import { MenuListRelationFilter } from "../../menu/base/MenuListRelationFilter";
import { ModifierGroupListRelationFilter } from "../../modifierGroup/base/ModifierGroupListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PaymentTermWhereUniqueInput } from "../../paymentTerm/base/PaymentTermWhereUniqueInput";
import { PromotionListRelationFilter } from "../../promotion/base/PromotionListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { RatingListRelationFilter } from "../../rating/base/RatingListRelationFilter";
import { SearchWhereUniqueInput } from "../../search/base/SearchWhereUniqueInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class SellerWhereInput {
  @ApiProperty({
    required: false,
    type: () => BazaarListRelationFilter,
  })
  @ValidateNested()
  @Type(() => BazaarListRelationFilter)
  @IsOptional()
  @Field(() => BazaarListRelationFilter, {
    nullable: true,
  })
  bazaar?: BazaarListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => CategoryListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CategoryListRelationFilter)
  @IsOptional()
  @Field(() => CategoryListRelationFilter, {
    nullable: true,
  })
  categories?: CategoryListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => FulfillmentSpecificationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => FulfillmentSpecificationListRelationFilter)
  @IsOptional()
  @Field(() => FulfillmentSpecificationListRelationFilter, {
    nullable: true,
  })
  fulfillmentSpecifications?: FulfillmentSpecificationListRelationFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  holidays?: JsonFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: BooleanFilter,
  })
  @Type(() => BooleanFilter)
  @IsOptional()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  isRateable?: BooleanFilter;

  @ApiProperty({
    required: false,
    type: () => LocationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => LocationListRelationFilter)
  @IsOptional()
  @Field(() => LocationListRelationFilter, {
    nullable: true,
  })
  locations?: LocationListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => MenuItemListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MenuItemListRelationFilter)
  @IsOptional()
  @Field(() => MenuItemListRelationFilter, {
    nullable: true,
  })
  menuItems?: MenuItemListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => MenuListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MenuListRelationFilter)
  @IsOptional()
  @Field(() => MenuListRelationFilter, {
    nullable: true,
  })
  menus?: MenuListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ModifierGroupListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ModifierGroupListRelationFilter)
  @IsOptional()
  @Field(() => ModifierGroupListRelationFilter, {
    nullable: true,
  })
  modifierGroups?: ModifierGroupListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  password?: StringNullableFilter;

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
  paymentTerm?: PaymentTermWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => PromotionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PromotionListRelationFilter)
  @IsOptional()
  @Field(() => PromotionListRelationFilter, {
    nullable: true,
  })
  promotions?: PromotionListRelationFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  rating?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: () => RatingListRelationFilter,
  })
  @ValidateNested()
  @Type(() => RatingListRelationFilter)
  @IsOptional()
  @Field(() => RatingListRelationFilter, {
    nullable: true,
  })
  ratings?: RatingListRelationFilter;

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
  search?: SearchWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  sellerClassificationId?: StringNullableFilter;

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

export { SellerWhereInput as SellerWhereInput };
