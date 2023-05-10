
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { ImageListRelationFilter } from "../../image/base/ImageListRelationFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { MediaFileListRelationFilter } from "../../mediaFile/base/MediaFileListRelationFilter";
import { MenuItemListRelationFilter } from "./MenuItemListRelationFilter";
import { OrderListRelationFilter } from "../../order/base/OrderListRelationFilter";
import { OrganizationListRelationFilter } from "../../organization/base/OrganizationListRelationFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { QuoteListRelationFilter } from "../../quote/base/QuoteListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { SearchListRelationFilter } from "../../search/base/SearchListRelationFilter";
import { SellerWhereUniqueInput } from "../../seller/base/SellerWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";

@InputType()
class MenuItemWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  currencyCode?: StringFilter;

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
    type: () => ImageListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ImageListRelationFilter)
  @IsOptional()
  @Field(() => ImageListRelationFilter, {
    nullable: true,
  })
  images?: ImageListRelationFilter;

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
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  locationIDs?: JsonFilter;

  @ApiProperty({
    required: false,
    type: () => MediaFileListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MediaFileListRelationFilter)
  @IsOptional()
  @Field(() => MediaFileListRelationFilter, {
    nullable: true,
  })
  mediaFile?: MediaFileListRelationFilter;

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
  menuItemsSelectedModifiers?: MenuItemListRelationFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  modifierGroupIDs?: JsonFilter;

  @ApiProperty({
    required: false,
    type: () => OrderListRelationFilter,
  })
  @ValidateNested()
  @Type(() => OrderListRelationFilter)
  @IsOptional()
  @Field(() => OrderListRelationFilter, {
    nullable: true,
  })
  orders?: OrderListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => OrganizationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => OrganizationListRelationFilter)
  @IsOptional()
  @Field(() => OrganizationListRelationFilter, {
    nullable: true,
  })
  organization?: OrganizationListRelationFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  paymentModes?: JsonFilter;

  @ApiProperty({
    required: false,
    type: FloatFilter,
  })
  @Type(() => FloatFilter)
  @IsOptional()
  @Field(() => FloatFilter, {
    nullable: true,
  })
  price?: FloatFilter;

  @ApiProperty({
    required: false,
    type: () => QuoteListRelationFilter,
  })
  @ValidateNested()
  @Type(() => QuoteListRelationFilter)
  @IsOptional()
  @Field(() => QuoteListRelationFilter, {
    nullable: true,
  })
  quotes?: QuoteListRelationFilter;

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
    type: () => SearchListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SearchListRelationFilter)
  @IsOptional()
  @Field(() => SearchListRelationFilter, {
    nullable: true,
  })
  searches?: SearchListRelationFilter;

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
  selectedModifiers?: MenuItemListRelationFilter;

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
  sellers?: SellerWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  timeToLive?: DateTimeFilter;
}

export { MenuItemWhereInput as MenuItemWhereInput };
