
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "../../user/base/User";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsEnum,
  IsString,
  IsBoolean,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
import { Contact } from "../../contact/base/Contact";
import { Courier } from "../../courier/base/Courier";
import { EnumFulfillmentSpecificationFulfillmentModes } from "./EnumFulfillmentSpecificationFulfillmentModes";
import { Order } from "../../order/base/Order";
import { Search } from "../../search/base/Search";
import { Seller } from "../../seller/base/Seller";
import { EnumFulfillmentSpecificationStatus } from "./EnumFulfillmentSpecificationStatus";
import { Tracking } from "../../tracking/base/Tracking";
import { Vehicle } from "../../vehicle/base/Vehicle";
import { Waypoint } from "../../waypoint/base/Waypoint";

@ObjectType()
class FulfillmentSpecification {
  @ApiProperty({
    required: true,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  buyer?: User;

  @ApiProperty({
    required: true,
    type: () => Contact,
  })
  @ValidateNested()
  @Type(() => Contact)
  contact?: Contact;

  @ApiProperty({
    required: false,
    type: () => Courier,
  })
  @ValidateNested()
  @Type(() => Courier)
  @IsOptional()
  courier?: Courier | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    enum: EnumFulfillmentSpecificationFulfillmentModes,
  })
  @IsEnum(EnumFulfillmentSpecificationFulfillmentModes)
  @Field(() => EnumFulfillmentSpecificationFulfillmentModes, {
    nullable: true,
  })
  fulfillmentModes?: "PickUp" | "Delivery" | "DineIn" | "TakeOut" | "DriveThru";

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isRateable!: boolean;

  @ApiProperty({
    required: false,
    type: () => [Order],
  })
  @ValidateNested()
  @Type(() => Order)
  @IsOptional()
  orders?: Array<Order>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  rating!: number | null;

  @ApiProperty({
    required: false,
    type: () => [Search],
  })
  @ValidateNested()
  @Type(() => Search)
  @IsOptional()
  searches?: Array<Search>;

  @ApiProperty({
    required: true,
    type: () => Seller,
  })
  @ValidateNested()
  @Type(() => Seller)
  seller?: Seller;

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
    type: () => Tracking,
  })
  @ValidateNested()
  @Type(() => Tracking)
  @IsOptional()
  tracking?: Tracking | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  updatedBy!: string;

  @ApiProperty({
    required: false,
    type: () => Vehicle,
  })
  @ValidateNested()
  @Type(() => Vehicle)
  @IsOptional()
  vehicle?: Vehicle | null;

  @ApiProperty({
    required: false,
    type: () => [Waypoint],
  })
  @ValidateNested()
  @Type(() => Waypoint)
  @IsOptional()
  waypoints?: Array<Waypoint>;
}

export { FulfillmentSpecification as FulfillmentSpecification };
