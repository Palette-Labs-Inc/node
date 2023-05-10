
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Billing, Order, Organization } from "@prisma/client";

export class BillingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.BillingFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BillingFindManyArgs>
  ): Promise<number> {
    return this.prisma.billing.count(args);
  }

  async findMany<T extends Prisma.BillingFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BillingFindManyArgs>
  ): Promise<Billing[]> {
    return this.prisma.billing.findMany(args);
  }
  async findOne<T extends Prisma.BillingFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BillingFindUniqueArgs>
  ): Promise<Billing | null> {
    return this.prisma.billing.findUnique(args);
  }
  async create<T extends Prisma.BillingCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BillingCreateArgs>
  ): Promise<Billing> {
    return this.prisma.billing.create<T>(args);
  }
  async update<T extends Prisma.BillingUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BillingUpdateArgs>
  ): Promise<Billing> {
    return this.prisma.billing.update<T>(args);
  }
  async delete<T extends Prisma.BillingDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.BillingDeleteArgs>
  ): Promise<Billing> {
    return this.prisma.billing.delete(args);
  }

  async findOrders(
    parentId: string,
    args: Prisma.OrderFindManyArgs
  ): Promise<Order[]> {
    return this.prisma.billing
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .orders(args);
  }

  async getOrganization(parentId: string): Promise<Organization | null> {
    return this.prisma.billing
      .findUnique({
        where: { id: parentId },
      })
      .organization();
  }
}
