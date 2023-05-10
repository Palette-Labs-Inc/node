
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Contact } from "../../contact/base/Contact";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { FulfillmentSpecification } from "../../fulfillmentSpecification/base/FulfillmentSpecification";
import { Individual } from "../../individual/base/Individual";
import { Location } from "../../location/base/Location";

@ObjectType()
class Waypoint {
  @ApiProperty({
    required: false,
    type: () => Contact,
  })
  @ValidateNested()
  @Type(() => Contact)
  @IsOptional()
  contact?: Contact | null;

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
    required: true,
    type: () => [Individual],
  })
  @ValidateNested()
  @Type(() => Individual)
  @IsOptional()
  individual?: Array<Individual>;

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
  waypointCode!: string;
}

export { Waypoint as Waypoint };
