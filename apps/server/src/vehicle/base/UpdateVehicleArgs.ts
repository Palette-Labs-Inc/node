
import { ArgsType, Field } from "@nestjs/graphql";
import { VehicleWhereUniqueInput } from "./VehicleWhereUniqueInput";
import { VehicleUpdateInput } from "./VehicleUpdateInput";

@ArgsType()
class UpdateVehicleArgs {
  @Field(() => VehicleWhereUniqueInput, { nullable: false })
  where!: VehicleWhereUniqueInput;
  @Field(() => VehicleUpdateInput, { nullable: false })
  data!: VehicleUpdateInput;
}

export { UpdateVehicleArgs as UpdateVehicleArgs };
