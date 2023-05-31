import { Module } from "@nestjs/common";
import { SellerModuleBase } from "./base/seller.module.base";
import { SellerService } from "./seller.service";
import { SellerController } from "./seller.controller";
import { SellerResolver } from "./seller.resolver";

@Module({
  imports: [SellerModuleBase],
  controllers: [SellerController],
  providers: [SellerService, SellerResolver],
  exports: [SellerService],
})
export class SellerModule {}
