
import { ArgsType, Field } from "@nestjs/graphql";
import { VehicleWhereUniqueInput } from "./VehicleWhereUniqueInput";

@ArgsType()
class VehicleFindUniqueArgs {
  @Field(() => VehicleWhereUniqueInput, { nullable: false })
  where!: VehicleWhereUniqueInput;
}

export { VehicleFindUniqueArgs as VehicleFindUniqueArgs };
