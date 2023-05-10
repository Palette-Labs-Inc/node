
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ScalarWhereInput } from "./ScalarWhereInput";
import { Type } from "class-transformer";
import { ScalarOrderByInput } from "./ScalarOrderByInput";

@ArgsType()
class ScalarFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ScalarWhereInput,
  })
  @Field(() => ScalarWhereInput, { nullable: true })
  @Type(() => ScalarWhereInput)
  where?: ScalarWhereInput;

  @ApiProperty({
    required: false,
    type: [ScalarOrderByInput],
  })
  @Field(() => [ScalarOrderByInput], { nullable: true })
  @Type(() => ScalarOrderByInput)
  orderBy?: Array<ScalarOrderByInput>;

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

export { ScalarFindManyArgs as ScalarFindManyArgs };
