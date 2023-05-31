
import { PrismaService } from "../../../prisma/prisma.service";
import {
  Prisma,
  Tracking,
  FulfillmentSpecification,
  Location,
} from "@prisma/client";

export class TrackingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TrackingFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TrackingFindManyArgs>
  ): Promise<number> {
    return this.prisma.tracking.count(args);
  }

  async findMany<T extends Prisma.TrackingFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TrackingFindManyArgs>
  ): Promise<Tracking[]> {
    return this.prisma.tracking.findMany(args);
  }
  async findOne<T extends Prisma.TrackingFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TrackingFindUniqueArgs>
  ): Promise<Tracking | null> {
    return this.prisma.tracking.findUnique(args);
  }
  async create<T extends Prisma.TrackingCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TrackingCreateArgs>
  ): Promise<Tracking> {
    return this.prisma.tracking.create<T>(args);
  }
  async update<T extends Prisma.TrackingUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TrackingUpdateArgs>
  ): Promise<Tracking> {
    return this.prisma.tracking.update<T>(args);
  }
  async delete<T extends Prisma.TrackingDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TrackingDeleteArgs>
  ): Promise<Tracking> {
    return this.prisma.tracking.delete(args);
  }

  async getFulfillmentSpecifications(
    parentId: string
  ): Promise<FulfillmentSpecification | null> {
    return this.prisma.tracking
      .findUnique({
        where: { id: parentId },
      })
      .fulfillmentSpecifications();
  }

  async getLocation(parentId: string): Promise<Location | null> {
    return this.prisma.tracking
      .findUnique({
        where: { id: parentId },
      })
      .location();
  }
}
