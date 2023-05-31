import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { RequestTransactionLifecycleDto } from "../../dto/request.dto"

@ObjectType()
class StatusDto extends RequestTransactionLifecycleDto {
  @ApiProperty({ 
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  orderId!: string;
}

export { StatusDto as StatusDto };