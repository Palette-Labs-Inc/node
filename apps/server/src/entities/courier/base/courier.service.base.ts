
import { PrismaService } from "../../../prisma/prisma.service";

import {
  Prisma,
  Courier,
  FulfillmentSpecification,
  Organization,
  Rating,
  Individual,
  User,
} from "@prisma/client";

export class CourierServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CourierFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourierFindManyArgs>
  ): Promise<number> {
    return this.prisma.courier.count(args);
  }

  async findMany<T extends Prisma.CourierFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourierFindManyArgs>
  ): Promise<Courier[]> {
    return this.prisma.courier.findMany(args);
  }
  async findOne<T extends Prisma.CourierFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourierFindUniqueArgs>
  ): Promise<Courier | null> {
    return this.prisma.courier.findUnique(args);
  }
  async create<T extends Prisma.CourierCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourierCreateArgs>
  ): Promise<Courier> {
    return this.prisma.courier.create<T>(args);
  }
  async update<T extends Prisma.CourierUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourierUpdateArgs>
  ): Promise<Courier> {
    return this.prisma.courier.update<T>(args);
  }
  async delete<T extends Prisma.CourierDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourierDeleteArgs>
  ): Promise<Courier> {
    return this.prisma.courier.delete(args);
  }

  async findFulfillmentSpecifications(
    parentId: string,
    args: Prisma.FulfillmentSpecificationFindManyArgs
  ): Promise<FulfillmentSpecification[]> {
    return this.prisma.courier
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .fulfillmentSpecifications(args);
  }

  async findOrganization(
    parentId: string,
    args: Prisma.OrganizationFindManyArgs
  ): Promise<Organization[]> {
    return this.prisma.courier
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .organization(args);
  }

  async findRatings(
    parentId: string,
    args: Prisma.RatingFindManyArgs
  ): Promise<Rating[]> {
    return this.prisma.courier
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .ratings(args);
  }

  async getInidividual(parentId: string): Promise<Individual | null> {
    return this.prisma.courier
      .findUnique({
        where: { id: parentId },
      })
      .inidividual();
  }

  async getUsers(parentId: string): Promise<User | null> {
    return this.prisma.courier
      .findUnique({
        where: { id: parentId },
      })
      .users();
  }
}
