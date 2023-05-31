
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested, IsInt } from "class-validator";
import { ConditionUpdateManyWithoutLocationsInput } from "./ConditionUpdateManyWithoutLocationsInput";
import { Type } from "class-transformer";
import { NodeWhereUniqueInput } from "../../node/base/NodeWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { PromotionUpdateManyWithoutLocationsInput } from "./PromotionUpdateManyWithoutLocationsInput";
import { SellerWhereUniqueInput } from "../../seller/base/SellerWhereUniqueInput";
import { TrackingWhereUniqueInput } from "../../tracking/base/TrackingWhereUniqueInput";
import { WaypointWhereUniqueInput } from "../../waypoint/base/WaypointWhereUniqueInput";

@InputType()
class LocationUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  areaCode?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  city?: string;

  @ApiProperty({
    required: false,
    type: () => ConditionUpdateManyWithoutLocationsInput,
  })
  @ValidateNested()
  @Type(() => ConditionUpdateManyWithoutLocationsInput)
  @IsOptional()
  @Field(() => ConditionUpdateManyWithoutLocationsInput, {
    nullable: true,
  })
  conditions?: ConditionUpdateManyWithoutLocationsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  coordinate?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  country?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  mapUrl?: string | null;

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
  node?: NodeWhereUniqueInput | null;

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
  organizations?: OrganizationWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => PromotionUpdateManyWithoutLocationsInput,
  })
  @ValidateNested()
  @Type(() => PromotionUpdateManyWithoutLocationsInput)
  @IsOptional()
  @Field(() => PromotionUpdateManyWithoutLocationsInput, {
    nullable: true,
  })
  promotion?: PromotionUpdateManyWithoutLocationsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  radius?: number | null;

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

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  state?: string;

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
  trackings?: TrackingWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => WaypointWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WaypointWhereUniqueInput)
  @IsOptional()
  @Field(() => WaypointWhereUniqueInput, {
    nullable: true,
  })
  waypoints?: WaypointWhereUniqueInput | null;
}

export { LocationUpdateInput as LocationUpdateInput };
