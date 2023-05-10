
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString, ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { FulfillmentSpecification } from "../../fulfillmentSpecification/base/FulfillmentSpecification";
import { Individual } from "../../individual/base/Individual";
import { Organization } from "../../organization/base/Organization";
import { Waypoint } from "../../waypoint/base/Waypoint";

@ObjectType()
class Contact {
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
  email!: string;

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
    type: () => [Individual],
  })
  @ValidateNested()
  @Type(() => Individual)
  @IsOptional()
  individuals?: Array<Individual>;

  @ApiProperty({
    required: false,
    type: () => [Organization],
  })
  @ValidateNested()
  @Type(() => Organization)
  @IsOptional()
  organizations?: Array<Organization>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  phone!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [Waypoint],
  })
  @ValidateNested()
  @Type(() => Waypoint)
  @IsOptional()
  waypoints?: Array<Waypoint>;
}

export { Contact as Contact };
