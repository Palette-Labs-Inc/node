import { Module, Scope } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { MorganInterceptor, MorganModule } from "nest-morgan";
import { UserModule } from "./entities/user/user.module";
import { ImageModule } from "./entities/image/image.module";
import { MediaFileModule } from "./entities/mediaFile/mediaFile.module";
import { IndividualModule } from "./entities/individual/individual.module";
import { ContactModule } from "./entities/contact/contact.module";
import { PaymentSourceModule } from "./entities/paymentSource/paymentSource.module";
import { ScalarModule } from "./entities/scalar/scalar.module";
import { LocationModule } from "./entities/location/location.module";
import { SellerModule } from "./entities/seller/seller.module";
import { PaymentTermModule } from "./entities/paymentTerm/paymentTerm.module";
import { PromotionModule } from "./entities/promotion/promotion.module";
import { ModifierGroupModule } from "./entities/modifierGroup/modifierGroup.module";
import { ItemQuantityModule } from "./entities/itemQuantity/itemQuantity.module";
import { OrganizationModule } from "./entities/organization/organization.module";
import { VehicleModule } from "./entities/vehicle/vehicle.module";
import { RatingModule } from "./entities/rating/rating.module";
import { TrackingModule } from "./entities/tracking/tracking.module";
import { BillingModule } from "./entities/billing/billing.module";
import { CourierModule } from "./entities/courier/courier.module";
import { WaypointModule } from "./entities/waypoint/waypoint.module";
import { CancellationModule } from "./entities/cancellation/cancellation.module";
import { QuoteModule } from "./entities/quote/quote.module";
import { FulfillmentSpecificationModule } from "./entities/fulfillmentSpecification/fulfillmentSpecification.module";
import { MenuItemModule } from "./entities/menuItem/menuItem.module";
import { CategoryModule } from "./entities/category/category.module";
import { MenuModule } from "./entities/menu/menu.module";
import { BazaarModule } from "./entities/bazaar/bazaar.module";
import { SupportModule } from "./entities/support/support.module";
import { OrderModule } from "./entities/order/order.module";
import { NodeModule } from "./entities/node/node.module";
import { ConditionModule } from "./entities/condition/condition.module";
import { SearchModule } from "./entities/search/search.module";
import { HourIntervalModule } from "./entities/hourInterval/hourInterval.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./entities/providers/secrets/secretsManager.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { GraphQLModule } from "@nestjs/graphql";
import { BroadcastModule } from "./protocol/broadcast/broadcast.module";


import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

import { AppLoggerMiddleware } from "./util/AppLoggerMiddleware"
import { NestModule, MiddlewareConsumer } from "@nestjs/common"

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    ImageModule,
    MediaFileModule,
    IndividualModule,
    ContactModule,
    PaymentSourceModule,
    ScalarModule,
    LocationModule,
    SellerModule,
    PaymentTermModule,
    PromotionModule,
    ModifierGroupModule,
    ItemQuantityModule,
    OrganizationModule,
    VehicleModule,
    RatingModule,
    TrackingModule,
    BillingModule,
    CourierModule,
    WaypointModule,
    CancellationModule,
    QuoteModule,
    FulfillmentSpecificationModule,
    MenuItemModule,
    CategoryModule,
    MenuModule,
    BazaarModule,
    SupportModule,
    OrderModule,
    NodeModule,
    ConditionModule,
    SearchModule,
    HourIntervalModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    MorganModule,
    BroadcastModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync({
      useFactory: (configService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: MorganInterceptor("combined"),
    },
  ],
})

// use to run without logs
//export class AppModule {} 

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}
