
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MediaFileWhereInput } from "./MediaFileWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MediaFileListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MediaFileWhereInput,
  })
  @ValidateNested()
  @Type(() => MediaFileWhereInput)
  @IsOptional()
  @Field(() => MediaFileWhereInput, {
    nullable: true,
  })
  every?: MediaFileWhereInput;

  @ApiProperty({
    required: false,
    type: () => MediaFileWhereInput,
  })
  @ValidateNested()
  @Type(() => MediaFileWhereInput)
  @IsOptional()
  @Field(() => MediaFileWhereInput, {
    nullable: true,
  })
  some?: MediaFileWhereInput;

  @ApiProperty({
    required: false,
    type: () => MediaFileWhereInput,
  })
  @ValidateNested()
  @Type(() => MediaFileWhereInput)
  @IsOptional()
  @Field(() => MediaFileWhereInput, {
    nullable: true,
  })
  none?: MediaFileWhereInput;
}
export { MediaFileListRelationFilter as MediaFileListRelationFilter };
