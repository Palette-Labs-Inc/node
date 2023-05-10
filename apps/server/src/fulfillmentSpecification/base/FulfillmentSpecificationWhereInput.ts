
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { ContactWhereUniqueInput } from "../../contact/base/ContactWhereUniqueInput";
import { CourierWhereUniqueInput } from "../../courier/base/CourierWhereUniqueInput";
import { EnumFulfillmentSpecificationFulfillmentModes } from "./EnumFulfillmentSpecificationFulfillmentModes";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { OrderListRelationFilter } from "../../order/base/OrderListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { SearchListRelationFilter } from "../../search/base/SearchListRelationFilter";
import { SellerWhereUniqueInput } from "../../seller/base/SellerWhereUniqueInput";
import { EnumFulfillmentSpecificationStatus } from "./EnumFulfillmentSpecificationStatus";
import { TrackingWhereUniqueInput } from "../../tracking/base/TrackingWhereUniqueInput";
import { VehicleWhereUniqueInput } from "../../vehicle/base/VehicleWhereUniqueInput";
import { WaypointListRelationFilter } from "../../waypoint/base/WaypointListRelationFilter";

@InputType()
class FulfillmentSpecificationWhereInput {
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
  buyer?: UserWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ContactWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ContactWhereUniqueInput)
  @IsOptional()
  @Field(() => ContactWhereUniqueInput, {
    nullable: true,
  })
  contact?: ContactWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => CourierWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CourierWhereUniqueInput)
  @IsOptional()
  @Field(() => CourierWhereUniqueInput, {
    nullable: true,
  })
  courier?: CourierWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumFulfillmentSpecificationFulfillmentModes,
  })
  @IsEnum(EnumFulfillmentSpecificationFulfillmentModes)
  @IsOptional()
  @Field(() => EnumFulfillmentSpecificationFulfillmentModes, {
    nullable: true,
  })
  fulfillmentModes?: "PickUp" | "Delivery" | "DineIn" | "TakeOut" | "DriveThru";

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
    enum: EnumFulfillmentSpecificationStatus,
  })
  @IsEnum(EnumFulfillmentSpecificationStatus)
  @IsOptional()
  @Field(() => EnumFulfillmentSpecificationStatus, {
    nullable: true,
  })
  status?:
    | "NewOrder"
    | "Confirmed"
    | "PickedUp"
    | "Canceled"
    | "Fulfilled"
    | "Prepared"
    | "Rejected"
    | "CourierRequested"
    | "CourierAssigned"
    | "CourierPickedUp"
    | "CourierCompleted"
    | "CourierCanceled"
    | "CourierArrivedAtPickup";

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
  tracking?: TrackingWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  updatedBy?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => VehicleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VehicleWhereUniqueInput)
  @IsOptional()
  @Field(() => VehicleWhereUniqueInput, {
    nullable: true,
  })
  vehicle?: VehicleWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => WaypointListRelationFilter,
  })
  @ValidateNested()
  @Type(() => WaypointListRelationFilter)
  @IsOptional()
  @Field(() => WaypointListRelationFilter, {
    nullable: true,
  })
  waypoints?: WaypointListRelationFilter;
}

export { FulfillmentSpecificationWhereInput as FulfillmentSpecificationWhereInput };
