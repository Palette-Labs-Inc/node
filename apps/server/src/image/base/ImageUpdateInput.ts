
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { IndividualWhereUniqueInput } from "../../individual/base/IndividualWhereUniqueInput";
import { Type } from "class-transformer";
import { MenuItemWhereUniqueInput } from "../../menuItem/base/MenuItemWhereUniqueInput";
import { RatingWhereUniqueInput } from "../../rating/base/RatingWhereUniqueInput";

@InputType()
class ImageUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  height?: string;

  @ApiProperty({
    required: false,
    type: () => IndividualWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => IndividualWhereUniqueInput)
  @IsOptional()
  @Field(() => IndividualWhereUniqueInput, {
    nullable: true,
  })
  individuals?: IndividualWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => MenuItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MenuItemWhereUniqueInput)
  @IsOptional()
  @Field(() => MenuItemWhereUniqueInput, {
    nullable: true,
  })
  menuItem?: MenuItemWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => RatingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RatingWhereUniqueInput)
  @IsOptional()
  @Field(() => RatingWhereUniqueInput, {
    nullable: true,
  })
  rating?: RatingWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  url?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  width?: string;
}

export { ImageUpdateInput as ImageUpdateInput };
