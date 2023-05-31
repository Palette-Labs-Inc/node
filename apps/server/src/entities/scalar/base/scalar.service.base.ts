
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Scalar, ItemQuantity } from "@prisma/client";

export class ScalarServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ScalarFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScalarFindManyArgs>
  ): Promise<number> {
    return this.prisma.scalar.count(args);
  }

  async findMany<T extends Prisma.ScalarFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScalarFindManyArgs>
  ): Promise<Scalar[]> {
    return this.prisma.scalar.findMany(args);
  }
  async findOne<T extends Prisma.ScalarFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScalarFindUniqueArgs>
  ): Promise<Scalar | null> {
    return this.prisma.scalar.findUnique(args);
  }
  async create<T extends Prisma.ScalarCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScalarCreateArgs>
  ): Promise<Scalar> {
    return this.prisma.scalar.create<T>(args);
  }
  async update<T extends Prisma.ScalarUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScalarUpdateArgs>
  ): Promise<Scalar> {
    return this.prisma.scalar.update<T>(args);
  }
  async delete<T extends Prisma.ScalarDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScalarDeleteArgs>
  ): Promise<Scalar> {
    return this.prisma.scalar.delete(args);
  }

  async findItemQuantityAllocatedMeasure(
    parentId: string,
    args: Prisma.ItemQuantityFindManyArgs
  ): Promise<ItemQuantity[]> {
    return this.prisma.scalar
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .itemQuantityAllocatedMeasure(args);
  }

  async findItemQuantityAvailableMeasure(
    parentId: string,
    args: Prisma.ItemQuantityFindManyArgs
  ): Promise<ItemQuantity[]> {
    return this.prisma.scalar
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .itemQuantityAvailableMeasure(args);
  }

  async findItemQuantityMaximumPurchasableMeasure(
    parentId: string,
    args: Prisma.ItemQuantityFindManyArgs
  ): Promise<ItemQuantity[]> {
    return this.prisma.scalar
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .itemQuantityMaximumPurchasableMeasure(args);
  }

  async findItemQuantityMinimumPurchasableMeasure(
    parentId: string,
    args: Prisma.ItemQuantityFindManyArgs
  ): Promise<ItemQuantity[]> {
    return this.prisma.scalar
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .itemQuantityMinimumPurchasableMeasure(args);
  }

  async findItemQuantitySelectedMeasure(
    parentId: string,
    args: Prisma.ItemQuantityFindManyArgs
  ): Promise<ItemQuantity[]> {
    return this.prisma.scalar
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .itemQuantitySelectedMeasure(args);
  }
}
