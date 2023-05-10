
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Courier } from "../../courier/base/Courier";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsEnum,
  IsString,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumRatingEntity } from "./EnumRatingEntity";
import { Image } from "../../image/base/Image";
import { MediaFile } from "../../mediaFile/base/MediaFile";
import { Seller } from "../../seller/base/Seller";

@ObjectType()
class Rating {
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
    required: true,
    enum: EnumRatingEntity,
  })
  @IsEnum(EnumRatingEntity)
  @Field(() => EnumRatingEntity, {
    nullable: true,
  })
  entity?: "Item" | "Order" | "Fulfillment" | "Seller" | "Courier" | "Support";

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  entityId!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [Image],
  })
  @ValidateNested()
  @Type(() => Image)
  @IsOptional()
  images?: Array<Image>;

  @ApiProperty({
    required: false,
    type: () => [MediaFile],
  })
  @ValidateNested()
  @Type(() => MediaFile)
  @IsOptional()
  media?: Array<MediaFile>;

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
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  value!: number;
}

export { Rating as Rating };
