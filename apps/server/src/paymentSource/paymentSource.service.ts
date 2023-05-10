import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaymentSourceServiceBase } from "./base/paymentSource.service.base";

@Injectable()
export class PaymentSourceService extends PaymentSourceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
