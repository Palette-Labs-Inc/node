
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  FulfillmentSpecification,
  Order,
  Search,
  Waypoint,
  User,
  Contact,
  Courier,
  Seller,
  Tracking,
  Vehicle,
} from "@prisma/client";

export class FulfillmentSpecificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.FulfillmentSpecificationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FulfillmentSpecificationFindManyArgs>
  ): Promise<number> {
    return this.prisma.fulfillmentSpecification.count(args);
  }

  async findMany<T extends Prisma.FulfillmentSpecificationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FulfillmentSpecificationFindManyArgs>
  ): Promise<FulfillmentSpecification[]> {
    return this.prisma.fulfillmentSpecification.findMany(args);
  }
  async findOne<T extends Prisma.FulfillmentSpecificationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FulfillmentSpecificationFindUniqueArgs>
  ): Promise<FulfillmentSpecification | null> {
    return this.prisma.fulfillmentSpecification.findUnique(args);
  }
  async create<T extends Prisma.FulfillmentSpecificationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FulfillmentSpecificationCreateArgs>
  ): Promise<FulfillmentSpecification> {
    return this.prisma.fulfillmentSpecification.create<T>(args);
  }
  async update<T extends Prisma.FulfillmentSpecificationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FulfillmentSpecificationUpdateArgs>
  ): Promise<FulfillmentSpecification> {
    return this.prisma.fulfillmentSpecification.update<T>(args);
  }
  async delete<T extends Prisma.FulfillmentSpecificationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FulfillmentSpecificationDeleteArgs>
  ): Promise<FulfillmentSpecification> {
    return this.prisma.fulfillmentSpecification.delete(args);
  }

  async findOrders(
    parentId: string,
    args: Prisma.OrderFindManyArgs
  ): Promise<Order[]> {
    return this.prisma.fulfillmentSpecification
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .orders(args);
  }

  async findSearches(
    parentId: string,
    args: Prisma.SearchFindManyArgs
  ): Promise<Search[]> {
    return this.prisma.fulfillmentSpecification
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .searches(args);
  }

  async findWaypoints(
    parentId: string,
    args: Prisma.WaypointFindManyArgs
  ): Promise<Waypoint[]> {
    return this.prisma.fulfillmentSpecification
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .waypoints(args);
  }

  async getBuyer(parentId: string): Promise<User | null> {
    return this.prisma.fulfillmentSpecification
      .findUnique({
        where: { id: parentId },
      })
      .buyer();
  }

  async getContact(parentId: string): Promise<Contact | null> {
    return this.prisma.fulfillmentSpecification
      .findUnique({
        where: { id: parentId },
      })
      .contact();
  }

  async getCourier(parentId: string): Promise<Courier | null> {
    return this.prisma.fulfillmentSpecification
      .findUnique({
        where: { id: parentId },
      })
      .courier();
  }

  async getSeller(parentId: string): Promise<Seller | null> {
    return this.prisma.fulfillmentSpecification
      .findUnique({
        where: { id: parentId },
      })
      .seller();
  }

  async getTracking(parentId: string): Promise<Tracking | null> {
    return this.prisma.fulfillmentSpecification
      .findUnique({
        where: { id: parentId },
      })
      .tracking();
  }

  async getVehicle(parentId: string): Promise<Vehicle | null> {
    return this.prisma.fulfillmentSpecification
      .findUnique({
        where: { id: parentId },
      })
      .vehicle();
  }
}
