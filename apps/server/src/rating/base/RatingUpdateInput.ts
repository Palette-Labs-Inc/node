
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CourierWhereUniqueInput } from "../../courier/base/CourierWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsEnum,
  IsString,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumRatingEntity } from "./EnumRatingEntity";
import { ImageUpdateManyWithoutRatingsInput } from "./ImageUpdateManyWithoutRatingsInput";
import { MediaFileUpdateManyWithoutRatingsInput } from "./MediaFileUpdateManyWithoutRatingsInput";
import { SellerWhereUniqueInput } from "../../seller/base/SellerWhereUniqueInput";

@InputType()
class RatingUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CourierWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CourierWhereUniqueInput)
  @IsOptional()
  @Field(() => CourierWhereUniqueInput, {
    nullable: true,
  })
  courier?: CourierWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumRatingEntity,
  })
  @IsEnum(EnumRatingEntity)
  @IsOptional()
  @Field(() => EnumRatingEntity, {
    nullable: true,
  })
  entity?: "Item" | "Order" | "Fulfillment" | "Seller" | "Courier" | "Support";

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  entityId?: string;

  @ApiProperty({
    required: false,
    type: () => ImageUpdateManyWithoutRatingsInput,
  })
  @ValidateNested()
  @Type(() => ImageUpdateManyWithoutRatingsInput)
  @IsOptional()
  @Field(() => ImageUpdateManyWithoutRatingsInput, {
    nullable: true,
  })
  images?: ImageUpdateManyWithoutRatingsInput;

  @ApiProperty({
    required: false,
    type: () => MediaFileUpdateManyWithoutRatingsInput,
  })
  @ValidateNested()
  @Type(() => MediaFileUpdateManyWithoutRatingsInput)
  @IsOptional()
  @Field(() => MediaFileUpdateManyWithoutRatingsInput, {
    nullable: true,
  })
  media?: MediaFileUpdateManyWithoutRatingsInput;

  @ApiProperty({
    required: false,
    type: () => SellerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SellerWhereUniqueInput)
  @IsOptional()
  @Field(() => SellerWhereUniqueInput, {
    nullable: true,
  })
  seller?: SellerWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  value?: number;
}

export { RatingUpdateInput as RatingUpdateInput };
