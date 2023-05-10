import { Module } from "@nestjs/common";
import { PaymentTermModuleBase } from "./base/paymentTerm.module.base";
import { PaymentTermService } from "./paymentTerm.service";
import { PaymentTermController } from "./paymentTerm.controller";
import { PaymentTermResolver } from "./paymentTerm.resolver";

@Module({
  imports: [PaymentTermModuleBase],
  controllers: [PaymentTermController],
  providers: [PaymentTermService, PaymentTermResolver],
  exports: [PaymentTermService],
})
export class PaymentTermModule {}
