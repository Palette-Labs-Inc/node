 
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Condition, Location } from "@prisma/client";

export class ConditionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ConditionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConditionFindManyArgs>
  ): Promise<number> {
    return this.prisma.condition.count(args);
  }

  async findMany<T extends Prisma.ConditionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConditionFindManyArgs>
  ): Promise<Condition[]> {
    return this.prisma.condition.findMany(args);
  }
  async findOne<T extends Prisma.ConditionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConditionFindUniqueArgs>
  ): Promise<Condition | null> {
    return this.prisma.condition.findUnique(args);
  }
  async create<T extends Prisma.ConditionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConditionCreateArgs>
  ): Promise<Condition> {
    return this.prisma.condition.create<T>(args);
  }
  async update<T extends Prisma.ConditionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConditionUpdateArgs>
  ): Promise<Condition> {
    return this.prisma.condition.update<T>(args);
  }
  async delete<T extends Prisma.ConditionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConditionDeleteArgs>
  ): Promise<Condition> {
    return this.prisma.condition.delete(args);
  }

  async getLocation(parentId: string): Promise<Location | null> {
    return this.prisma.condition
      .findUnique({
        where: { id: parentId },
      })
      .location();
  }
}
