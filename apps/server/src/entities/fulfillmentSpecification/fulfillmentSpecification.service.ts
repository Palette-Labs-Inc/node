import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FulfillmentSpecificationServiceBase } from "./base/fulfillmentSpecification.service.base";

@Injectable()
export class FulfillmentSpecificationService extends FulfillmentSpecificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
