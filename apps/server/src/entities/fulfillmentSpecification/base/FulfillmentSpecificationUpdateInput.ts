
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsEnum,
  IsBoolean,
  IsNumber,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { ContactWhereUniqueInput } from "../../contact/base/ContactWhereUniqueInput";
import { CourierWhereUniqueInput } from "../../courier/base/CourierWhereUniqueInput";
import { EnumFulfillmentSpecificationFulfillmentModes } from "./EnumFulfillmentSpecificationFulfillmentModes";
import { OrderUpdateManyWithoutFulfillmentSpecificationsInput } from "./OrderUpdateManyWithoutFulfillmentSpecificationsInput";
import { SearchUpdateManyWithoutFulfillmentSpecificationsInput } from "./SearchUpdateManyWithoutFulfillmentSpecificationsInput";
import { SellerWhereUniqueInput } from "../../seller/base/SellerWhereUniqueInput";
import { EnumFulfillmentSpecificationStatus } from "./EnumFulfillmentSpecificationStatus";
import { TrackingWhereUniqueInput } from "../../tracking/base/TrackingWhereUniqueInput";
import { VehicleWhereUniqueInput } from "../../vehicle/base/VehicleWhereUniqueInput";
import { WaypointUpdateManyWithoutFulfillmentSpecificationsInput } from "./WaypointUpdateManyWithoutFulfillmentSpecificationsInput";

@InputType()
class FulfillmentSpecificationUpdateInput {
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
  courier?: CourierWhereUniqueInput | null;

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
    type: () => OrderUpdateManyWithoutFulfillmentSpecificationsInput,
  })
  @ValidateNested()
  @Type(() => OrderUpdateManyWithoutFulfillmentSpecificationsInput)
  @IsOptional()
  @Field(() => OrderUpdateManyWithoutFulfillmentSpecificationsInput, {
    nullable: true,
  })
  orders?: OrderUpdateManyWithoutFulfillmentSpecificationsInput;

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
    type: () => SearchUpdateManyWithoutFulfillmentSpecificationsInput,
  })
  @ValidateNested()
  @Type(() => SearchUpdateManyWithoutFulfillmentSpecificationsInput)
  @IsOptional()
  @Field(() => SearchUpdateManyWithoutFulfillmentSpecificationsInput, {
    nullable: true,
  })
  searches?: SearchUpdateManyWithoutFulfillmentSpecificationsInput;

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
    | "CourierArrivedAtPickup"
    | null;

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
  tracking?: TrackingWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  updatedBy?: string;

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
  vehicle?: VehicleWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => WaypointUpdateManyWithoutFulfillmentSpecificationsInput,
  })
  @ValidateNested()
  @Type(() => WaypointUpdateManyWithoutFulfillmentSpecificationsInput)
  @IsOptional()
  @Field(() => WaypointUpdateManyWithoutFulfillmentSpecificationsInput, {
    nullable: true,
  })
  waypoints?: WaypointUpdateManyWithoutFulfillmentSpecificationsInput;
}

export { FulfillmentSpecificationUpdateInput as FulfillmentSpecificationUpdateInput };
