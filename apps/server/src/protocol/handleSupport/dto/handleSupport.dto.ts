import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { Support } from "../../../support/base/Support";
import { CallbackTransactionLifecycleDto } from "../../dto/callback.dto"

@ObjectType()
class HandleSupportDto extends CallbackTransactionLifecycleDto {
  @ApiProperty({
    required: true,
    type: () => Support,
  })
  @ValidateNested()
  @Type(() => Support)
  @Field(() => Support)
  order!: Support;
}

export { HandleSupportDto as HandleSupportDto };