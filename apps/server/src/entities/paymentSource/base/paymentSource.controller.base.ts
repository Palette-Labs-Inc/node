
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { PaymentSourceService } from "../paymentSource.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PaymentSourceCreateInput } from "./PaymentSourceCreateInput";
import { PaymentSourceWhereInput } from "./PaymentSourceWhereInput";
import { PaymentSourceWhereUniqueInput } from "./PaymentSourceWhereUniqueInput";
import { PaymentSourceFindManyArgs } from "./PaymentSourceFindManyArgs";
import { PaymentSourceUpdateInput } from "./PaymentSourceUpdateInput";
import { PaymentSource } from "./PaymentSource";
import { PaymentTermFindManyArgs } from "../../paymentTerm/base/PaymentTermFindManyArgs";
import { PaymentTerm } from "../../paymentTerm/base/PaymentTerm";
import { PaymentTermWhereUniqueInput } from "../../paymentTerm/base/PaymentTermWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PaymentSourceControllerBase {
  constructor(
    protected readonly service: PaymentSourceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PaymentSource })
  @nestAccessControl.UseRoles({
    resource: "PaymentSource",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: PaymentSourceCreateInput
  ): Promise<PaymentSource> {
    return await this.service.create({
      data: {
        ...data,

        users: data.users
          ? {
              connect: data.users,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [PaymentSource] })
  @ApiNestedQuery(PaymentSourceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PaymentSource",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<PaymentSource[]> {
    const args = plainToClass(PaymentSourceFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PaymentSource })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PaymentSource",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: PaymentSourceWhereUniqueInput
  ): Promise<PaymentSource | null> {
    const result = await this.service.findOne({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: PaymentSource })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PaymentSource",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: PaymentSourceWhereUniqueInput,
    @common.Body() data: PaymentSourceUpdateInput
  ): Promise<PaymentSource | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          users: data.users
            ? {
                connect: data.users,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: PaymentSource })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PaymentSource",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: PaymentSourceWhereUniqueInput
  ): Promise<PaymentSource | null> {
    try {
      return await this.service.delete({
        where: params,
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
  @common.Get("/:id/payments")
  @ApiNestedQuery(PaymentTermFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PaymentTerm",
    action: "read",
    possession: "any",
  })
  async findManyPayments(
    @common.Req() request: Request,
    @common.Param() params: PaymentSourceWhereUniqueInput
  ): Promise<PaymentTerm[]> {
    const query = plainToClass(PaymentTermFindManyArgs, request.query);
    const results = await this.service.findPayments(params.id, {
      ...query,
      select: {
        bazaar: {
          select: {
            id: true,
          },
        },

        collectedBy: true,
        createdAt: true,
        id: true,
        lifecycleProcessing: true,

        order: {
          select: {
            id: true,
          },
        },

        paymentAmount: true,

        paymentSource: {
          select: {
            id: true,
          },
        },

        search: {
          select: {
            id: true,
          },
        },

        seller: {
          select: {
            id: true,
          },
        },

        status: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/payments")
  @nestAccessControl.UseRoles({
    resource: "PaymentSource",
    action: "update",
    possession: "any",
  })
  async connectPayments(
    @common.Param() params: PaymentSourceWhereUniqueInput,
    @common.Body() body: PaymentTermWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      payments: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/payments")
  @nestAccessControl.UseRoles({
    resource: "PaymentSource",
    action: "update",
    possession: "any",
  })
  async updatePayments(
    @common.Param() params: PaymentSourceWhereUniqueInput,
    @common.Body() body: PaymentTermWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      payments: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/payments")
  @nestAccessControl.UseRoles({
    resource: "PaymentSource",
    action: "update",
    possession: "any",
  })
  async disconnectPayments(
    @common.Param() params: PaymentSourceWhereUniqueInput,
    @common.Body() body: PaymentTermWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      payments: {
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
