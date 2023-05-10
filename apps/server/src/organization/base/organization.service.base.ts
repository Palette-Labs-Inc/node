
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Organization,
  Billing,
  Contact,
  Courier,
  Location,
  MenuItem,
} from "@prisma/client";

export class OrganizationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.OrganizationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationFindManyArgs>
  ): Promise<number> {
    return this.prisma.organization.count(args);
  }

  async findMany<T extends Prisma.OrganizationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationFindManyArgs>
  ): Promise<Organization[]> {
    return this.prisma.organization.findMany(args);
  }
  async findOne<T extends Prisma.OrganizationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationFindUniqueArgs>
  ): Promise<Organization | null> {
    return this.prisma.organization.findUnique(args);
  }
  async create<T extends Prisma.OrganizationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationCreateArgs>
  ): Promise<Organization> {
    return this.prisma.organization.create<T>(args);
  }
  async update<T extends Prisma.OrganizationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationUpdateArgs>
  ): Promise<Organization> {
    return this.prisma.organization.update<T>(args);
  }
  async delete<T extends Prisma.OrganizationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationDeleteArgs>
  ): Promise<Organization> {
    return this.prisma.organization.delete(args);
  }

  async findBillings(
    parentId: string,
    args: Prisma.BillingFindManyArgs
  ): Promise<Billing[]> {
    return this.prisma.organization
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .billings(args);
  }

  async findContact(
    parentId: string,
    args: Prisma.ContactFindManyArgs
  ): Promise<Contact[]> {
    return this.prisma.organization
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .contact(args);
  }

  async findCouriers(
    parentId: string,
    args: Prisma.CourierFindManyArgs
  ): Promise<Courier[]> {
    return this.prisma.organization
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .couriers(args);
  }

  async findLocation(
    parentId: string,
    args: Prisma.LocationFindManyArgs
  ): Promise<Location[]> {
    return this.prisma.organization
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .location(args);
  }

  async findMenuItems(
    parentId: string,
    args: Prisma.MenuItemFindManyArgs
  ): Promise<MenuItem[]> {
    return this.prisma.organization
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .menuItems(args);
  }
}
