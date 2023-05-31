
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { NodeWhereUniqueInput } from "../../node/base/NodeWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { PromotionListRelationFilter } from "../../promotion/base/PromotionListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SellerWhereUniqueInput } from "../../seller/base/SellerWhereUniqueInput";
import { TrackingWhereUniqueInput } from "../../tracking/base/TrackingWhereUniqueInput";

@InputType()
class LocationWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  address?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  areaCode?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  city?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  coordinate?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  country?: StringFilter;

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
    type: () => NodeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => NodeWhereUniqueInput)
  @IsOptional()
  @Field(() => NodeWhereUniqueInput, {
    nullable: true,
  })
  node?: NodeWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => OrganizationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationWhereUniqueInput)
  @IsOptional()
  @Field(() => OrganizationWhereUniqueInput, {
    nullable: true,
  })
  organizations?: OrganizationWhereUniqueInput;

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
  promotion?: PromotionListRelationFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  radius?: IntNullableFilter;

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
  seller?: SellerWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  state?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => TrackingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TrackingWhereUniqueInput)
  @IsOptional()
  @Field(() => TrackingWhereUniqueInput, {
    nullable: true,
  })
  trackings?: TrackingWhereUniqueInput;
}

export { LocationWhereInput as LocationWhereInput };
