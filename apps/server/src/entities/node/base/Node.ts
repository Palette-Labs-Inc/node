
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsString,
  IsInt,
  IsEnum,
  ValidateNested,
  IsOptional,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumNodeIndustryCode } from "./EnumNodeIndustryCode";
import { Location } from "../../location/base/Location";
import { EnumNodeOperatorType } from "./EnumNodeOperatorType";

@ObjectType()
class Node {
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
  hostUrl!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: true,
    enum: EnumNodeIndustryCode,
  })
  @IsEnum(EnumNodeIndustryCode)
  @Field(() => EnumNodeIndustryCode, {
    nullable: true,
  })
  industryCode?: "LastMileDelivery" | "Rideshare";

  @ApiProperty({
    required: true,
    type: () => [Location],
  })
  @ValidateNested()
  @Type(() => Location)
  @IsOptional()
  location?: Array<Location>;

  @ApiProperty({
    required: true,
    enum: EnumNodeOperatorType,
  })
  @IsEnum(EnumNodeOperatorType)
  @Field(() => EnumNodeOperatorType, {
    nullable: true,
  })
  operatorType?: "Uno" | "Bsn" | "Ssn" | "Csn";

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Node as Node };
