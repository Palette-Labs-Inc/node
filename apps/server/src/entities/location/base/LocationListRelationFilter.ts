
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocationWhereInput } from "./LocationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class LocationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => LocationWhereInput,
  })
  @ValidateNested()
  @Type(() => LocationWhereInput)
  @IsOptional()
  @Field(() => LocationWhereInput, {
    nullable: true,
  })
  every?: LocationWhereInput;

  @ApiProperty({
    required: false,
    type: () => LocationWhereInput,
  })
  @ValidateNested()
  @Type(() => LocationWhereInput)
  @IsOptional()
  @Field(() => LocationWhereInput, {
    nullable: true,
  })
  some?: LocationWhereInput;

  @ApiProperty({
    required: false,
    type: () => LocationWhereInput,
  })
  @ValidateNested()
  @Type(() => LocationWhereInput)
  @IsOptional()
  @Field(() => LocationWhereInput, {
    nullable: true,
  })
  none?: LocationWhereInput;
}
export { LocationListRelationFilter as LocationListRelationFilter };
