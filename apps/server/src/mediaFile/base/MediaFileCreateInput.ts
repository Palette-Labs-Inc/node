
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MenuItemWhereUniqueInput } from "../../menuItem/base/MenuItemWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { RatingWhereUniqueInput } from "../../rating/base/RatingWhereUniqueInput";

@InputType()
class MediaFileCreateInput {
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
  menuItems?: MenuItemWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  mimeType!: string;

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
}

export { MediaFileCreateInput as MediaFileCreateInput };
