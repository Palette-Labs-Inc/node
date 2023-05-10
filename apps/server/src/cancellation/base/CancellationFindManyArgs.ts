
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CancellationWhereInput } from "./CancellationWhereInput";
import { Type } from "class-transformer";
import { CancellationOrderByInput } from "./CancellationOrderByInput";

@ArgsType()
class CancellationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CancellationWhereInput,
  })
  @Field(() => CancellationWhereInput, { nullable: true })
  @Type(() => CancellationWhereInput)
  where?: CancellationWhereInput;

  @ApiProperty({
    required: false,
    type: [CancellationOrderByInput],
  })
  @Field(() => [CancellationOrderByInput], { nullable: true })
  @Type(() => CancellationOrderByInput)
  orderBy?: Array<CancellationOrderByInput>;

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

export { CancellationFindManyArgs as CancellationFindManyArgs };
