import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WaypointServiceBase } from "./base/waypoint.service.base";

@Injectable()
export class WaypointService extends WaypointServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
