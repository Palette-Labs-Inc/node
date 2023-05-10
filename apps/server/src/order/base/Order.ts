
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Billing } from "../../billing/base/Billing";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Cancellation } from "../../cancellation/base/Cancellation";
import { FulfillmentSpecification } from "../../fulfillmentSpecification/base/FulfillmentSpecification";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { PaymentTerm } from "../../paymentTerm/base/PaymentTerm";
import { Promotion } from "../../promotion/base/Promotion";
import { EnumOrderStatus } from "./EnumOrderStatus";

@ObjectType()
class Order {
  @ApiProperty({
    required: true,
    type: () => Billing,
  })
  @ValidateNested()
  @Type(() => Billing)
  billing?: Billing;

  @ApiProperty({
    required: false,
    type: () => Cancellation,
  })
  @ValidateNested()
  @Type(() => Cancellation)
  @IsOptional()
  cancellation?: Cancellation | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: () => FulfillmentSpecification,
  })
  @ValidateNested()
  @Type(() => FulfillmentSpecification)
  fulfillmentSpecification?: FulfillmentSpecification;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: () => [MenuItem],
  })
  @ValidateNested()
  @Type(() => MenuItem)
  @IsOptional()
  menuItems?: Array<MenuItem>;

  @ApiProperty({
    required: false,
    type: () => PaymentTerm,
  })
  @ValidateNested()
  @Type(() => PaymentTerm)
  @IsOptional()
  paymentTerm?: PaymentTerm | null;

  @ApiProperty({
    required: false,
    type: () => [Promotion],
  })
  @ValidateNested()
  @Type(() => Promotion)
  @IsOptional()
  promotion?: Array<Promotion>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  referenceOrderIds!: string | null;

  @ApiProperty({
    required: true,
    enum: EnumOrderStatus,
  })
  @IsEnum(EnumOrderStatus)
  @Field(() => EnumOrderStatus, {
    nullable: true,
  })
  status?: "Active" | "Complete" | "Cancelled";

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Order as Order };
