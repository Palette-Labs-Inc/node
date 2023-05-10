
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Location,
  Condition,
  Promotion,
  Node,
  Organization,
  Seller,
  Tracking,
  Waypoint,
} from "@prisma/client";

export class LocationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.LocationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocationFindManyArgs>
  ): Promise<number> {
    return this.prisma.location.count(args);
  }

  async findMany<T extends Prisma.LocationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocationFindManyArgs>
  ): Promise<Location[]> {
    return this.prisma.location.findMany(args);
  }
  async findOne<T extends Prisma.LocationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocationFindUniqueArgs>
  ): Promise<Location | null> {
    return this.prisma.location.findUnique(args);
  }
  async create<T extends Prisma.LocationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocationCreateArgs>
  ): Promise<Location> {
    return this.prisma.location.create<T>(args);
  }
  async update<T extends Prisma.LocationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocationUpdateArgs>
  ): Promise<Location> {
    return this.prisma.location.update<T>(args);
  }
  async delete<T extends Prisma.LocationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocationDeleteArgs>
  ): Promise<Location> {
    return this.prisma.location.delete(args);
  }

  async findConditions(
    parentId: string,
    args: Prisma.ConditionFindManyArgs
  ): Promise<Condition[]> {
    return this.prisma.location
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .conditions(args);
  }

  async findPromotion(
    parentId: string,
    args: Prisma.PromotionFindManyArgs
  ): Promise<Promotion[]> {
    return this.prisma.location
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .promotion(args);
  }

  async getNode(parentId: string): Promise<Node | null> {
    return this.prisma.location
      .findUnique({
        where: { id: parentId },
      })
      .node();
  }

  async getOrganizations(parentId: string): Promise<Organization | null> {
    return this.prisma.location
      .findUnique({
        where: { id: parentId },
      })
      .organizations();
  }

  async getSeller(parentId: string): Promise<Seller | null> {
    return this.prisma.location
      .findUnique({
        where: { id: parentId },
      })
      .seller();
  }

  async getTrackings(parentId: string): Promise<Tracking | null> {
    return this.prisma.location
      .findUnique({
        where: { id: parentId },
      })
      .trackings();
  }

  async getWaypoints(parentId: string): Promise<Waypoint | null> {
    return this.prisma.location
      .findUnique({
        where: { id: parentId },
      })
      .waypoints();
  }
}
