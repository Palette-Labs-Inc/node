import { Module } from "@nestjs/common";
import { PaymentSourceModuleBase } from "./base/paymentSource.module.base";
import { PaymentSourceService } from "./paymentSource.service";
import { PaymentSourceController } from "./paymentSource.controller";
import { PaymentSourceResolver } from "./paymentSource.resolver";

@Module({
  imports: [PaymentSourceModuleBase],
  controllers: [PaymentSourceController],
  providers: [PaymentSourceService, PaymentSourceResolver],
  exports: [PaymentSourceService],
})
export class PaymentSourceModule {}
