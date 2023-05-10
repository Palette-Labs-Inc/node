
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Rating,
  Image,
  MediaFile,
  Courier,
  Seller,
} from "@prisma/client";

export class RatingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.RatingFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RatingFindManyArgs>
  ): Promise<number> {
    return this.prisma.rating.count(args);
  }

  async findMany<T extends Prisma.RatingFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RatingFindManyArgs>
  ): Promise<Rating[]> {
    return this.prisma.rating.findMany(args);
  }
  async findOne<T extends Prisma.RatingFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RatingFindUniqueArgs>
  ): Promise<Rating | null> {
    return this.prisma.rating.findUnique(args);
  }
  async create<T extends Prisma.RatingCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RatingCreateArgs>
  ): Promise<Rating> {
    return this.prisma.rating.create<T>(args);
  }
  async update<T extends Prisma.RatingUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RatingUpdateArgs>
  ): Promise<Rating> {
    return this.prisma.rating.update<T>(args);
  }
  async delete<T extends Prisma.RatingDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RatingDeleteArgs>
  ): Promise<Rating> {
    return this.prisma.rating.delete(args);
  }

  async findImages(
    parentId: string,
    args: Prisma.ImageFindManyArgs
  ): Promise<Image[]> {
    return this.prisma.rating
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .images(args);
  }

  async findMedia(
    parentId: string,
    args: Prisma.MediaFileFindManyArgs
  ): Promise<MediaFile[]> {
    return this.prisma.rating
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .media(args);
  }

  async getCourier(parentId: string): Promise<Courier | null> {
    return this.prisma.rating
      .findUnique({
        where: { id: parentId },
      })
      .courier();
  }

  async getSeller(parentId: string): Promise<Seller | null> {
    return this.prisma.rating
      .findUnique({
        where: { id: parentId },
      })
      .seller();
  }
}
