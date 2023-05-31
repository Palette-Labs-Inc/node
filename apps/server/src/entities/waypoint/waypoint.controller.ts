import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WaypointService } from "./waypoint.service";
import { WaypointControllerBase } from "./base/waypoint.controller.base";

@swagger.ApiTags("waypoints")
@common.Controller("waypoints")
export class WaypointController extends WaypointControllerBase {
  constructor(
    protected readonly service: WaypointService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
