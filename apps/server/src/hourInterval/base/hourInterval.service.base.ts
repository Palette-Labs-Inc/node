
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, HourInterval, Menu } from "@prisma/client";

export class HourIntervalServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.HourIntervalFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.HourIntervalFindManyArgs>
  ): Promise<number> {
    return this.prisma.hourInterval.count(args);
  }

  async findMany<T extends Prisma.HourIntervalFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.HourIntervalFindManyArgs>
  ): Promise<HourInterval[]> {
    return this.prisma.hourInterval.findMany(args);
  }
  async findOne<T extends Prisma.HourIntervalFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.HourIntervalFindUniqueArgs>
  ): Promise<HourInterval | null> {
    return this.prisma.hourInterval.findUnique(args);
  }
  async create<T extends Prisma.HourIntervalCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.HourIntervalCreateArgs>
  ): Promise<HourInterval> {
    return this.prisma.hourInterval.create<T>(args);
  }
  async update<T extends Prisma.HourIntervalUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.HourIntervalUpdateArgs>
  ): Promise<HourInterval> {
    return this.prisma.hourInterval.update<T>(args);
  }
  async delete<T extends Prisma.HourIntervalDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.HourIntervalDeleteArgs>
  ): Promise<HourInterval> {
    return this.prisma.hourInterval.delete(args);
  }

  async getMenus(parentId: string): Promise<Menu | null> {
    return this.prisma.hourInterval
      .findUnique({
        where: { id: parentId },
      })
      .menus();
  }
}
