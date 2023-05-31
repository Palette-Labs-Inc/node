
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString, ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { Rating } from "../../rating/base/Rating";

@ObjectType()
class MediaFile {
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
    type: () => MenuItem,
  })
  @ValidateNested()
  @Type(() => MenuItem)
  @IsOptional()
  menuItems?: MenuItem | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  mimeType!: string;

  @ApiProperty({
    required: false,
    type: () => Rating,
  })
  @ValidateNested()
  @Type(() => Rating)
  @IsOptional()
  rating?: Rating | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  url!: string;
}

export { MediaFile as MediaFile };
