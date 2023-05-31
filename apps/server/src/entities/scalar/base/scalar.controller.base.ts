
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ScalarService } from "../scalar.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ScalarCreateInput } from "./ScalarCreateInput";
import { ScalarWhereInput } from "./ScalarWhereInput";
import { ScalarWhereUniqueInput } from "./ScalarWhereUniqueInput";
import { ScalarFindManyArgs } from "./ScalarFindManyArgs";
import { ScalarUpdateInput } from "./ScalarUpdateInput";
import { Scalar } from "./Scalar";
import { ItemQuantityFindManyArgs } from "../../itemQuantity/base/ItemQuantityFindManyArgs";
import { ItemQuantity } from "../../itemQuantity/base/ItemQuantity";
import { ItemQuantityWhereUniqueInput } from "../../itemQuantity/base/ItemQuantityWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ScalarControllerBase {
  constructor(
    protected readonly service: ScalarService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Scalar })
  @nestAccessControl.UseRoles({
    resource: "Scalar",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: ScalarCreateInput): Promise<Scalar> {
    return await this.service.create({
      data: data,
      select: {
        classification: true,
        computedValue: true,
        estimatedValue: true,
        id: true,
        range: true,
        unit: true,
        value: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Scalar] })
  @ApiNestedQuery(ScalarFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Scalar",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Scalar[]> {
    const args = plainToClass(ScalarFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        classification: true,
        computedValue: true,
        estimatedValue: true,
        id: true,
        range: true,
        unit: true,
        value: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Scalar })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Scalar",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: ScalarWhereUniqueInput
  ): Promise<Scalar | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        classification: true,
        computedValue: true,
        estimatedValue: true,
        id: true,
        range: true,
        unit: true,
        value: true,
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
  @swagger.ApiOkResponse({ type: Scalar })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Scalar",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: ScalarWhereUniqueInput,
    @common.Body() data: ScalarUpdateInput
  ): Promise<Scalar | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          classification: true,
          computedValue: true,
          estimatedValue: true,
          id: true,
          range: true,
          unit: true,
          value: true,
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
  @swagger.ApiOkResponse({ type: Scalar })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Scalar",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: ScalarWhereUniqueInput
  ): Promise<Scalar | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          classification: true,
          computedValue: true,
          estimatedValue: true,
          id: true,
          range: true,
          unit: true,
          value: true,
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
  @common.Get("/:id/itemQuantityAllocatedMeasure")
  @ApiNestedQuery(ItemQuantityFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ItemQuantity",
    action: "read",
    possession: "any",
  })
  async findManyItemQuantityAllocatedMeasure(
    @common.Req() request: Request,
    @common.Param() params: ScalarWhereUniqueInput
  ): Promise<ItemQuantity[]> {
    const query = plainToClass(ItemQuantityFindManyArgs, request.query);
    const results = await this.service.findItemQuantityAllocatedMeasure(
      params.id,
      {
        ...query,
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
      }
    );
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/itemQuantityAllocatedMeasure")
  @nestAccessControl.UseRoles({
    resource: "Scalar",
    action: "update",
    possession: "any",
  })
  async connectItemQuantityAllocatedMeasure(
    @common.Param() params: ScalarWhereUniqueInput,
    @common.Body() body: ItemQuantityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      itemQuantityAllocatedMeasure: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/itemQuantityAllocatedMeasure")
  @nestAccessControl.UseRoles({
    resource: "Scalar",
    action: "update",
    possession: "any",
  })
  async updateItemQuantityAllocatedMeasure(
    @common.Param() params: ScalarWhereUniqueInput,
    @common.Body() body: ItemQuantityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      itemQuantityAllocatedMeasure: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/itemQuantityAllocatedMeasure")
  @nestAccessControl.UseRoles({
    resource: "Scalar",
    action: "update",
    possession: "any",
  })
  async disconnectItemQuantityAllocatedMeasure(
    @common.Param() params: ScalarWhereUniqueInput,
    @common.Body() body: ItemQuantityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      itemQuantityAllocatedMeasure: {
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
  @common.Get("/:id/itemQuantityAvailableMeasure")
  @ApiNestedQuery(ItemQuantityFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ItemQuantity",
    action: "read",
    possession: "any",
  })
  async findManyItemQuantityAvailableMeasure(
    @common.Req() request: Request,
    @common.Param() params: ScalarWhereUniqueInput
  ): Promise<ItemQuantity[]> {
    const query = plainToClass(ItemQuantityFindManyArgs, request.query);
    const results = await this.service.findItemQuantityAvailableMeasure(
      params.id,
      {
        ...query,
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
      }
    );
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/itemQuantityAvailableMeasure")
  @nestAccessControl.UseRoles({
    resource: "Scalar",
    action: "update",
    possession: "any",
  })
  async connectItemQuantityAvailableMeasure(
    @common.Param() params: ScalarWhereUniqueInput,
    @common.Body() body: ItemQuantityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      itemQuantityAvailableMeasure: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/itemQuantityAvailableMeasure")
  @nestAccessControl.UseRoles({
    resource: "Scalar",
    action: "update",
    possession: "any",
  })
  async updateItemQuantityAvailableMeasure(
    @common.Param() params: ScalarWhereUniqueInput,
    @common.Body() body: ItemQuantityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      itemQuantityAvailableMeasure: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/itemQuantityAvailableMeasure")
  @nestAccessControl.UseRoles({
    resource: "Scalar",
    action: "update",
    possession: "any",
  })
  async disconnectItemQuantityAvailableMeasure(
    @common.Param() params: ScalarWhereUniqueInput,
    @common.Body() body: ItemQuantityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      itemQuantityAvailableMeasure: {
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
  @common.Get("/:id/itemQuantityMaximumPurchasableMeasure")
  @ApiNestedQuery(ItemQuantityFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ItemQuantity",
    action: "read",
    possession: "any",
  })
  async findManyItemQuantityMaximumPurchasableMeasure(
    @common.Req() request: Request,
    @common.Param() params: ScalarWhereUniqueInput
  ): Promise<ItemQuantity[]> {
    const query = plainToClass(ItemQuantityFindManyArgs, request.query);
    const results =
      await this.service.findItemQuantityMaximumPurchasableMeasure(params.id, {
        ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/itemQuantityMaximumPurchasableMeasure")
  @nestAccessControl.UseRoles({
    resource: "Scalar",
    action: "update",
    possession: "any",
  })
  async connectItemQuantityMaximumPurchasableMeasure(
    @common.Param() params: ScalarWhereUniqueInput,
    @common.Body() body: ItemQuantityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      itemQuantityMaximumPurchasableMeasure: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/itemQuantityMaximumPurchasableMeasure")
  @nestAccessControl.UseRoles({
    resource: "Scalar",
    action: "update",
    possession: "any",
  })
  async updateItemQuantityMaximumPurchasableMeasure(
    @common.Param() params: ScalarWhereUniqueInput,
    @common.Body() body: ItemQuantityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      itemQuantityMaximumPurchasableMeasure: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/itemQuantityMaximumPurchasableMeasure")
  @nestAccessControl.UseRoles({
    resource: "Scalar",
    action: "update",
    possession: "any",
  })
  async disconnectItemQuantityMaximumPurchasableMeasure(
    @common.Param() params: ScalarWhereUniqueInput,
    @common.Body() body: ItemQuantityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      itemQuantityMaximumPurchasableMeasure: {
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
  @common.Get("/:id/itemQuantityMinimumPurchasableMeasure")
  @ApiNestedQuery(ItemQuantityFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ItemQuantity",
    action: "read",
    possession: "any",
  })
  async findManyItemQuantityMinimumPurchasableMeasure(
    @common.Req() request: Request,
    @common.Param() params: ScalarWhereUniqueInput
  ): Promise<ItemQuantity[]> {
    const query = plainToClass(ItemQuantityFindManyArgs, request.query);
    const results =
      await this.service.findItemQuantityMinimumPurchasableMeasure(params.id, {
        ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/itemQuantityMinimumPurchasableMeasure")
  @nestAccessControl.UseRoles({
    resource: "Scalar",
    action: "update",
    possession: "any",
  })
  async connectItemQuantityMinimumPurchasableMeasure(
    @common.Param() params: ScalarWhereUniqueInput,
    @common.Body() body: ItemQuantityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      itemQuantityMinimumPurchasableMeasure: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/itemQuantityMinimumPurchasableMeasure")
  @nestAccessControl.UseRoles({
    resource: "Scalar",
    action: "update",
    possession: "any",
  })
  async updateItemQuantityMinimumPurchasableMeasure(
    @common.Param() params: ScalarWhereUniqueInput,
    @common.Body() body: ItemQuantityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      itemQuantityMinimumPurchasableMeasure: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/itemQuantityMinimumPurchasableMeasure")
  @nestAccessControl.UseRoles({
    resource: "Scalar",
    action: "update",
    possession: "any",
  })
  async disconnectItemQuantityMinimumPurchasableMeasure(
    @common.Param() params: ScalarWhereUniqueInput,
    @common.Body() body: ItemQuantityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      itemQuantityMinimumPurchasableMeasure: {
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
  @common.Get("/:id/itemQuantitySelectedMeasure")
  @ApiNestedQuery(ItemQuantityFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ItemQuantity",
    action: "read",
    possession: "any",
  })
  async findManyItemQuantitySelectedMeasure(
    @common.Req() request: Request,
    @common.Param() params: ScalarWhereUniqueInput
  ): Promise<ItemQuantity[]> {
    const query = plainToClass(ItemQuantityFindManyArgs, request.query);
    const results = await this.service.findItemQuantitySelectedMeasure(
      params.id,
      {
        ...query,
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
      }
    );
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/itemQuantitySelectedMeasure")
  @nestAccessControl.UseRoles({
    resource: "Scalar",
    action: "update",
    possession: "any",
  })
  async connectItemQuantitySelectedMeasure(
    @common.Param() params: ScalarWhereUniqueInput,
    @common.Body() body: ItemQuantityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      itemQuantitySelectedMeasure: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/itemQuantitySelectedMeasure")
  @nestAccessControl.UseRoles({
    resource: "Scalar",
    action: "update",
    possession: "any",
  })
  async updateItemQuantitySelectedMeasure(
    @common.Param() params: ScalarWhereUniqueInput,
    @common.Body() body: ItemQuantityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      itemQuantitySelectedMeasure: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/itemQuantitySelectedMeasure")
  @nestAccessControl.UseRoles({
    resource: "Scalar",
    action: "update",
    possession: "any",
  })
  async disconnectItemQuantitySelectedMeasure(
    @common.Param() params: ScalarWhereUniqueInput,
    @common.Body() body: ItemQuantityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      itemQuantitySelectedMeasure: {
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
