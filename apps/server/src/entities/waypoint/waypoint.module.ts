import { Module } from "@nestjs/common";
import { WaypointModuleBase } from "./base/waypoint.module.base";
import { WaypointService } from "./waypoint.service";
import { WaypointController } from "./waypoint.controller";
import { WaypointResolver } from "./waypoint.resolver";

@Module({
  imports: [WaypointModuleBase],
  controllers: [WaypointController],
  providers: [WaypointService, WaypointResolver],
  exports: [WaypointService],
})
export class WaypointModule {}
