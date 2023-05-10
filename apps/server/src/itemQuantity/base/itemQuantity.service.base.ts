
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ItemQuantity, Scalar, MenuItem } from "@prisma/client";

export class ItemQuantityServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ItemQuantityFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ItemQuantityFindManyArgs>
  ): Promise<number> {
    return this.prisma.itemQuantity.count(args);
  }

  async findMany<T extends Prisma.ItemQuantityFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ItemQuantityFindManyArgs>
  ): Promise<ItemQuantity[]> {
    return this.prisma.itemQuantity.findMany(args);
  }
  async findOne<T extends Prisma.ItemQuantityFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ItemQuantityFindUniqueArgs>
  ): Promise<ItemQuantity | null> {
    return this.prisma.itemQuantity.findUnique(args);
  }
  async create<T extends Prisma.ItemQuantityCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ItemQuantityCreateArgs>
  ): Promise<ItemQuantity> {
    return this.prisma.itemQuantity.create<T>(args);
  }
  async update<T extends Prisma.ItemQuantityUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ItemQuantityUpdateArgs>
  ): Promise<ItemQuantity> {
    return this.prisma.itemQuantity.update<T>(args);
  }
  async delete<T extends Prisma.ItemQuantityDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ItemQuantityDeleteArgs>
  ): Promise<ItemQuantity> {
    return this.prisma.itemQuantity.delete(args);
  }

  async getAllocatedMeasure(parentId: string): Promise<Scalar | null> {
    return this.prisma.itemQuantity
      .findUnique({
        where: { id: parentId },
      })
      .allocatedMeasure();
  }

  async getAvailableMeasure(parentId: string): Promise<Scalar | null> {
    return this.prisma.itemQuantity
      .findUnique({
        where: { id: parentId },
      })
      .availableMeasure();
  }

  async getMaximumPurchasableMeasure(parentId: string): Promise<Scalar | null> {
    return this.prisma.itemQuantity
      .findUnique({
        where: { id: parentId },
      })
      .maximumPurchasableMeasure();
  }

  async getMenuItem(parentId: string): Promise<MenuItem | null> {
    return this.prisma.itemQuantity
      .findUnique({
        where: { id: parentId },
      })
      .menuItem();
  }

  async getMinimumPurchasableMeasure(parentId: string): Promise<Scalar | null> {
    return this.prisma.itemQuantity
      .findUnique({
        where: { id: parentId },
      })
      .minimumPurchasableMeasure();
  }

  async getSelectedMeasure(parentId: string): Promise<Scalar | null> {
    return this.prisma.itemQuantity
      .findUnique({
        where: { id: parentId },
      })
      .selectedMeasure();
  }
}
