
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, ValidateNested, IsOptional, IsInt } from "class-validator";
import { ConditionCreateNestedManyWithoutLocationsInput } from "./ConditionCreateNestedManyWithoutLocationsInput";
import { Type } from "class-transformer";
import { NodeWhereUniqueInput } from "../../node/base/NodeWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { PromotionCreateNestedManyWithoutLocationsInput } from "./PromotionCreateNestedManyWithoutLocationsInput";
import { SellerWhereUniqueInput } from "../../seller/base/SellerWhereUniqueInput";
import { TrackingWhereUniqueInput } from "../../tracking/base/TrackingWhereUniqueInput";
import { WaypointWhereUniqueInput } from "../../waypoint/base/WaypointWhereUniqueInput";

@InputType()
class LocationCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  address!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  areaCode!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  city!: string;

  @ApiProperty({
    required: false,
    type: () => ConditionCreateNestedManyWithoutLocationsInput,
  })
  @ValidateNested()
  @Type(() => ConditionCreateNestedManyWithoutLocationsInput)
  @IsOptional()
  @Field(() => ConditionCreateNestedManyWithoutLocationsInput, {
    nullable: true,
  })
  conditions?: ConditionCreateNestedManyWithoutLocationsInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  coordinate!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  country!: string;

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
    type: () => PromotionCreateNestedManyWithoutLocationsInput,
  })
  @ValidateNested()
  @Type(() => PromotionCreateNestedManyWithoutLocationsInput)
  @IsOptional()
  @Field(() => PromotionCreateNestedManyWithoutLocationsInput, {
    nullable: true,
  })
  promotion?: PromotionCreateNestedManyWithoutLocationsInput;

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
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  state!: string;

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

export { LocationCreateInput as LocationCreateInput };
