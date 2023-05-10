
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Search,
  Promotion,
  Seller,
  FulfillmentSpecification,
  MenuItem,
  PaymentTerm,
} from "@prisma/client";

export class SearchServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SearchFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SearchFindManyArgs>
  ): Promise<number> {
    return this.prisma.search.count(args);
  }

  async findMany<T extends Prisma.SearchFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SearchFindManyArgs>
  ): Promise<Search[]> {
    return this.prisma.search.findMany(args);
  }
  async findOne<T extends Prisma.SearchFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SearchFindUniqueArgs>
  ): Promise<Search | null> {
    return this.prisma.search.findUnique(args);
  }
  async create<T extends Prisma.SearchCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SearchCreateArgs>
  ): Promise<Search> {
    return this.prisma.search.create<T>(args);
  }
  async update<T extends Prisma.SearchUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SearchUpdateArgs>
  ): Promise<Search> {
    return this.prisma.search.update<T>(args);
  }
  async delete<T extends Prisma.SearchDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SearchDeleteArgs>
  ): Promise<Search> {
    return this.prisma.search.delete(args);
  }

  async findPromotions(
    parentId: string,
    args: Prisma.PromotionFindManyArgs
  ): Promise<Promotion[]> {
    return this.prisma.search
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .promotions(args);
  }

  async findSellers(
    parentId: string,
    args: Prisma.SellerFindManyArgs
  ): Promise<Seller[]> {
    return this.prisma.search
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .sellers(args);
  }

  async getFulfillmentSpecification(
    parentId: string
  ): Promise<FulfillmentSpecification | null> {
    return this.prisma.search
      .findUnique({
        where: { id: parentId },
      })
      .fulfillmentSpecification();
  }

  async getMenuItems(parentId: string): Promise<MenuItem | null> {
    return this.prisma.search
      .findUnique({
        where: { id: parentId },
      })
      .menuItems();
  }

  async getPaymentTerm(parentId: string): Promise<PaymentTerm | null> {
    return this.prisma.search
      .findUnique({
        where: { id: parentId },
      })
      .paymentTerm();
  }
}
