
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  MenuItem,
  Image,
  MediaFile,
  Order,
  Organization,
  Quote,
  Search,
  ItemQuantity,
  Seller,
} from "@prisma/client";

export class MenuItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MenuItemFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuItemFindManyArgs>
  ): Promise<number> {
    return this.prisma.menuItem.count(args);
  }

  async findMany<T extends Prisma.MenuItemFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuItemFindManyArgs>
  ): Promise<MenuItem[]> {
    return this.prisma.menuItem.findMany(args);
  }
  async findOne<T extends Prisma.MenuItemFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuItemFindUniqueArgs>
  ): Promise<MenuItem | null> {
    return this.prisma.menuItem.findUnique(args);
  }
  async create<T extends Prisma.MenuItemCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuItemCreateArgs>
  ): Promise<MenuItem> {
    return this.prisma.menuItem.create<T>(args);
  }
  async update<T extends Prisma.MenuItemUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuItemUpdateArgs>
  ): Promise<MenuItem> {
    return this.prisma.menuItem.update<T>(args);
  }
  async delete<T extends Prisma.MenuItemDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuItemDeleteArgs>
  ): Promise<MenuItem> {
    return this.prisma.menuItem.delete(args);
  }

  async findImages(
    parentId: string,
    args: Prisma.ImageFindManyArgs
  ): Promise<Image[]> {
    return this.prisma.menuItem
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .images(args);
  }

  async findMediaFile(
    parentId: string,
    args: Prisma.MediaFileFindManyArgs
  ): Promise<MediaFile[]> {
    return this.prisma.menuItem
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .mediaFile(args);
  }

  async findMenuItemsSelectedModifiers(
    parentId: string,
    args: Prisma.MenuItemFindManyArgs
  ): Promise<MenuItem[]> {
    return this.prisma.menuItem
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .menuItemsSelectedModifiers(args);
  }

  async findOrders(
    parentId: string,
    args: Prisma.OrderFindManyArgs
  ): Promise<Order[]> {
    return this.prisma.menuItem
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .orders(args);
  }

  async findOrganization(
    parentId: string,
    args: Prisma.OrganizationFindManyArgs
  ): Promise<Organization[]> {
    return this.prisma.menuItem
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .organization(args);
  }

  async findQuotes(
    parentId: string,
    args: Prisma.QuoteFindManyArgs
  ): Promise<Quote[]> {
    return this.prisma.menuItem
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .quotes(args);
  }

  async findSearches(
    parentId: string,
    args: Prisma.SearchFindManyArgs
  ): Promise<Search[]> {
    return this.prisma.menuItem
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .searches(args);
  }

  async findSelectedModifiers(
    parentId: string,
    args: Prisma.MenuItemFindManyArgs
  ): Promise<MenuItem[]> {
    return this.prisma.menuItem
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .selectedModifiers(args);
  }

  async getQuantity(parentId: string): Promise<ItemQuantity | null> {
    return this.prisma.menuItem
      .findUnique({
        where: { id: parentId },
      })
      .quantity();
  }

  async getSellers(parentId: string): Promise<Seller | null> {
    return this.prisma.menuItem
      .findUnique({
        where: { id: parentId },
      })
      .sellers();
  }
}
