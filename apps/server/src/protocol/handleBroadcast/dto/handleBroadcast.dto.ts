import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { Bazaar } from "../../../entities/bazaar/base/Bazaar";
import { CallbackTransactionLifecycleDto } from "../../dto/callback.dto"

@ObjectType()
class HandleBroadcast extends CallbackTransactionLifecycleDto {
  @ApiProperty({
    required: true,
    type: () => Bazaar,
  })
  @ValidateNested()
  @Type(() => Bazaar)
  @Field(() => Bazaar)
  bazaar!: Bazaar;
}

export { HandleBroadcast as HandleBroadcastDto };