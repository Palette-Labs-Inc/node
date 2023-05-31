
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ContactWhereInput } from "./ContactWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ContactListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ContactWhereInput,
  })
  @ValidateNested()
  @Type(() => ContactWhereInput)
  @IsOptional()
  @Field(() => ContactWhereInput, {
    nullable: true,
  })
  every?: ContactWhereInput;

  @ApiProperty({
    required: false,
    type: () => ContactWhereInput,
  })
  @ValidateNested()
  @Type(() => ContactWhereInput)
  @IsOptional()
  @Field(() => ContactWhereInput, {
    nullable: true,
  })
  some?: ContactWhereInput;

  @ApiProperty({
    required: false,
    type: () => ContactWhereInput,
  })
  @ValidateNested()
  @Type(() => ContactWhereInput)
  @IsOptional()
  @Field(() => ContactWhereInput, {
    nullable: true,
  })
  none?: ContactWhereInput;
}
export { ContactListRelationFilter as ContactListRelationFilter };
