
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { PaymentTermService } from "../paymentTerm.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PaymentTermCreateInput } from "./PaymentTermCreateInput";
import { PaymentTermWhereInput } from "./PaymentTermWhereInput";
import { PaymentTermWhereUniqueInput } from "./PaymentTermWhereUniqueInput";
import { PaymentTermFindManyArgs } from "./PaymentTermFindManyArgs";
import { PaymentTermUpdateInput } from "./PaymentTermUpdateInput";
import { PaymentTerm } from "./PaymentTerm";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PaymentTermControllerBase {
  constructor(
    protected readonly service: PaymentTermService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PaymentTerm })
  @nestAccessControl.UseRoles({
    resource: "PaymentTerm",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: PaymentTermCreateInput
  ): Promise<PaymentTerm> {
    return await this.service.create({
      data: {
        ...data,

        bazaar: data.bazaar
          ? {
              connect: data.bazaar,
            }
          : undefined,

        order: data.order
          ? {
              connect: data.order,
            }
          : undefined,

        paymentSource: data.paymentSource
          ? {
              connect: data.paymentSource,
            }
          : undefined,

        search: data.search
          ? {
              connect: data.search,
            }
          : undefined,

        seller: data.seller
          ? {
              connect: data.seller,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [PaymentTerm] })
  @ApiNestedQuery(PaymentTermFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PaymentTerm",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<PaymentTerm[]> {
    const args = plainToClass(PaymentTermFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PaymentTerm })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PaymentTerm",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: PaymentTermWhereUniqueInput
  ): Promise<PaymentTerm | null> {
    const result = await this.service.findOne({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: PaymentTerm })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PaymentTerm",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: PaymentTermWhereUniqueInput,
    @common.Body() data: PaymentTermUpdateInput
  ): Promise<PaymentTerm | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          bazaar: data.bazaar
            ? {
                connect: data.bazaar,
              }
            : undefined,

          order: data.order
            ? {
                connect: data.order,
              }
            : undefined,

          paymentSource: data.paymentSource
            ? {
                connect: data.paymentSource,
              }
            : undefined,

          search: data.search
            ? {
                connect: data.search,
              }
            : undefined,

          seller: data.seller
            ? {
                connect: data.seller,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: PaymentTerm })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PaymentTerm",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: PaymentTermWhereUniqueInput
  ): Promise<PaymentTerm | null> {
    try {
      return await this.service.delete({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
