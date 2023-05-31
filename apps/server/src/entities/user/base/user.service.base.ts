
import { PrismaService } from "../../../prisma/prisma.service";

import {
  Prisma,
  User,
  FulfillmentSpecification,
  PaymentSource,
  Courier,
  Individual,
  Seller,
} from "@prisma/client";

import { PasswordService } from "../../../auth/password.service";
import { transformStringFieldUpdateInput } from "../../../prisma.util";

export class UserServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly passwordService: PasswordService
  ) {}

  async count<T extends Prisma.UserFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindManyArgs>
  ): Promise<number> {
    return this.prisma.user.count(args);
  }

  async findMany<T extends Prisma.UserFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindManyArgs>
  ): Promise<User[]> {
    return this.prisma.user.findMany(args);
  }
  async findOne<T extends Prisma.UserFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindUniqueArgs>
  ): Promise<User | null> {
    return this.prisma.user.findUnique(args);
  }
  async create<T extends Prisma.UserCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserCreateArgs>
  ): Promise<User> {
    return this.prisma.user.create<T>({
      ...args,

      data: {
        ...args.data,
        password: await this.passwordService.hash(args.data.password),
      },
    });
  }
  async update<T extends Prisma.UserUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserUpdateArgs>
  ): Promise<User> {
    return this.prisma.user.update<T>({
      ...args,

      data: {
        ...args.data,

        password:
          args.data.password &&
          (await transformStringFieldUpdateInput(
            args.data.password,
            (password) => this.passwordService.hash(password)
          )),
      },
    });
  }
  async delete<T extends Prisma.UserDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserDeleteArgs>
  ): Promise<User> {
    return this.prisma.user.delete(args);
  }

  async findFulfillmentSpecifications(
    parentId: string,
    args: Prisma.FulfillmentSpecificationFindManyArgs
  ): Promise<FulfillmentSpecification[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .fulfillmentSpecifications(args);
  }

  async findPaymentSources(
    parentId: string,
    args: Prisma.PaymentSourceFindManyArgs
  ): Promise<PaymentSource[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .paymentSources(args);
  }

  async getCourier(parentId: string): Promise<Courier | null> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .courier();
  }

  async getIndividual(parentId: string): Promise<Individual | null> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .individual();
  }

  async getSeller(parentId: string): Promise<Seller | null> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .seller();
  }
}
