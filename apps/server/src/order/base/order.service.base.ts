
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Order,
  MenuItem,
  Promotion,
  Billing,
  Cancellation,
  FulfillmentSpecification,
  PaymentTerm,
} from "@prisma/client";

export class OrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.OrderFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderFindManyArgs>
  ): Promise<number> {
    return this.prisma.order.count(args);
  }

  async findMany<T extends Prisma.OrderFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderFindManyArgs>
  ): Promise<Order[]> {
    return this.prisma.order.findMany(args);
  }
  async findOne<T extends Prisma.OrderFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderFindUniqueArgs>
  ): Promise<Order | null> {
    return this.prisma.order.findUnique(args);
  }
  async create<T extends Prisma.OrderCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderCreateArgs>
  ): Promise<Order> {
    return this.prisma.order.create<T>(args);
  }
  async update<T extends Prisma.OrderUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderUpdateArgs>
  ): Promise<Order> {
    return this.prisma.order.update<T>(args);
  }
  async delete<T extends Prisma.OrderDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderDeleteArgs>
  ): Promise<Order> {
    return this.prisma.order.delete(args);
  }

  async findMenuItems(
    parentId: string,
    args: Prisma.MenuItemFindManyArgs
  ): Promise<MenuItem[]> {
    return this.prisma.order
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .menuItems(args);
  }

  async findPromotion(
    parentId: string,
    args: Prisma.PromotionFindManyArgs
  ): Promise<Promotion[]> {
    return this.prisma.order
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .promotion(args);
  }

  async getBilling(parentId: string): Promise<Billing | null> {
    return this.prisma.order
      .findUnique({
        where: { id: parentId },
      })
      .billing();
  }

  async getCancellation(parentId: string): Promise<Cancellation | null> {
    return this.prisma.order
      .findUnique({
        where: { id: parentId },
      })
      .cancellation();
  }

  async getFulfillmentSpecification(
    parentId: string
  ): Promise<FulfillmentSpecification | null> {
    return this.prisma.order
      .findUnique({
        where: { id: parentId },
      })
      .fulfillmentSpecification();
  }

  async getPaymentTerm(parentId: string): Promise<PaymentTerm | null> {
    return this.prisma.order
      .findUnique({
        where: { id: parentId },
      })
      .paymentTerm();
  }
}
