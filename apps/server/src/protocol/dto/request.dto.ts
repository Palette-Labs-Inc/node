import { IsEnum } from 'class-validator';
import { MethodType, Method } from '../interfaces/protocol.interface';

import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { Condition } from "../../entities/condition/base/Condition";

@ObjectType()
class RequestTransactionLifecycleDto {
  // @IsNotEmpty()
  // TODO - write class validator that matches the MethodType to the configured endpoints for this node type based on .env configuration, not all possible method types
  @ApiProperty({
    required: true,
    type: () => Condition,
  })
  @ValidateNested()
  @Type(() => Condition)
  condition!: Condition;

  @ApiProperty({
    required: true,
    type: () => Method,
  })
  @IsEnum(MethodType, {
    message: `Type must be one of the following values: ${Object.values(
        MethodType
    ).join(', ')}`,
   })
   @Type(() => Method)
   @Field(() => Method)
   method!: Method;
}

export { RequestTransactionLifecycleDto as RequestTransactionLifecycleDto };
