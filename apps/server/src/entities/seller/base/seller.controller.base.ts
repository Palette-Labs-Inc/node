
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { SellerService } from "../seller.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SellerCreateInput } from "./SellerCreateInput";
import { SellerWhereInput } from "./SellerWhereInput";
import { SellerWhereUniqueInput } from "./SellerWhereUniqueInput";
import { SellerFindManyArgs } from "./SellerFindManyArgs";
import { SellerUpdateInput } from "./SellerUpdateInput";
import { Seller } from "./Seller";
import { BazaarFindManyArgs } from "../../bazaar/base/BazaarFindManyArgs";
import { Bazaar } from "../../bazaar/base/Bazaar";
import { BazaarWhereUniqueInput } from "../../bazaar/base/BazaarWhereUniqueInput";
import { CategoryFindManyArgs } from "../../category/base/CategoryFindManyArgs";
import { Category } from "../../category/base/Category";
import { CategoryWhereUniqueInput } from "../../category/base/CategoryWhereUniqueInput";
import { FulfillmentSpecificationFindManyArgs } from "../../fulfillmentSpecification/base/FulfillmentSpecificationFindManyArgs";
import { FulfillmentSpecification } from "../../fulfillmentSpecification/base/FulfillmentSpecification";
import { FulfillmentSpecificationWhereUniqueInput } from "../../fulfillmentSpecification/base/FulfillmentSpecificationWhereUniqueInput";
import { LocationFindManyArgs } from "../../location/base/LocationFindManyArgs";
import { Location } from "../../location/base/Location";
import { LocationWhereUniqueInput } from "../../location/base/LocationWhereUniqueInput";
import { MenuItemFindManyArgs } from "../../menuItem/base/MenuItemFindManyArgs";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { MenuItemWhereUniqueInput } from "../../menuItem/base/MenuItemWhereUniqueInput";
import { MenuFindManyArgs } from "../../menu/base/MenuFindManyArgs";
import { Menu } from "../../menu/base/Menu";
import { MenuWhereUniqueInput } from "../../menu/base/MenuWhereUniqueInput";
import { ModifierGroupFindManyArgs } from "../../modifierGroup/base/ModifierGroupFindManyArgs";
import { ModifierGroup } from "../../modifierGroup/base/ModifierGroup";
import { ModifierGroupWhereUniqueInput } from "../../modifierGroup/base/ModifierGroupWhereUniqueInput";
import { PromotionFindManyArgs } from "../../promotion/base/PromotionFindManyArgs";
import { Promotion } from "../../promotion/base/Promotion";
import { PromotionWhereUniqueInput } from "../../promotion/base/PromotionWhereUniqueInput";
import { RatingFindManyArgs } from "../../rating/base/RatingFindManyArgs";
import { Rating } from "../../rating/base/Rating";
import { RatingWhereUniqueInput } from "../../rating/base/RatingWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SellerControllerBase {
  constructor(
    protected readonly service: SellerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Seller })
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: SellerCreateInput): Promise<Seller> {
    return await this.service.create({
      data: {
        ...data,

        paymentTerm: data.paymentTerm
          ? {
              connect: data.paymentTerm,
            }
          : undefined,

        search: data.search
          ? {
              connect: data.search,
            }
          : undefined,

        users: {
          connect: data.users,
        },
      },
      select: {
        createdAt: true,
        holidays: true,
        id: true,
        isRateable: true,
        password: true,

        paymentTerm: {
          select: {
            id: true,
          },
        },

        rating: true,

        search: {
          select: {
            id: true,
          },
        },

        sellerClassificationId: true,
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
  @swagger.ApiOkResponse({ type: [Seller] })
  @ApiNestedQuery(SellerFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Seller[]> {
    const args = plainToClass(SellerFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        holidays: true,
        id: true,
        isRateable: true,
        password: true,

        paymentTerm: {
          select: {
            id: true,
          },
        },

        rating: true,

        search: {
          select: {
            id: true,
          },
        },

        sellerClassificationId: true,
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
  @swagger.ApiOkResponse({ type: Seller })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: SellerWhereUniqueInput
  ): Promise<Seller | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        holidays: true,
        id: true,
        isRateable: true,
        password: true,

        paymentTerm: {
          select: {
            id: true,
          },
        },

        rating: true,

        search: {
          select: {
            id: true,
          },
        },

        sellerClassificationId: true,
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
  @swagger.ApiOkResponse({ type: Seller })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: SellerWhereUniqueInput,
    @common.Body() data: SellerUpdateInput
  ): Promise<Seller | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          paymentTerm: data.paymentTerm
            ? {
                connect: data.paymentTerm,
              }
            : undefined,

          search: data.search
            ? {
                connect: data.search,
              }
            : undefined,

          users: {
            connect: data.users,
          },
        },
        select: {
          createdAt: true,
          holidays: true,
          id: true,
          isRateable: true,
          password: true,

          paymentTerm: {
            select: {
              id: true,
            },
          },

          rating: true,

          search: {
            select: {
              id: true,
            },
          },

          sellerClassificationId: true,
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
  @swagger.ApiOkResponse({ type: Seller })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: SellerWhereUniqueInput
  ): Promise<Seller | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          holidays: true,
          id: true,
          isRateable: true,
          password: true,

          paymentTerm: {
            select: {
              id: true,
            },
          },

          rating: true,

          search: {
            select: {
              id: true,
            },
          },

          sellerClassificationId: true,
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
  @common.Get("/:id/bazaar")
  @ApiNestedQuery(BazaarFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Bazaar",
    action: "read",
    possession: "any",
  })
  async findManyBazaar(
    @common.Req() request: Request,
    @common.Param() params: SellerWhereUniqueInput
  ): Promise<Bazaar[]> {
    const query = plainToClass(BazaarFindManyArgs, request.query);
    const results = await this.service.findBazaar(params.id, {
      ...query,
      select: {
        createdAt: true,
        fulfillmentModes: true,
        id: true,

        paymentTerms: {
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

  @common.Post("/:id/bazaar")
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "update",
    possession: "any",
  })
  async connectBazaar(
    @common.Param() params: SellerWhereUniqueInput,
    @common.Body() body: BazaarWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bazaar: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/bazaar")
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "update",
    possession: "any",
  })
  async updateBazaar(
    @common.Param() params: SellerWhereUniqueInput,
    @common.Body() body: BazaarWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bazaar: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/bazaar")
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "update",
    possession: "any",
  })
  async disconnectBazaar(
    @common.Param() params: SellerWhereUniqueInput,
    @common.Body() body: BazaarWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bazaar: {
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
  @common.Get("/:id/categories")
  @ApiNestedQuery(CategoryFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "read",
    possession: "any",
  })
  async findManyCategories(
    @common.Req() request: Request,
    @common.Param() params: SellerWhereUniqueInput
  ): Promise<Category[]> {
    const query = plainToClass(CategoryFindManyArgs, request.query);
    const results = await this.service.findCategories(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        menuItemIDs: true,

        seller: {
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

  @common.Post("/:id/categories")
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "update",
    possession: "any",
  })
  async connectCategories(
    @common.Param() params: SellerWhereUniqueInput,
    @common.Body() body: CategoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      categories: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/categories")
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "update",
    possession: "any",
  })
  async updateCategories(
    @common.Param() params: SellerWhereUniqueInput,
    @common.Body() body: CategoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      categories: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/categories")
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "update",
    possession: "any",
  })
  async disconnectCategories(
    @common.Param() params: SellerWhereUniqueInput,
    @common.Body() body: CategoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      categories: {
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
  @common.Get("/:id/fulfillmentSpecifications")
  @ApiNestedQuery(FulfillmentSpecificationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "FulfillmentSpecification",
    action: "read",
    possession: "any",
  })
  async findManyFulfillmentSpecifications(
    @common.Req() request: Request,
    @common.Param() params: SellerWhereUniqueInput
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
    resource: "Seller",
    action: "update",
    possession: "any",
  })
  async connectFulfillmentSpecifications(
    @common.Param() params: SellerWhereUniqueInput,
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
    resource: "Seller",
    action: "update",
    possession: "any",
  })
  async updateFulfillmentSpecifications(
    @common.Param() params: SellerWhereUniqueInput,
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
    resource: "Seller",
    action: "update",
    possession: "any",
  })
  async disconnectFulfillmentSpecifications(
    @common.Param() params: SellerWhereUniqueInput,
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
  @common.Get("/:id/locations")
  @ApiNestedQuery(LocationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "read",
    possession: "any",
  })
  async findManyLocations(
    @common.Req() request: Request,
    @common.Param() params: SellerWhereUniqueInput
  ): Promise<Location[]> {
    const query = plainToClass(LocationFindManyArgs, request.query);
    const results = await this.service.findLocations(params.id, {
      ...query,
      select: {
        address: true,
        areaCode: true,
        city: true,
        coordinate: true,
        country: true,
        createdAt: true,
        id: true,
        mapUrl: true,

        node: {
          select: {
            id: true,
          },
        },

        organizations: {
          select: {
            id: true,
          },
        },

        radius: true,

        seller: {
          select: {
            id: true,
          },
        },

        state: true,

        trackings: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        waypoints: {
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

  @common.Post("/:id/locations")
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "update",
    possession: "any",
  })
  async connectLocations(
    @common.Param() params: SellerWhereUniqueInput,
    @common.Body() body: LocationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      locations: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/locations")
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "update",
    possession: "any",
  })
  async updateLocations(
    @common.Param() params: SellerWhereUniqueInput,
    @common.Body() body: LocationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      locations: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/locations")
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "update",
    possession: "any",
  })
  async disconnectLocations(
    @common.Param() params: SellerWhereUniqueInput,
    @common.Body() body: LocationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      locations: {
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
  @common.Get("/:id/menuItems")
  @ApiNestedQuery(MenuItemFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "read",
    possession: "any",
  })
  async findManyMenuItems(
    @common.Req() request: Request,
    @common.Param() params: SellerWhereUniqueInput
  ): Promise<MenuItem[]> {
    const query = plainToClass(MenuItemFindManyArgs, request.query);
    const results = await this.service.findMenuItems(params.id, {
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

  @common.Post("/:id/menuItems")
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "update",
    possession: "any",
  })
  async connectMenuItems(
    @common.Param() params: SellerWhereUniqueInput,
    @common.Body() body: MenuItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      menuItems: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/menuItems")
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "update",
    possession: "any",
  })
  async updateMenuItems(
    @common.Param() params: SellerWhereUniqueInput,
    @common.Body() body: MenuItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      menuItems: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/menuItems")
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "update",
    possession: "any",
  })
  async disconnectMenuItems(
    @common.Param() params: SellerWhereUniqueInput,
    @common.Body() body: MenuItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      menuItems: {
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
  @common.Get("/:id/menus")
  @ApiNestedQuery(MenuFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "read",
    possession: "any",
  })
  async findManyMenus(
    @common.Req() request: Request,
    @common.Param() params: SellerWhereUniqueInput
  ): Promise<Menu[]> {
    const query = plainToClass(MenuFindManyArgs, request.query);
    const results = await this.service.findMenus(params.id, {
      ...query,
      select: {
        categoryIDs: true,
        createdAt: true,
        fulfillmentModes: true,
        id: true,
        name: true,

        seller: {
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

  @common.Post("/:id/menus")
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "update",
    possession: "any",
  })
  async connectMenus(
    @common.Param() params: SellerWhereUniqueInput,
    @common.Body() body: MenuWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      menus: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/menus")
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "update",
    possession: "any",
  })
  async updateMenus(
    @common.Param() params: SellerWhereUniqueInput,
    @common.Body() body: MenuWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      menus: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/menus")
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "update",
    possession: "any",
  })
  async disconnectMenus(
    @common.Param() params: SellerWhereUniqueInput,
    @common.Body() body: MenuWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      menus: {
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
  @common.Get("/:id/modifierGroups")
  @ApiNestedQuery(ModifierGroupFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ModifierGroup",
    action: "read",
    possession: "any",
  })
  async findManyModifierGroups(
    @common.Req() request: Request,
    @common.Param() params: SellerWhereUniqueInput
  ): Promise<ModifierGroup[]> {
    const query = plainToClass(ModifierGroupFindManyArgs, request.query);
    const results = await this.service.findModifierGroups(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        maximumPerModifierSelectionQuantity: true,
        maximumSelections: true,
        menuItemIDs: true,
        minimumSelections: true,

        sellerModifierGroups: {
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

  @common.Post("/:id/modifierGroups")
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "update",
    possession: "any",
  })
  async connectModifierGroups(
    @common.Param() params: SellerWhereUniqueInput,
    @common.Body() body: ModifierGroupWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      modifierGroups: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/modifierGroups")
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "update",
    possession: "any",
  })
  async updateModifierGroups(
    @common.Param() params: SellerWhereUniqueInput,
    @common.Body() body: ModifierGroupWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      modifierGroups: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/modifierGroups")
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "update",
    possession: "any",
  })
  async disconnectModifierGroups(
    @common.Param() params: SellerWhereUniqueInput,
    @common.Body() body: ModifierGroupWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      modifierGroups: {
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
  @common.Get("/:id/promotions")
  @ApiNestedQuery(PromotionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "read",
    possession: "any",
  })
  async findManyPromotions(
    @common.Req() request: Request,
    @common.Param() params: SellerWhereUniqueInput
  ): Promise<Promotion[]> {
    const query = plainToClass(PromotionFindManyArgs, request.query);
    const results = await this.service.findPromotions(params.id, {
      ...query,
      select: {
        amount: true,

        bazaar: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        expirationDate: true,
        id: true,
        maximumPurchase: true,
        minimumPurchase: true,
        name: true,
        percentage: true,

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

  @common.Post("/:id/promotions")
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "update",
    possession: "any",
  })
  async connectPromotions(
    @common.Param() params: SellerWhereUniqueInput,
    @common.Body() body: PromotionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      promotions: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/promotions")
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "update",
    possession: "any",
  })
  async updatePromotions(
    @common.Param() params: SellerWhereUniqueInput,
    @common.Body() body: PromotionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      promotions: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/promotions")
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "update",
    possession: "any",
  })
  async disconnectPromotions(
    @common.Param() params: SellerWhereUniqueInput,
    @common.Body() body: PromotionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      promotions: {
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
  @common.Get("/:id/ratings")
  @ApiNestedQuery(RatingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "read",
    possession: "any",
  })
  async findManyRatings(
    @common.Req() request: Request,
    @common.Param() params: SellerWhereUniqueInput
  ): Promise<Rating[]> {
    const query = plainToClass(RatingFindManyArgs, request.query);
    const results = await this.service.findRatings(params.id, {
      ...query,
      select: {
        courier: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        entity: true,
        entityId: true,
        id: true,

        seller: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        value: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/ratings")
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "update",
    possession: "any",
  })
  async connectRatings(
    @common.Param() params: SellerWhereUniqueInput,
    @common.Body() body: RatingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      ratings: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/ratings")
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "update",
    possession: "any",
  })
  async updateRatings(
    @common.Param() params: SellerWhereUniqueInput,
    @common.Body() body: RatingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      ratings: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/ratings")
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "update",
    possession: "any",
  })
  async disconnectRatings(
    @common.Param() params: SellerWhereUniqueInput,
    @common.Body() body: RatingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      ratings: {
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
