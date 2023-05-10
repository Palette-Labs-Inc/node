
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, PaymentSource, PaymentTerm, User } from "@prisma/client";

export class PaymentSourceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PaymentSourceFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentSourceFindManyArgs>
  ): Promise<number> {
    return this.prisma.paymentSource.count(args);
  }

  async findMany<T extends Prisma.PaymentSourceFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentSourceFindManyArgs>
  ): Promise<PaymentSource[]> {
    return this.prisma.paymentSource.findMany(args);
  }
  async findOne<T extends Prisma.PaymentSourceFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentSourceFindUniqueArgs>
  ): Promise<PaymentSource | null> {
    return this.prisma.paymentSource.findUnique(args);
  }
  async create<T extends Prisma.PaymentSourceCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentSourceCreateArgs>
  ): Promise<PaymentSource> {
    return this.prisma.paymentSource.create<T>(args);
  }
  async update<T extends Prisma.PaymentSourceUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentSourceUpdateArgs>
  ): Promise<PaymentSource> {
    return this.prisma.paymentSource.update<T>(args);
  }
  async delete<T extends Prisma.PaymentSourceDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentSourceDeleteArgs>
  ): Promise<PaymentSource> {
    return this.prisma.paymentSource.delete(args);
  }

  async findPayments(
    parentId: string,
    args: Prisma.PaymentTermFindManyArgs
  ): Promise<PaymentTerm[]> {
    return this.prisma.paymentSource
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .payments(args);
  }

  async getUsers(parentId: string): Promise<User | null> {
    return this.prisma.paymentSource
      .findUnique({
        where: { id: parentId },
      })
      .users();
  }
}
