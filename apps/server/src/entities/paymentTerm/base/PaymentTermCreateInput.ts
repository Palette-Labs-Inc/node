
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
class PaymentTermCreateInput {
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
    required: true,
    enum: EnumPaymentTermCollectedBy,
  })
  @IsEnum(EnumPaymentTermCollectedBy)
  @Field(() => EnumPaymentTermCollectedBy)
  collectedBy!: "SSN" | "BSN" | "CSN";

  @ApiProperty({
    required: true,
    enum: EnumPaymentTermLifecycleProcessing,
  })
  @IsEnum(EnumPaymentTermLifecycleProcessing)
  @Field(() => EnumPaymentTermLifecycleProcessing)
  lifecycleProcessing!:
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
    required: true,
    enum: EnumPaymentTermStatus,
  })
  @IsEnum(EnumPaymentTermStatus)
  @Field(() => EnumPaymentTermStatus)
  status!: "Processed" | "Collectable";
}

export { PaymentTermCreateInput as PaymentTermCreateInput };
