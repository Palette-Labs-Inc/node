
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../../prisma.util";
import * as errors from "../../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../../auth/defaultAuth.guard";
import { UserService } from "../user.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UserCreateInput } from "./UserCreateInput";
import { UserWhereInput } from "./UserWhereInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserUpdateInput } from "./UserUpdateInput";
import { User } from "./User";
import { FulfillmentSpecificationFindManyArgs } from "../../fulfillmentSpecification/base/FulfillmentSpecificationFindManyArgs";
import { FulfillmentSpecification } from "../../fulfillmentSpecification/base/FulfillmentSpecification";
import { FulfillmentSpecificationWhereUniqueInput } from "../../fulfillmentSpecification/base/FulfillmentSpecificationWhereUniqueInput";
import { PaymentSourceFindManyArgs } from "../../paymentSource/base/PaymentSourceFindManyArgs";
import { PaymentSource } from "../../paymentSource/base/PaymentSource";
import { PaymentSourceWhereUniqueInput } from "../../paymentSource/base/PaymentSourceWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserControllerBase {
  constructor(
    protected readonly service: UserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: User })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: UserCreateInput): Promise<User> {
    return await this.service.create({
      data: {
        ...data,

        courier: data.courier
          ? {
              connect: data.courier,
            }
          : undefined,

        individual: data.individual
          ? {
              connect: data.individual,
            }
          : undefined,

        seller: data.seller
          ? {
              connect: data.seller,
            }
          : undefined,
      },
      select: {
        courier: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        individual: {
          select: {
            id: true,
          },
        },

        roles: true,

        seller: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        username: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [User] })
  @ApiNestedQuery(UserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<User[]> {
    const args = plainToClass(UserFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        courier: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        individual: {
          select: {
            id: true,
          },
        },

        roles: true,

        seller: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        username: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        courier: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        individual: {
          select: {
            id: true,
          },
        },

        roles: true,

        seller: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        username: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() data: UserUpdateInput
  ): Promise<User | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          courier: data.courier
            ? {
                connect: data.courier,
              }
            : undefined,

          individual: data.individual
            ? {
                connect: data.individual,
              }
            : undefined,

          seller: data.seller
            ? {
                connect: data.seller,
              }
            : undefined,
        },
        select: {
          courier: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,

          individual: {
            select: {
              id: true,
            },
          },

          roles: true,

          seller: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          courier: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,

          individual: {
            select: {
              id: true,
            },
          },

          roles: true,

          seller: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/fulfillmentSpecifications")
  @ApiNestedQuery(FulfillmentSpecificationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "FulfillmentSpecification",
    action: "read",
    possession: "any",
  })
  async findManyFulfillmentSpecifications(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<FulfillmentSpecification[]> {
    const query = plainToClass(
      FulfillmentSpecificationFindManyArgs,
      request.query
    );
    const results = await this.service.findFulfillmentSpecifications(
      params.id,
      {
        ...query,
        select: {
          buyer: {
            select: {
              id: true,
            },
          },

          contact: {
            select: {
              id: true,
            },
          },

          courier: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          fulfillmentModes: true,
          id: true,
          isRateable: true,
          rating: true,

          seller: {
            select: {
              id: true,
            },
          },

          status: true,

          tracking: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          updatedBy: true,

          vehicle: {
            select: {
              id: true,
            },
          },
        },
      }
    );
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/fulfillmentSpecifications")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectFulfillmentSpecifications(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: FulfillmentSpecificationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      fulfillmentSpecifications: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/fulfillmentSpecifications")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateFulfillmentSpecifications(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: FulfillmentSpecificationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      fulfillmentSpecifications: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/fulfillmentSpecifications")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectFulfillmentSpecifications(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: FulfillmentSpecificationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      fulfillmentSpecifications: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/paymentSources")
  @ApiNestedQuery(PaymentSourceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PaymentSource",
    action: "read",
    possession: "any",
  })
  async findManyPaymentSources(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<PaymentSource[]> {
    const query = plainToClass(PaymentSourceFindManyArgs, request.query);
    const results = await this.service.findPaymentSources(params.id, {
      ...query,
      select: {
        addressCity: true,
        addressCountry: true,
        addressLine_1: true,
        addressLine_2: true,
        addressState: true,
        addressZip: true,
        cardNumber: true,
        createdAt: true,
        currencyCode: true,
        cvc: true,
        expirationMonth: true,
        expirationYear: true,
        id: true,
        name: true,
        updatedAt: true,

        users: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/paymentSources")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectPaymentSources(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: PaymentSourceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      paymentSources: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/paymentSources")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updatePaymentSources(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: PaymentSourceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      paymentSources: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/paymentSources")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectPaymentSources(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: PaymentSourceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      paymentSources: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
