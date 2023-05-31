
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { RatingWhereUniqueInput } from "../../rating/base/RatingWhereUniqueInput";

@InputType()
class MediaFileWhereInput {
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
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  mimeType?: StringFilter;

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
  rating?: RatingWhereUniqueInput;
}

export { MediaFileWhereInput as MediaFileWhereInput };
