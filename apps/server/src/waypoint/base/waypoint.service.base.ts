
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Waypoint,
  Individual,
  Contact,
  FulfillmentSpecification,
  Location,
} from "@prisma/client";

export class WaypointServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.WaypointFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.WaypointFindManyArgs>
  ): Promise<number> {
    return this.prisma.waypoint.count(args);
  }

  async findMany<T extends Prisma.WaypointFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.WaypointFindManyArgs>
  ): Promise<Waypoint[]> {
    return this.prisma.waypoint.findMany(args);
  }
  async findOne<T extends Prisma.WaypointFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.WaypointFindUniqueArgs>
  ): Promise<Waypoint | null> {
    return this.prisma.waypoint.findUnique(args);
  }
  async create<T extends Prisma.WaypointCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WaypointCreateArgs>
  ): Promise<Waypoint> {
    return this.prisma.waypoint.create<T>(args);
  }
  async update<T extends Prisma.WaypointUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WaypointUpdateArgs>
  ): Promise<Waypoint> {
    return this.prisma.waypoint.update<T>(args);
  }
  async delete<T extends Prisma.WaypointDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.WaypointDeleteArgs>
  ): Promise<Waypoint> {
    return this.prisma.waypoint.delete(args);
  }

  async findIndividual(
    parentId: string,
    args: Prisma.IndividualFindManyArgs
  ): Promise<Individual[]> {
    return this.prisma.waypoint
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .individual(args);
  }

  async getContact(parentId: string): Promise<Contact | null> {
    return this.prisma.waypoint
      .findUnique({
        where: { id: parentId },
      })
      .contact();
  }

  async getFulfillmentSpecification(
    parentId: string
  ): Promise<FulfillmentSpecification | null> {
    return this.prisma.waypoint
      .findUnique({
        where: { id: parentId },
      })
      .fulfillmentSpecification();
  }

  async getLocation(parentId: string): Promise<Location | null> {
    return this.prisma.waypoint
      .findUnique({
        where: { id: parentId },
      })
      .location();
  }
}
