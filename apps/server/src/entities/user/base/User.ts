
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Courier } from "../../courier/base/Courier";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { FulfillmentSpecification } from "../../fulfillmentSpecification/base/FulfillmentSpecification";
import { Individual } from "../../individual/base/Individual";
import { PaymentSource } from "../../paymentSource/base/PaymentSource";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { Seller } from "../../seller/base/Seller";

@ObjectType()
class User {
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
    required: false,
    type: () => [FulfillmentSpecification],
  })
  @ValidateNested()
  @Type(() => FulfillmentSpecification)
  @IsOptional()
  fulfillmentSpecifications?: Array<FulfillmentSpecification>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => Individual,
  })
  @ValidateNested()
  @Type(() => Individual)
  @IsOptional()
  individual?: Individual | null;

  @ApiProperty({
    required: false,
    type: () => [PaymentSource],
  })
  @ValidateNested()
  @Type(() => PaymentSource)
  @IsOptional()
  paymentSources?: Array<PaymentSource>;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  roles!: JsonValue;

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
  username!: string;
}

export { User as User };
