import { Module } from "@nestjs/common";
import { FulfillmentSpecificationModuleBase } from "./base/fulfillmentSpecification.module.base";
import { FulfillmentSpecificationService } from "./fulfillmentSpecification.service";
import { FulfillmentSpecificationController } from "./fulfillmentSpecification.controller";
import { FulfillmentSpecificationResolver } from "./fulfillmentSpecification.resolver";

@Module({
  imports: [FulfillmentSpecificationModuleBase],
  controllers: [FulfillmentSpecificationController],
  providers: [
    FulfillmentSpecificationService,
    FulfillmentSpecificationResolver,
  ],
  exports: [FulfillmentSpecificationService],
})
export class FulfillmentSpecificationModule {}
