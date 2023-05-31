
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Bazaar } from "../../bazaar/base/Bazaar";
import {
  ValidateNested,
  IsOptional,
  IsEnum,
  IsDate,
  IsString,
  IsInt,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumPaymentTermCollectedBy } from "./EnumPaymentTermCollectedBy";
import { EnumPaymentTermLifecycleProcessing } from "./EnumPaymentTermLifecycleProcessing";
import { Order } from "../../order/base/Order";
import { PaymentSource } from "../../paymentSource/base/PaymentSource";
import { Search } from "../../search/base/Search";
import { Seller } from "../../seller/base/Seller";
import { EnumPaymentTermStatus } from "./EnumPaymentTermStatus";

@ObjectType()
class PaymentTerm {
  @ApiProperty({
    required: false,
    type: () => Bazaar,
  })
  @ValidateNested()
  @Type(() => Bazaar)
  @IsOptional()
  bazaar?: Bazaar | null;

  @ApiProperty({
    required: true,
    enum: EnumPaymentTermCollectedBy,
  })
  @IsEnum(EnumPaymentTermCollectedBy)
  @Field(() => EnumPaymentTermCollectedBy, {
    nullable: true,
  })
  collectedBy?: "SSN" | "BSN" | "CSN";

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    enum: EnumPaymentTermLifecycleProcessing,
  })
  @IsEnum(EnumPaymentTermLifecycleProcessing)
  @Field(() => EnumPaymentTermLifecycleProcessing, {
    nullable: true,
  })
  lifecycleProcessing?:
    | "PreOrder"
    | "PreFulfillment"
    | "OnFulfillment"
    | "PostFulfillment";

  @ApiProperty({
    required: false,
    type: () => Order,
  })
  @ValidateNested()
  @Type(() => Order)
  @IsOptional()
  order?: Order | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  paymentAmount!: number | null;

  @ApiProperty({
    required: false,
    type: () => PaymentSource,
  })
  @ValidateNested()
  @Type(() => PaymentSource)
  @IsOptional()
  paymentSource?: PaymentSource | null;

  @ApiProperty({
    required: false,
    type: () => Search,
  })
  @ValidateNested()
  @Type(() => Search)
  @IsOptional()
  search?: Search | null;

  @ApiProperty({
    required: false,
    type: () => Seller,
  })
  @ValidateNested()
  @Type(() => Seller)
  @IsOptional()
  seller?: Seller | null;

  @ApiProperty({
    required: true,
    enum: EnumPaymentTermStatus,
  })
  @IsEnum(EnumPaymentTermStatus)
  @Field(() => EnumPaymentTermStatus, {
    nullable: true,
  })
  status?: "Processed" | "Collectable";

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { PaymentTerm as PaymentTerm };
