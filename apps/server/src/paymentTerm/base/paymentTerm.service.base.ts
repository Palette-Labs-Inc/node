
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  PaymentTerm,
  Bazaar,
  Order,
  PaymentSource,
  Search,
  Seller,
} from "@prisma/client";

export class PaymentTermServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PaymentTermFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentTermFindManyArgs>
  ): Promise<number> {
    return this.prisma.paymentTerm.count(args);
  }

  async findMany<T extends Prisma.PaymentTermFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentTermFindManyArgs>
  ): Promise<PaymentTerm[]> {
    return this.prisma.paymentTerm.findMany(args);
  }
  async findOne<T extends Prisma.PaymentTermFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentTermFindUniqueArgs>
  ): Promise<PaymentTerm | null> {
    return this.prisma.paymentTerm.findUnique(args);
  }
  async create<T extends Prisma.PaymentTermCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentTermCreateArgs>
  ): Promise<PaymentTerm> {
    return this.prisma.paymentTerm.create<T>(args);
  }
  async update<T extends Prisma.PaymentTermUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentTermUpdateArgs>
  ): Promise<PaymentTerm> {
    return this.prisma.paymentTerm.update<T>(args);
  }
  async delete<T extends Prisma.PaymentTermDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentTermDeleteArgs>
  ): Promise<PaymentTerm> {
    return this.prisma.paymentTerm.delete(args);
  }

  async getBazaar(parentId: string): Promise<Bazaar | null> {
    return this.prisma.paymentTerm
      .findUnique({
        where: { id: parentId },
      })
      .bazaar();
  }

  async getOrder(parentId: string): Promise<Order | null> {
    return this.prisma.paymentTerm
      .findUnique({
        where: { id: parentId },
      })
      .order();
  }

  async getPaymentSource(parentId: string): Promise<PaymentSource | null> {
    return this.prisma.paymentTerm
      .findUnique({
        where: { id: parentId },
      })
      .paymentSource();
  }

  async getSearch(parentId: string): Promise<Search | null> {
    return this.prisma.paymentTerm
      .findUnique({
        where: { id: parentId },
      })
      .search();
  }

  async getSeller(parentId: string): Promise<Seller | null> {
    return this.prisma.paymentTerm
      .findUnique({
        where: { id: parentId },
      })
      .seller();
  }
}
