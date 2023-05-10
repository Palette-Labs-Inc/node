
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CourierWhereUniqueInput } from "../../courier/base/CourierWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumRatingEntity } from "./EnumRatingEntity";
import { StringFilter } from "../../util/StringFilter";
import { ImageListRelationFilter } from "../../image/base/ImageListRelationFilter";
import { MediaFileListRelationFilter } from "../../mediaFile/base/MediaFileListRelationFilter";
import { SellerWhereUniqueInput } from "../../seller/base/SellerWhereUniqueInput";
import { FloatFilter } from "../../util/FloatFilter";

@InputType()
class RatingWhereInput {
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
  courier?: CourierWhereUniqueInput;

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
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  entityId?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => ImageListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ImageListRelationFilter)
  @IsOptional()
  @Field(() => ImageListRelationFilter, {
    nullable: true,
  })
  images?: ImageListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => MediaFileListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MediaFileListRelationFilter)
  @IsOptional()
  @Field(() => MediaFileListRelationFilter, {
    nullable: true,
  })
  media?: MediaFileListRelationFilter;

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
  seller?: SellerWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: FloatFilter,
  })
  @Type(() => FloatFilter)
  @IsOptional()
  @Field(() => FloatFilter, {
    nullable: true,
  })
  value?: FloatFilter;
}

export { RatingWhereInput as RatingWhereInput };
