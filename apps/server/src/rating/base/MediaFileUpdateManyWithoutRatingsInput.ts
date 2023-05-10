
import { InputType, Field } from "@nestjs/graphql";
import { MediaFileWhereUniqueInput } from "../../mediaFile/base/MediaFileWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MediaFileUpdateManyWithoutRatingsInput {
  @Field(() => [MediaFileWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MediaFileWhereUniqueInput],
  })
  connect?: Array<MediaFileWhereUniqueInput>;

  @Field(() => [MediaFileWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MediaFileWhereUniqueInput],
  })
  disconnect?: Array<MediaFileWhereUniqueInput>;

  @Field(() => [MediaFileWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MediaFileWhereUniqueInput],
  })
  set?: Array<MediaFileWhereUniqueInput>;
}

export { MediaFileUpdateManyWithoutRatingsInput as MediaFileUpdateManyWithoutRatingsInput };
