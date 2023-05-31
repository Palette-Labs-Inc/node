import { Module } from "@nestjs/common";
import { BillingModuleBase } from "./base/billing.module.base";
import { BillingService } from "./billing.service";
import { BillingController } from "./billing.controller";
import { BillingResolver } from "./billing.resolver";

@Module({
  imports: [BillingModuleBase],
  controllers: [BillingController],
  providers: [BillingService, BillingResolver],
  exports: [BillingService],
})
export class BillingModule {}
