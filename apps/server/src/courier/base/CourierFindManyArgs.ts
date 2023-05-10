
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CourierWhereInput } from "./CourierWhereInput";
import { Type } from "class-transformer";
import { CourierOrderByInput } from "./CourierOrderByInput";

@ArgsType()
class CourierFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CourierWhereInput,
  })
  @Field(() => CourierWhereInput, { nullable: true })
  @Type(() => CourierWhereInput)
  where?: CourierWhereInput;

  @ApiProperty({
    required: false,
    type: [CourierOrderByInput],
  })
  @Field(() => [CourierOrderByInput], { nullable: true })
  @Type(() => CourierOrderByInput)
  orderBy?: Array<CourierOrderByInput>;

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

export { CourierFindManyArgs as CourierFindManyArgs };
