
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ModifierGroup, Seller } from "@prisma/client";

export class ModifierGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ModifierGroupFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ModifierGroupFindManyArgs>
  ): Promise<number> {
    return this.prisma.modifierGroup.count(args);
  }

  async findMany<T extends Prisma.ModifierGroupFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ModifierGroupFindManyArgs>
  ): Promise<ModifierGroup[]> {
    return this.prisma.modifierGroup.findMany(args);
  }
  async findOne<T extends Prisma.ModifierGroupFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ModifierGroupFindUniqueArgs>
  ): Promise<ModifierGroup | null> {
    return this.prisma.modifierGroup.findUnique(args);
  }
  async create<T extends Prisma.ModifierGroupCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ModifierGroupCreateArgs>
  ): Promise<ModifierGroup> {
    return this.prisma.modifierGroup.create<T>(args);
  }
  async update<T extends Prisma.ModifierGroupUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ModifierGroupUpdateArgs>
  ): Promise<ModifierGroup> {
    return this.prisma.modifierGroup.update<T>(args);
  }
  async delete<T extends Prisma.ModifierGroupDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ModifierGroupDeleteArgs>
  ): Promise<ModifierGroup> {
    return this.prisma.modifierGroup.delete(args);
  }

  async getSellerModifierGroups(parentId: string): Promise<Seller | null> {
    return this.prisma.modifierGroup
      .findUnique({
        where: { id: parentId },
      })
      .sellerModifierGroups();
  }
}
