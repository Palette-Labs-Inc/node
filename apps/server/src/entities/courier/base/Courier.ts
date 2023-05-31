
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  ValidateNested,
  IsOptional,
  IsString,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
import { FulfillmentSpecification } from "../../fulfillmentSpecification/base/FulfillmentSpecification";
import { Individual } from "../../individual/base/Individual";
import { Organization } from "../../organization/base/Organization";
import { Rating } from "../../rating/base/Rating";
import { User } from "../../user/base/User";

@ObjectType()
class Courier {
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
  inidividual?: Individual | null;

  @ApiProperty({
    required: false,
    type: () => [Organization],
  })
  @ValidateNested()
  @Type(() => Organization)
  @IsOptional()
  organization?: Array<Organization>;

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
    type: () => [Rating],
  })
  @ValidateNested()
  @Type(() => Rating)
  @IsOptional()
  ratings?: Array<Rating>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  users?: User;
}

export { Courier as Courier };
