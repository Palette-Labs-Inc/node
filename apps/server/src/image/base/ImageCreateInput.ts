
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, ValidateNested, IsOptional } from "class-validator";
import { IndividualWhereUniqueInput } from "../../individual/base/IndividualWhereUniqueInput";
import { Type } from "class-transformer";
import { MenuItemWhereUniqueInput } from "../../menuItem/base/MenuItemWhereUniqueInput";
import { RatingWhereUniqueInput } from "../../rating/base/RatingWhereUniqueInput";

@InputType()
class ImageCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  height!: string;

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
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  url!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  width!: string;
}

export { ImageCreateInput as ImageCreateInput };
