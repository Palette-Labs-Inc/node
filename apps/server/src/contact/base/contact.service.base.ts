
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Contact,
  FulfillmentSpecification,
  Individual,
  Organization,
  Waypoint,
} from "@prisma/client";

export class ContactServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ContactFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContactFindManyArgs>
  ): Promise<number> {
    return this.prisma.contact.count(args);
  }

  async findMany<T extends Prisma.ContactFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContactFindManyArgs>
  ): Promise<Contact[]> {
    return this.prisma.contact.findMany(args);
  }
  async findOne<T extends Prisma.ContactFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContactFindUniqueArgs>
  ): Promise<Contact | null> {
    return this.prisma.contact.findUnique(args);
  }
  async create<T extends Prisma.ContactCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContactCreateArgs>
  ): Promise<Contact> {
    return this.prisma.contact.create<T>(args);
  }
  async update<T extends Prisma.ContactUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContactUpdateArgs>
  ): Promise<Contact> {
    return this.prisma.contact.update<T>(args);
  }
  async delete<T extends Prisma.ContactDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContactDeleteArgs>
  ): Promise<Contact> {
    return this.prisma.contact.delete(args);
  }

  async findFulfillmentSpecifications(
    parentId: string,
    args: Prisma.FulfillmentSpecificationFindManyArgs
  ): Promise<FulfillmentSpecification[]> {
    return this.prisma.contact
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .fulfillmentSpecifications(args);
  }

  async findIndividuals(
    parentId: string,
    args: Prisma.IndividualFindManyArgs
  ): Promise<Individual[]> {
    return this.prisma.contact
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .individuals(args);
  }

  async findOrganizations(
    parentId: string,
    args: Prisma.OrganizationFindManyArgs
  ): Promise<Organization[]> {
    return this.prisma.contact
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .organizations(args);
  }

  async findWaypoints(
    parentId: string,
    args: Prisma.WaypointFindManyArgs
  ): Promise<Waypoint[]> {
    return this.prisma.contact
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .waypoints(args);
  }
}
