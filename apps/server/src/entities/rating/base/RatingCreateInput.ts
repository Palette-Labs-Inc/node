
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
import { ImageCreateNestedManyWithoutRatingsInput } from "./ImageCreateNestedManyWithoutRatingsInput";
import { MediaFileCreateNestedManyWithoutRatingsInput } from "./MediaFileCreateNestedManyWithoutRatingsInput";
import { SellerWhereUniqueInput } from "../../seller/base/SellerWhereUniqueInput";

@InputType()
class RatingCreateInput {
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
    required: true,
    enum: EnumRatingEntity,
  })
  @IsEnum(EnumRatingEntity)
  @Field(() => EnumRatingEntity)
  entity!: "Item" | "Order" | "Fulfillment" | "Seller" | "Courier" | "Support";

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  entityId!: string;

  @ApiProperty({
    required: false,
    type: () => ImageCreateNestedManyWithoutRatingsInput,
  })
  @ValidateNested()
  @Type(() => ImageCreateNestedManyWithoutRatingsInput)
  @IsOptional()
  @Field(() => ImageCreateNestedManyWithoutRatingsInput, {
    nullable: true,
  })
  images?: ImageCreateNestedManyWithoutRatingsInput;

  @ApiProperty({
    required: false,
    type: () => MediaFileCreateNestedManyWithoutRatingsInput,
  })
  @ValidateNested()
  @Type(() => MediaFileCreateNestedManyWithoutRatingsInput)
  @IsOptional()
  @Field(() => MediaFileCreateNestedManyWithoutRatingsInput, {
    nullable: true,
  })
  media?: MediaFileCreateNestedManyWithoutRatingsInput;

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
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  value!: number;
}

export { RatingCreateInput as RatingCreateInput };
