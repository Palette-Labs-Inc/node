
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Seller,
  Bazaar,
  Category,
  FulfillmentSpecification,
  Location,
  MenuItem,
  Menu,
  ModifierGroup,
  Promotion,
  Rating,
  PaymentTerm,
  Search,
  User,
} from "@prisma/client";

export class SellerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SellerFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SellerFindManyArgs>
  ): Promise<number> {
    return this.prisma.seller.count(args);
  }

  async findMany<T extends Prisma.SellerFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SellerFindManyArgs>
  ): Promise<Seller[]> {
    return this.prisma.seller.findMany(args);
  }
  async findOne<T extends Prisma.SellerFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SellerFindUniqueArgs>
  ): Promise<Seller | null> {
    return this.prisma.seller.findUnique(args);
  }
  async create<T extends Prisma.SellerCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SellerCreateArgs>
  ): Promise<Seller> {
    return this.prisma.seller.create<T>(args);
  }
  async update<T extends Prisma.SellerUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SellerUpdateArgs>
  ): Promise<Seller> {
    return this.prisma.seller.update<T>(args);
  }
  async delete<T extends Prisma.SellerDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SellerDeleteArgs>
  ): Promise<Seller> {
    return this.prisma.seller.delete(args);
  }

  async findBazaar(
    parentId: string,
    args: Prisma.BazaarFindManyArgs
  ): Promise<Bazaar[]> {
    return this.prisma.seller
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .bazaar(args);
  }

  async findCategories(
    parentId: string,
    args: Prisma.CategoryFindManyArgs
  ): Promise<Category[]> {
    return this.prisma.seller
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .categories(args);
  }

  async findFulfillmentSpecifications(
    parentId: string,
    args: Prisma.FulfillmentSpecificationFindManyArgs
  ): Promise<FulfillmentSpecification[]> {
    return this.prisma.seller
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .fulfillmentSpecifications(args);
  }

  async findLocations(
    parentId: string,
    args: Prisma.LocationFindManyArgs
  ): Promise<Location[]> {
    return this.prisma.seller
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .locations(args);
  }

  async findMenuItems(
    parentId: string,
    args: Prisma.MenuItemFindManyArgs
  ): Promise<MenuItem[]> {
    return this.prisma.seller
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .menuItems(args);
  }

  async findMenus(
    parentId: string,
    args: Prisma.MenuFindManyArgs
  ): Promise<Menu[]> {
    return this.prisma.seller
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .menus(args);
  }

  async findModifierGroups(
    parentId: string,
    args: Prisma.ModifierGroupFindManyArgs
  ): Promise<ModifierGroup[]> {
    return this.prisma.seller
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .modifierGroups(args);
  }

  async findPromotions(
    parentId: string,
    args: Prisma.PromotionFindManyArgs
  ): Promise<Promotion[]> {
    return this.prisma.seller
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .promotions(args);
  }

  async findRatings(
    parentId: string,
    args: Prisma.RatingFindManyArgs
  ): Promise<Rating[]> {
    return this.prisma.seller
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .ratings(args);
  }

  async getPaymentTerm(parentId: string): Promise<PaymentTerm | null> {
    return this.prisma.seller
      .findUnique({
        where: { id: parentId },
      })
      .paymentTerm();
  }

  async getSearch(parentId: string): Promise<Search | null> {
    return this.prisma.seller
      .findUnique({
        where: { id: parentId },
      })
      .search();
  }

  async getUsers(parentId: string): Promise<User | null> {
    return this.prisma.seller
      .findUnique({
        where: { id: parentId },
      })
      .users();
  }
}
