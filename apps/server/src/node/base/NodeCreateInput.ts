
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEnum, ValidateNested, IsOptional } from "class-validator";
import { EnumNodeIndustryCode } from "./EnumNodeIndustryCode";
import { LocationCreateNestedManyWithoutNodesInput } from "./LocationCreateNestedManyWithoutNodesInput";
import { Type } from "class-transformer";
import { EnumNodeOperatorType } from "./EnumNodeOperatorType";

@InputType()
class NodeCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  hostUrl!: string;

  @ApiProperty({
    required: true,
    enum: EnumNodeIndustryCode,
  })
  @IsEnum(EnumNodeIndustryCode)
  @Field(() => EnumNodeIndustryCode)
  industryCode!: "LastMileDelivery" | "Rideshare";

  @ApiProperty({
    required: true,
    type: () => LocationCreateNestedManyWithoutNodesInput,
  })
  @ValidateNested()
  @Type(() => LocationCreateNestedManyWithoutNodesInput)
  @IsOptional()
  @Field(() => LocationCreateNestedManyWithoutNodesInput, {
    nullable: true,
  })
  location?: LocationCreateNestedManyWithoutNodesInput;

  @ApiProperty({
    required: true,
    enum: EnumNodeOperatorType,
  })
  @IsEnum(EnumNodeOperatorType)
  @Field(() => EnumNodeOperatorType)
  operatorType!: "Uno" | "Bsn" | "Ssn" | "Csn";
}

export { NodeCreateInput as NodeCreateInput };
