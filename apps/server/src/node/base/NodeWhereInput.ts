
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum, ValidateNested } from "class-validator";
import { IntFilter } from "../../util/IntFilter";
import { EnumNodeIndustryCode } from "./EnumNodeIndustryCode";
import { LocationListRelationFilter } from "../../location/base/LocationListRelationFilter";
import { EnumNodeOperatorType } from "./EnumNodeOperatorType";

@InputType()
class NodeWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  hostUrl?: StringFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  id?: IntFilter;

  @ApiProperty({
    required: false,
    enum: EnumNodeIndustryCode,
  })
  @IsEnum(EnumNodeIndustryCode)
  @IsOptional()
  @Field(() => EnumNodeIndustryCode, {
    nullable: true,
  })
  industryCode?: "LastMileDelivery" | "Rideshare";

  @ApiProperty({
    required: false,
    type: () => LocationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => LocationListRelationFilter)
  @IsOptional()
  @Field(() => LocationListRelationFilter, {
    nullable: true,
  })
  location?: LocationListRelationFilter;

  @ApiProperty({
    required: false,
    enum: EnumNodeOperatorType,
  })
  @IsEnum(EnumNodeOperatorType)
  @IsOptional()
  @Field(() => EnumNodeOperatorType, {
    nullable: true,
  })
  operatorType?: "Uno" | "Bsn" | "Ssn" | "Csn";
}

export { NodeWhereInput as NodeWhereInput };
