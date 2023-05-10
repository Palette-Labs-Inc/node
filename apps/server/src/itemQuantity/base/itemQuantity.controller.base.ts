
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ItemQuantityService } from "../itemQuantity.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ItemQuantityCreateInput } from "./ItemQuantityCreateInput";
import { ItemQuantityWhereInput } from "./ItemQuantityWhereInput";
import { ItemQuantityWhereUniqueInput } from "./ItemQuantityWhereUniqueInput";
import { ItemQuantityFindManyArgs } from "./ItemQuantityFindManyArgs";
import { ItemQuantityUpdateInput } from "./ItemQuantityUpdateInput";
import { ItemQuantity } from "./ItemQuantity";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ItemQuantityControllerBase {
  constructor(
    protected readonly service: ItemQuantityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ItemQuantity })
  @nestAccessControl.UseRoles({
    resource: "ItemQuantity",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: ItemQuantityCreateInput
  ): Promise<ItemQuantity> {
    return await this.service.create({
      data: {
        ...data,

        allocatedMeasure: {
          connect: data.allocatedMeasure,
        },

        availableMeasure: {
          connect: data.availableMeasure,
        },

        maximumPurchasableMeasure: {
          connect: data.maximumPurchasableMeasure,
        },

        menuItem: data.menuItem
          ? {
              connect: data.menuItem,
            }
          : undefined,

        minimumPurchasableMeasure: data.minimumPurchasableMeasure
          ? {
              connect: data.minimumPurchasableMeasure,
            }
          : undefined,

        selectedMeasure: data.selectedMeasure
          ? {
              connect: data.selectedMeasure,
            }
          : undefined,
      },
      select: {
        allocatedCount: true,

        allocatedMeasure: {
          select: {
            id: true,
          },
        },

        availableCount: true,

        availableMeasure: {
          select: {
            id: true,
          },
        },

        id: true,
        maximumPurchasableCount: true,

        maximumPurchasableMeasure: {
          select: {
            id: true,
          },
        },

        menuItem: {
          select: {
            id: true,
          },
        },

        minimumPurchasableCount: true,

        minimumPurchasableMeasure: {
          select: {
            id: true,
          },
        },

        selectedCount: true,

        selectedMeasure: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [ItemQuantity] })
  @ApiNestedQuery(ItemQuantityFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ItemQuantity",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<ItemQuantity[]> {
    const args = plainToClass(ItemQuantityFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        allocatedCount: true,

        allocatedMeasure: {
          select: {
            id: true,
          },
        },

        availableCount: true,

        availableMeasure: {
          select: {
            id: true,
          },
        },

        id: true,
        maximumPurchasableCount: true,

        maximumPurchasableMeasure: {
          select: {
            id: true,
          },
        },

        menuItem: {
          select: {
            id: true,
          },
        },

        minimumPurchasableCount: true,

        minimumPurchasableMeasure: {
          select: {
            id: true,
          },
        },

        selectedCount: true,

        selectedMeasure: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ItemQuantity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ItemQuantity",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: ItemQuantityWhereUniqueInput
  ): Promise<ItemQuantity | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        allocatedCount: true,

        allocatedMeasure: {
          select: {
            id: true,
          },
        },

        availableCount: true,

        availableMeasure: {
          select: {
            id: true,
          },
        },

        id: true,
        maximumPurchasableCount: true,

        maximumPurchasableMeasure: {
          select: {
            id: true,
          },
        },

        menuItem: {
          select: {
            id: true,
          },
        },

        minimumPurchasableCount: true,

        minimumPurchasableMeasure: {
          select: {
            id: true,
          },
        },

        selectedCount: true,

        selectedMeasure: {
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
  @swagger.ApiOkResponse({ type: ItemQuantity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ItemQuantity",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: ItemQuantityWhereUniqueInput,
    @common.Body() data: ItemQuantityUpdateInput
  ): Promise<ItemQuantity | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          allocatedMeasure: {
            connect: data.allocatedMeasure,
          },

          availableMeasure: {
            connect: data.availableMeasure,
          },

          maximumPurchasableMeasure: {
            connect: data.maximumPurchasableMeasure,
          },

          menuItem: data.menuItem
            ? {
                connect: data.menuItem,
              }
            : undefined,

          minimumPurchasableMeasure: data.minimumPurchasableMeasure
            ? {
                connect: data.minimumPurchasableMeasure,
              }
            : undefined,

          selectedMeasure: data.selectedMeasure
            ? {
                connect: data.selectedMeasure,
              }
            : undefined,
        },
        select: {
          allocatedCount: true,

          allocatedMeasure: {
            select: {
              id: true,
            },
          },

          availableCount: true,

          availableMeasure: {
            select: {
              id: true,
            },
          },

          id: true,
          maximumPurchasableCount: true,

          maximumPurchasableMeasure: {
            select: {
              id: true,
            },
          },

          menuItem: {
            select: {
              id: true,
            },
          },

          minimumPurchasableCount: true,

          minimumPurchasableMeasure: {
            select: {
              id: true,
            },
          },

          selectedCount: true,

          selectedMeasure: {
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
  @swagger.ApiOkResponse({ type: ItemQuantity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ItemQuantity",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: ItemQuantityWhereUniqueInput
  ): Promise<ItemQuantity | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          allocatedCount: true,

          allocatedMeasure: {
            select: {
              id: true,
            },
          },

          availableCount: true,

          availableMeasure: {
            select: {
              id: true,
            },
          },

          id: true,
          maximumPurchasableCount: true,

          maximumPurchasableMeasure: {
            select: {
              id: true,
            },
          },

          menuItem: {
            select: {
              id: true,
            },
          },

          minimumPurchasableCount: true,

          minimumPurchasableMeasure: {
            select: {
              id: true,
            },
          },

          selectedCount: true,

          selectedMeasure: {
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
}
