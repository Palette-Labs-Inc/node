
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  ValidateNested,
  IsOptional,
  IsDate,
  IsInt,
} from "class-validator";
import { Condition } from "../../condition/base/Condition";
import { Type } from "class-transformer";
import { Node } from "../../node/base/Node";
import { Organization } from "../../organization/base/Organization";
import { Promotion } from "../../promotion/base/Promotion";
import { Seller } from "../../seller/base/Seller";
import { Tracking } from "../../tracking/base/Tracking";
import { Waypoint } from "../../waypoint/base/Waypoint";

@ObjectType()
class Location {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  address!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  areaCode!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  city!: string;

  @ApiProperty({
    required: false,
    type: () => [Condition],
  })
  @ValidateNested()
  @Type(() => Condition)
  @IsOptional()
  conditions?: Array<Condition>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  coordinate!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  country!: string;

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
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  mapUrl!: string | null;

  @ApiProperty({
    required: false,
    type: () => Node,
  })
  @ValidateNested()
  @Type(() => Node)
  @IsOptional()
  node?: Node | null;

  @ApiProperty({
    required: false,
    type: () => Organization,
  })
  @ValidateNested()
  @Type(() => Organization)
  @IsOptional()
  organizations?: Organization | null;

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
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  radius!: number | null;

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
    type: String,
  })
  @IsString()
  @Field(() => String)
  state!: string;

  @ApiProperty({
    required: false,
    type: () => Tracking,
  })
  @ValidateNested()
  @Type(() => Tracking)
  @IsOptional()
  trackings?: Tracking | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => Waypoint,
  })
  @ValidateNested()
  @Type(() => Waypoint)
  @IsOptional()
  waypoints?: Waypoint | null;
}

export { Location as Location };
