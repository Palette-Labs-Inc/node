
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NodeWhereInput } from "./NodeWhereInput";
import { Type } from "class-transformer";
import { NodeOrderByInput } from "./NodeOrderByInput";

@ArgsType()
class NodeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => NodeWhereInput,
  })
  @Field(() => NodeWhereInput, { nullable: true })
  @Type(() => NodeWhereInput)
  where?: NodeWhereInput;

  @ApiProperty({
    required: false,
    type: [NodeOrderByInput],
  })
  @Field(() => [NodeOrderByInput], { nullable: true })
  @Type(() => NodeOrderByInput)
  orderBy?: Array<NodeOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { NodeFindManyArgs as NodeFindManyArgs };
