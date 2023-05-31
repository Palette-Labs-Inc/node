import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ScalarService } from "./scalar.service";
import { ScalarControllerBase } from "./base/scalar.controller.base";

@swagger.ApiTags("scalars")
@common.Controller("scalars")
export class ScalarController extends ScalarControllerBase {
  constructor(
    protected readonly service: ScalarService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
