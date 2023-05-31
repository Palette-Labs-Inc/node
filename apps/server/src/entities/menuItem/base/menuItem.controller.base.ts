
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { MenuItemService } from "../menuItem.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MenuItemCreateInput } from "./MenuItemCreateInput";
import { MenuItemWhereInput } from "./MenuItemWhereInput";
import { MenuItemWhereUniqueInput } from "./MenuItemWhereUniqueInput";
import { MenuItemFindManyArgs } from "./MenuItemFindManyArgs";
import { MenuItemUpdateInput } from "./MenuItemUpdateInput";
import { MenuItem } from "./MenuItem";
import { ImageFindManyArgs } from "../../image/base/ImageFindManyArgs";
import { Image } from "../../image/base/Image";
import { ImageWhereUniqueInput } from "../../image/base/ImageWhereUniqueInput";
import { MediaFileFindManyArgs } from "../../mediaFile/base/MediaFileFindManyArgs";
import { MediaFile } from "../../mediaFile/base/MediaFile";
import { MediaFileWhereUniqueInput } from "../../mediaFile/base/MediaFileWhereUniqueInput";
import { OrderFindManyArgs } from "../../order/base/OrderFindManyArgs";
import { Order } from "../../order/base/Order";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { OrganizationFindManyArgs } from "../../organization/base/OrganizationFindManyArgs";
import { Organization } from "../../organization/base/Organization";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { QuoteFindManyArgs } from "../../quote/base/QuoteFindManyArgs";
import { Quote } from "../../quote/base/Quote";
import { QuoteWhereUniqueInput } from "../../quote/base/QuoteWhereUniqueInput";
import { SearchFindManyArgs } from "../../search/base/SearchFindManyArgs";
import { Search } from "../../search/base/Search";
import { SearchWhereUniqueInput } from "../../search/base/SearchWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MenuItemControllerBase {
  constructor(
    protected readonly service: MenuItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MenuItem })
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: MenuItemCreateInput): Promise<MenuItem> {
    return await this.service.create({
      data: {
        ...data,

        quantity: data.quantity
          ? {
              connect: data.quantity,
            }
          : undefined,

        sellers: data.sellers
          ? {
              connect: data.sellers,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        currencyCode: true,
        fulfillmentModes: true,
        id: true,
        isRateable: true,
        locationIDs: true,
        modifierGroupIDs: true,
        paymentModes: true,
        price: true,

        quantity: {
          select: {
            id: true,
          },
        },

        rating: true,

        sellers: {
          select: {
            id: true,
          },
        },

        timeToLive: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [MenuItem] })
  @ApiNestedQuery(MenuItemFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<MenuItem[]> {
    const args = plainToClass(MenuItemFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        currencyCode: true,
        fulfillmentModes: true,
        id: true,
        isRateable: true,
        locationIDs: true,
        modifierGroupIDs: true,
        paymentModes: true,
        price: true,

        quantity: {
          select: {
            id: true,
          },
        },

        rating: true,

        sellers: {
          select: {
            id: true,
          },
        },

        timeToLive: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MenuItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: MenuItemWhereUniqueInput
  ): Promise<MenuItem | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        currencyCode: true,
        fulfillmentModes: true,
        id: true,
        isRateable: true,
        locationIDs: true,
        modifierGroupIDs: true,
        paymentModes: true,
        price: true,

        quantity: {
          select: {
            id: true,
          },
        },

        rating: true,

        sellers: {
          select: {
            id: true,
          },
        },

        timeToLive: true,
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
  @swagger.ApiOkResponse({ type: MenuItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: MenuItemWhereUniqueInput,
    @common.Body() data: MenuItemUpdateInput
  ): Promise<MenuItem | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          quantity: data.quantity
            ? {
                connect: data.quantity,
              }
            : undefined,

          sellers: data.sellers
            ? {
                connect: data.sellers,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          currencyCode: true,
          fulfillmentModes: true,
          id: true,
          isRateable: true,
          locationIDs: true,
          modifierGroupIDs: true,
          paymentModes: true,
          price: true,

          quantity: {
            select: {
              id: true,
            },
          },

          rating: true,

          sellers: {
            select: {
              id: true,
            },
          },

          timeToLive: true,
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
  @swagger.ApiOkResponse({ type: MenuItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: MenuItemWhereUniqueInput
  ): Promise<MenuItem | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          currencyCode: true,
          fulfillmentModes: true,
          id: true,
          isRateable: true,
          locationIDs: true,
          modifierGroupIDs: true,
          paymentModes: true,
          price: true,

          quantity: {
            select: {
              id: true,
            },
          },

          rating: true,

          sellers: {
            select: {
              id: true,
            },
          },

          timeToLive: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/images")
  @ApiNestedQuery(ImageFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Image",
    action: "read",
    possession: "any",
  })
  async findManyImages(
    @common.Req() request: Request,
    @common.Param() params: MenuItemWhereUniqueInput
  ): Promise<Image[]> {
    const query = plainToClass(ImageFindManyArgs, request.query);
    const results = await this.service.findImages(params.id, {
      ...query,
      select: {
        createdAt: true,
        height: true,
        id: true,

        individuals: {
          select: {
            id: true,
          },
        },

        menuItem: {
          select: {
            id: true,
          },
        },

        rating: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        url: true,
        width: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/images")
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "update",
    possession: "any",
  })
  async connectImages(
    @common.Param() params: MenuItemWhereUniqueInput,
    @common.Body() body: ImageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      images: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/images")
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "update",
    possession: "any",
  })
  async updateImages(
    @common.Param() params: MenuItemWhereUniqueInput,
    @common.Body() body: ImageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      images: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/images")
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "update",
    possession: "any",
  })
  async disconnectImages(
    @common.Param() params: MenuItemWhereUniqueInput,
    @common.Body() body: ImageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      images: {
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
  @common.Get("/:id/mediaFile")
  @ApiNestedQuery(MediaFileFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MediaFile",
    action: "read",
    possession: "any",
  })
  async findManyMediaFile(
    @common.Req() request: Request,
    @common.Param() params: MenuItemWhereUniqueInput
  ): Promise<MediaFile[]> {
    const query = plainToClass(MediaFileFindManyArgs, request.query);
    const results = await this.service.findMediaFile(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        menuItems: {
          select: {
            id: true,
          },
        },

        mimeType: true,

        rating: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        url: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/mediaFile")
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "update",
    possession: "any",
  })
  async connectMediaFile(
    @common.Param() params: MenuItemWhereUniqueInput,
    @common.Body() body: MediaFileWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      mediaFile: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/mediaFile")
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "update",
    possession: "any",
  })
  async updateMediaFile(
    @common.Param() params: MenuItemWhereUniqueInput,
    @common.Body() body: MediaFileWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      mediaFile: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/mediaFile")
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "update",
    possession: "any",
  })
  async disconnectMediaFile(
    @common.Param() params: MenuItemWhereUniqueInput,
    @common.Body() body: MediaFileWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      mediaFile: {
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
  @common.Get("/:id/menuItemsSelectedModifiers")
  @ApiNestedQuery(MenuItemFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "read",
    possession: "any",
  })
  async findManyMenuItemsSelectedModifiers(
    @common.Req() request: Request,
    @common.Param() params: MenuItemWhereUniqueInput
  ): Promise<MenuItem[]> {
    const query = plainToClass(MenuItemFindManyArgs, request.query);
    const results = await this.service.findMenuItemsSelectedModifiers(
      params.id,
      {
        ...query,
        select: {
          createdAt: true,
          currencyCode: true,
          fulfillmentModes: true,
          id: true,
          isRateable: true,
          locationIDs: true,
          modifierGroupIDs: true,
          paymentModes: true,
          price: true,

          quantity: {
            select: {
              id: true,
            },
          },

          rating: true,

          sellers: {
            select: {
              id: true,
            },
          },

          timeToLive: true,
          updatedAt: true,
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

  @common.Post("/:id/menuItemsSelectedModifiers")
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "update",
    possession: "any",
  })
  async connectMenuItemsSelectedModifiers(
    @common.Param() params: MenuItemWhereUniqueInput,
    @common.Body() body: MenuItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      menuItemsSelectedModifiers: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/menuItemsSelectedModifiers")
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "update",
    possession: "any",
  })
  async updateMenuItemsSelectedModifiers(
    @common.Param() params: MenuItemWhereUniqueInput,
    @common.Body() body: MenuItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      menuItemsSelectedModifiers: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/menuItemsSelectedModifiers")
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "update",
    possession: "any",
  })
  async disconnectMenuItemsSelectedModifiers(
    @common.Param() params: MenuItemWhereUniqueInput,
    @common.Body() body: MenuItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      menuItemsSelectedModifiers: {
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
  @common.Get("/:id/orders")
  @ApiNestedQuery(OrderFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  async findManyOrders(
    @common.Req() request: Request,
    @common.Param() params: MenuItemWhereUniqueInput
  ): Promise<Order[]> {
    const query = plainToClass(OrderFindManyArgs, request.query);
    const results = await this.service.findOrders(params.id, {
      ...query,
      select: {
        billing: {
          select: {
            id: true,
          },
        },

        cancellation: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        fulfillmentSpecification: {
          select: {
            id: true,
          },
        },

        id: true,

        paymentTerm: {
          select: {
            id: true,
          },
        },

        referenceOrderIds: true,
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

  @common.Post("/:id/orders")
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "update",
    possession: "any",
  })
  async connectOrders(
    @common.Param() params: MenuItemWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/orders")
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "update",
    possession: "any",
  })
  async updateOrders(
    @common.Param() params: MenuItemWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/orders")
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "update",
    possession: "any",
  })
  async disconnectOrders(
    @common.Param() params: MenuItemWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
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
  @common.Get("/:id/organization")
  @ApiNestedQuery(OrganizationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "any",
  })
  async findManyOrganization(
    @common.Req() request: Request,
    @common.Param() params: MenuItemWhereUniqueInput
  ): Promise<Organization[]> {
    const query = plainToClass(OrganizationFindManyArgs, request.query);
    const results = await this.service.findOrganization(params.id, {
      ...query,
      select: {
        address: true,
        createdAt: true,
        id: true,
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

  @common.Post("/:id/organization")
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "update",
    possession: "any",
  })
  async connectOrganization(
    @common.Param() params: MenuItemWhereUniqueInput,
    @common.Body() body: OrganizationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      organization: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/organization")
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "update",
    possession: "any",
  })
  async updateOrganization(
    @common.Param() params: MenuItemWhereUniqueInput,
    @common.Body() body: OrganizationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      organization: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/organization")
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "update",
    possession: "any",
  })
  async disconnectOrganization(
    @common.Param() params: MenuItemWhereUniqueInput,
    @common.Body() body: OrganizationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      organization: {
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
  @common.Get("/:id/quotes")
  @ApiNestedQuery(QuoteFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Quote",
    action: "read",
    possession: "any",
  })
  async findManyQuotes(
    @common.Req() request: Request,
    @common.Param() params: MenuItemWhereUniqueInput
  ): Promise<Quote[]> {
    const query = plainToClass(QuoteFindManyArgs, request.query);
    const results = await this.service.findQuotes(params.id, {
      ...query,
      select: {
        createdAt: true,
        currencyCode: true,
        id: true,
        timeToLive: true,
        totalPrice: true,
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

  @common.Post("/:id/quotes")
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "update",
    possession: "any",
  })
  async connectQuotes(
    @common.Param() params: MenuItemWhereUniqueInput,
    @common.Body() body: QuoteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      quotes: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/quotes")
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "update",
    possession: "any",
  })
  async updateQuotes(
    @common.Param() params: MenuItemWhereUniqueInput,
    @common.Body() body: QuoteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      quotes: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/quotes")
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "update",
    possession: "any",
  })
  async disconnectQuotes(
    @common.Param() params: MenuItemWhereUniqueInput,
    @common.Body() body: QuoteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      quotes: {
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
  @common.Get("/:id/searches")
  @ApiNestedQuery(SearchFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Search",
    action: "read",
    possession: "any",
  })
  async findManySearches(
    @common.Req() request: Request,
    @common.Param() params: MenuItemWhereUniqueInput
  ): Promise<Search[]> {
    const query = plainToClass(SearchFindManyArgs, request.query);
    const results = await this.service.findSearches(params.id, {
      ...query,
      select: {
        createdAt: true,

        fulfillmentSpecification: {
          select: {
            id: true,
          },
        },

        id: true,

        menuItems: {
          select: {
            id: true,
          },
        },

        paymentTerm: {
          select: {
            id: true,
          },
        },

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

  @common.Post("/:id/searches")
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "update",
    possession: "any",
  })
  async connectSearches(
    @common.Param() params: MenuItemWhereUniqueInput,
    @common.Body() body: SearchWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      searches: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/searches")
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "update",
    possession: "any",
  })
  async updateSearches(
    @common.Param() params: MenuItemWhereUniqueInput,
    @common.Body() body: SearchWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      searches: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/searches")
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "update",
    possession: "any",
  })
  async disconnectSearches(
    @common.Param() params: MenuItemWhereUniqueInput,
    @common.Body() body: SearchWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      searches: {
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
  @common.Get("/:id/selectedModifiers")
  @ApiNestedQuery(MenuItemFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "read",
    possession: "any",
  })
  async findManySelectedModifiers(
    @common.Req() request: Request,
    @common.Param() params: MenuItemWhereUniqueInput
  ): Promise<MenuItem[]> {
    const query = plainToClass(MenuItemFindManyArgs, request.query);
    const results = await this.service.findSelectedModifiers(params.id, {
      ...query,
      select: {
        createdAt: true,
        currencyCode: true,
        fulfillmentModes: true,
        id: true,
        isRateable: true,
        locationIDs: true,
        modifierGroupIDs: true,
        paymentModes: true,
        price: true,

        quantity: {
          select: {
            id: true,
          },
        },

        rating: true,

        sellers: {
          select: {
            id: true,
          },
        },

        timeToLive: true,
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

  @common.Post("/:id/selectedModifiers")
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "update",
    possession: "any",
  })
  async connectSelectedModifiers(
    @common.Param() params: MenuItemWhereUniqueInput,
    @common.Body() body: MenuItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      selectedModifiers: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/selectedModifiers")
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "update",
    possession: "any",
  })
  async updateSelectedModifiers(
    @common.Param() params: MenuItemWhereUniqueInput,
    @common.Body() body: MenuItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      selectedModifiers: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/selectedModifiers")
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "update",
    possession: "any",
  })
  async disconnectSelectedModifiers(
    @common.Param() params: MenuItemWhereUniqueInput,
    @common.Body() body: MenuItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      selectedModifiers: {
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
