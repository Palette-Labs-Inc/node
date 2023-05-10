import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ItemQuantityServiceBase } from "./base/itemQuantity.service.base";

@Injectable()
export class ItemQuantityService extends ItemQuantityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
