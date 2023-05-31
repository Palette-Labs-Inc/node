
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsEnum, ValidateNested } from "class-validator";
import { EnumNodeIndustryCode } from "./EnumNodeIndustryCode";
import { LocationUpdateManyWithoutNodesInput } from "./LocationUpdateManyWithoutNodesInput";
import { Type } from "class-transformer";
import { EnumNodeOperatorType } from "./EnumNodeOperatorType";

@InputType()
class NodeUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  hostUrl?: string;

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
    type: () => LocationUpdateManyWithoutNodesInput,
  })
  @ValidateNested()
  @Type(() => LocationUpdateManyWithoutNodesInput)
  @IsOptional()
  @Field(() => LocationUpdateManyWithoutNodesInput, {
    nullable: true,
  })
  location?: LocationUpdateManyWithoutNodesInput;

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

export { NodeUpdateInput as NodeUpdateInput };
