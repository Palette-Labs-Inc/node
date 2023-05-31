
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IndividualWhereInput } from "./IndividualWhereInput";
import { Type } from "class-transformer";
import { IndividualOrderByInput } from "./IndividualOrderByInput";

@ArgsType()
class IndividualFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => IndividualWhereInput,
  })
  @Field(() => IndividualWhereInput, { nullable: true })
  @Type(() => IndividualWhereInput)
  where?: IndividualWhereInput;

  @ApiProperty({
    required: false,
    type: [IndividualOrderByInput],
  })
  @Field(() => [IndividualOrderByInput], { nullable: true })
  @Type(() => IndividualOrderByInput)
  orderBy?: Array<IndividualOrderByInput>;

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

export { IndividualFindManyArgs as IndividualFindManyArgs };
