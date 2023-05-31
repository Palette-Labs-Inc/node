
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Individual,
  Image,
  Waypoint,
  Contact,
  Courier,
  User,
} from "@prisma/client";

export class IndividualServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.IndividualFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.IndividualFindManyArgs>
  ): Promise<number> {
    return this.prisma.individual.count(args);
  }

  async findMany<T extends Prisma.IndividualFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.IndividualFindManyArgs>
  ): Promise<Individual[]> {
    return this.prisma.individual.findMany(args);
  }
  async findOne<T extends Prisma.IndividualFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.IndividualFindUniqueArgs>
  ): Promise<Individual | null> {
    return this.prisma.individual.findUnique(args);
  }
  async create<T extends Prisma.IndividualCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.IndividualCreateArgs>
  ): Promise<Individual> {
    return this.prisma.individual.create<T>(args);
  }
  async update<T extends Prisma.IndividualUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.IndividualUpdateArgs>
  ): Promise<Individual> {
    return this.prisma.individual.update<T>(args);
  }
  async delete<T extends Prisma.IndividualDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.IndividualDeleteArgs>
  ): Promise<Individual> {
    return this.prisma.individual.delete(args);
  }

  async findImage(
    parentId: string,
    args: Prisma.ImageFindManyArgs
  ): Promise<Image[]> {
    return this.prisma.individual
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .image(args);
  }

  async findWaypoints(
    parentId: string,
    args: Prisma.WaypointFindManyArgs
  ): Promise<Waypoint[]> {
    return this.prisma.individual
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .waypoints(args);
  }

  async getContact(parentId: string): Promise<Contact | null> {
    return this.prisma.individual
      .findUnique({
        where: { id: parentId },
      })
      .contact();
  }

  async getCouriers(parentId: string): Promise<Courier | null> {
    return this.prisma.individual
      .findUnique({
        where: { id: parentId },
      })
      .couriers();
  }

  async getUsers(parentId: string): Promise<User | null> {
    return this.prisma.individual
      .findUnique({
        where: { id: parentId },
      })
      .users();
  }
}
