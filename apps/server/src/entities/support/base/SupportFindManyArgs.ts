
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SupportWhereInput } from "./SupportWhereInput";
import { Type } from "class-transformer";
import { SupportOrderByInput } from "./SupportOrderByInput";

@ArgsType()
class SupportFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SupportWhereInput,
  })
  @Field(() => SupportWhereInput, { nullable: true })
  @Type(() => SupportWhereInput)
  where?: SupportWhereInput;

  @ApiProperty({
    required: false,
    type: [SupportOrderByInput],
  })
  @Field(() => [SupportOrderByInput], { nullable: true })
  @Type(() => SupportOrderByInput)
  orderBy?: Array<SupportOrderByInput>;

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

export { SupportFindManyArgs as SupportFindManyArgs };
