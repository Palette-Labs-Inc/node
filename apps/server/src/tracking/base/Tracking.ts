
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  ValidateNested,
  IsOptional,
  IsString,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { FulfillmentSpecification } from "../../fulfillmentSpecification/base/FulfillmentSpecification";
import { Location } from "../../location/base/Location";
import { EnumTrackingStatus } from "./EnumTrackingStatus";

@ObjectType()
class Tracking {
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
  fulfillmentSpecifications?: FulfillmentSpecification | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => Location,
  })
  @ValidateNested()
  @Type(() => Location)
  @IsOptional()
  location?: Location | null;

  @ApiProperty({
    required: true,
    enum: EnumTrackingStatus,
  })
  @IsEnum(EnumTrackingStatus)
  @Field(() => EnumTrackingStatus, {
    nullable: true,
  })
  status?: "Active" | "Inactive";

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  trackingUrl!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Tracking as Tracking };
