
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
import { OrderCreateNestedManyWithoutFulfillmentSpecificationsInput } from "./OrderCreateNestedManyWithoutFulfillmentSpecificationsInput";
import { SearchCreateNestedManyWithoutFulfillmentSpecificationsInput } from "./SearchCreateNestedManyWithoutFulfillmentSpecificationsInput";
import { SellerWhereUniqueInput } from "../../seller/base/SellerWhereUniqueInput";
import { EnumFulfillmentSpecificationStatus } from "./EnumFulfillmentSpecificationStatus";
import { TrackingWhereUniqueInput } from "../../tracking/base/TrackingWhereUniqueInput";
import { VehicleWhereUniqueInput } from "../../vehicle/base/VehicleWhereUniqueInput";
import { WaypointCreateNestedManyWithoutFulfillmentSpecificationsInput } from "./WaypointCreateNestedManyWithoutFulfillmentSpecificationsInput";

@InputType()
class FulfillmentSpecificationCreateInput {
  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  buyer!: UserWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ContactWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ContactWhereUniqueInput)
  @Field(() => ContactWhereUniqueInput)
  contact!: ContactWhereUniqueInput;

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
    required: true,
    enum: EnumFulfillmentSpecificationFulfillmentModes,
  })
  @IsEnum(EnumFulfillmentSpecificationFulfillmentModes)
  @Field(() => EnumFulfillmentSpecificationFulfillmentModes)
  fulfillmentModes!: "PickUp" | "Delivery" | "DineIn" | "TakeOut" | "DriveThru";

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isRateable!: boolean;

  @ApiProperty({
    required: false,
    type: () => OrderCreateNestedManyWithoutFulfillmentSpecificationsInput,
  })
  @ValidateNested()
  @Type(() => OrderCreateNestedManyWithoutFulfillmentSpecificationsInput)
  @IsOptional()
  @Field(() => OrderCreateNestedManyWithoutFulfillmentSpecificationsInput, {
    nullable: true,
  })
  orders?: OrderCreateNestedManyWithoutFulfillmentSpecificationsInput;

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
    type: () => SearchCreateNestedManyWithoutFulfillmentSpecificationsInput,
  })
  @ValidateNested()
  @Type(() => SearchCreateNestedManyWithoutFulfillmentSpecificationsInput)
  @IsOptional()
  @Field(() => SearchCreateNestedManyWithoutFulfillmentSpecificationsInput, {
    nullable: true,
  })
  searches?: SearchCreateNestedManyWithoutFulfillmentSpecificationsInput;

  @ApiProperty({
    required: true,
    type: () => SellerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SellerWhereUniqueInput)
  @Field(() => SellerWhereUniqueInput)
  seller!: SellerWhereUniqueInput;

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
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  updatedBy!: string;

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
    type: () => WaypointCreateNestedManyWithoutFulfillmentSpecificationsInput,
  })
  @ValidateNested()
  @Type(() => WaypointCreateNestedManyWithoutFulfillmentSpecificationsInput)
  @IsOptional()
  @Field(() => WaypointCreateNestedManyWithoutFulfillmentSpecificationsInput, {
    nullable: true,
  })
  waypoints?: WaypointCreateNestedManyWithoutFulfillmentSpecificationsInput;
}

export { FulfillmentSpecificationCreateInput as FulfillmentSpecificationCreateInput };
