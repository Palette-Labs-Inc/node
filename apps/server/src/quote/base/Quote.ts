
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsString,
  ValidateNested,
  IsOptional,
  IsInt,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
import { MenuItem } from "../../menuItem/base/MenuItem";

@ObjectType()
class Quote {
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
  currencyCode!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: () => [MenuItem],
  })
  @ValidateNested()
  @Type(() => MenuItem)
  @IsOptional()
  menuItems?: Array<MenuItem>;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  timeToLive!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  totalPrice!: number;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Quote as Quote };
