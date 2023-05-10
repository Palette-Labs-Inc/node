import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { CallbackTransactionLifecycleDto } from "../../dto/callback.dto"


// TODO: send something to the user to fill out that is more than just a message string

@ObjectType()
class HandleRatingDto extends CallbackTransactionLifecycleDto {
  @ApiProperty({ 
    required: false,
    type: String,
  })
  @IsString()
  @Field(() => String)
  message?: string;
}

export { HandleRatingDto as HandleRatingDto };