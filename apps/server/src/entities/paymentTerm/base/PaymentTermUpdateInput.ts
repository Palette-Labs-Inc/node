
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BazaarWhereUniqueInput } from "../../bazaar/base/BazaarWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { EnumPaymentTermCollectedBy } from "./EnumPaymentTermCollectedBy";
import { EnumPaymentTermLifecycleProcessing } from "./EnumPaymentTermLifecycleProcessing";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { PaymentSourceWhereUniqueInput } from "../../paymentSource/base/PaymentSourceWhereUniqueInput";
import { SearchWhereUniqueInput } from "../../search/base/SearchWhereUniqueInput";
import { SellerWhereUniqueInput } from "../../seller/base/SellerWhereUniqueInput";
import { EnumPaymentTermStatus } from "./EnumPaymentTermStatus";

@InputType()
class PaymentTermUpdateInput {
  @ApiProperty({
    required: false,
    type: () => BazaarWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BazaarWhereUniqueInput)
  @IsOptional()
  @Field(() => BazaarWhereUniqueInput, {
    nullable: true,
  })
  bazaar?: BazaarWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumPaymentTermCollectedBy,
  })
  @IsEnum(EnumPaymentTermCollectedBy)
  @IsOptional()
  @Field(() => EnumPaymentTermCollectedBy, {
    nullable: true,
  })
  collectedBy?: "SSN" | "BSN" | "CSN";

  @ApiProperty({
    required: false,
    enum: EnumPaymentTermLifecycleProcessing,
  })
  @IsEnum(EnumPaymentTermLifecycleProcessing)
  @IsOptional()
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
    type: () => OrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderWhereUniqueInput)
  @IsOptional()
  @Field(() => OrderWhereUniqueInput, {
    nullable: true,
  })
  order?: OrderWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  paymentAmount?: number | null;

  @ApiProperty({
    required: false,
    type: () => PaymentSourceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PaymentSourceWhereUniqueInput)
  @IsOptional()
  @Field(() => PaymentSourceWhereUniqueInput, {
    nullable: true,
  })
  paymentSource?: PaymentSourceWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => SearchWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SearchWhereUniqueInput)
  @IsOptional()
  @Field(() => SearchWhereUniqueInput, {
    nullable: true,
  })
  search?: SearchWhereUniqueInput | null;

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
    enum: EnumPaymentTermStatus,
  })
  @IsEnum(EnumPaymentTermStatus)
  @IsOptional()
  @Field(() => EnumPaymentTermStatus, {
    nullable: true,
  })
  status?: "Processed" | "Collectable";
}

export { PaymentTermUpdateInput as PaymentTermUpdateInput };
