import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { Support } from "../../../support/base/Support";
import { RequestTransactionLifecycleDto } from "../../dto/request.dto"

@ObjectType()
class SupportDto extends RequestTransactionLifecycleDto {
  @ApiProperty({
    required: true,
    type: () => Support,
  })
  @ValidateNested()
  @Type(() => Support)
  @Field(() => Support)
  support!: Support;
}

export { SupportDto as SupportDto };