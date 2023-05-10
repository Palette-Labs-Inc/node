import { Module, Scope } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { MorganInterceptor, MorganModule } from "nest-morgan";
import { UserModule } from "./user/user.module";
import { ImageModule } from "./image/image.module";
import { MediaFileModule } from "./mediaFile/mediaFile.module";
import { IndividualModule } from "./individual/individual.module";
import { ContactModule } from "./contact/contact.module";
import { PaymentSourceModule } from "./paymentSource/paymentSource.module";
import { ScalarModule } from "./scalar/scalar.module";
import { LocationModule } from "./location/location.module";
import { SellerModule } from "./seller/seller.module";
import { PaymentTermModule } from "./paymentTerm/paymentTerm.module";
import { PromotionModule } from "./promotion/promotion.module";
import { ModifierGroupModule } from "./modifierGroup/modifierGroup.module";
import { ItemQuantityModule } from "./itemQuantity/itemQuantity.module";
import { OrganizationModule } from "./organization/organization.module";
import { VehicleModule } from "./vehicle/vehicle.module";
import { RatingModule } from "./rating/rating.module";
import { TrackingModule } from "./tracking/tracking.module";
import { BillingModule } from "./billing/billing.module";
import { CourierModule } from "./courier/courier.module";
import { WaypointModule } from "./waypoint/waypoint.module";
import { CancellationModule } from "./cancellation/cancellation.module";
import { QuoteModule } from "./quote/quote.module";
import { FulfillmentSpecificationModule } from "./fulfillmentSpecification/fulfillmentSpecification.module";
import { MenuItemModule } from "./menuItem/menuItem.module";
import { CategoryModule } from "./category/category.module";
import { MenuModule } from "./menu/menu.module";
import { BazaarModule } from "./bazaar/bazaar.module";
import { SupportModule } from "./support/support.module";
import { OrderModule } from "./order/order.module";
import { NodeModule } from "./node/node.module";
import { ConditionModule } from "./condition/condition.module";
import { SearchModule } from "./search/search.module";
import { HourIntervalModule } from "./hourInterval/hourInterval.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
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
