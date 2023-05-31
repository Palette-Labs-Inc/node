
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { FulfillmentSpecification } from "../../fulfillmentSpecification/base/FulfillmentSpecification";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { PaymentTerm } from "../../paymentTerm/base/PaymentTerm";
import { Promotion } from "../../promotion/base/Promotion";
import { Seller } from "../../seller/base/Seller";

@ObjectType()
class Search {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => FulfillmentSpecification,
  })
  @ValidateNested()
  @Type(() => FulfillmentSpecification)
  @IsOptional()
  fulfillmentSpecification?: FulfillmentSpecification | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => MenuItem,
  })
  @ValidateNested()
  @Type(() => MenuItem)
  @IsOptional()
  menuItems?: MenuItem | null;

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
  promotions?: Array<Promotion>;

  @ApiProperty({
    required: false,
    type: () => [Seller],
  })
  @ValidateNested()
  @Type(() => Seller)
  @IsOptional()
  sellers?: Array<Seller>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Search as Search };
