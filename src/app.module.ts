import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule, ConfigService } from "@nestjs/config";

import { UsersModule } from "./Modules/customers/users.module";
import { AuthModule } from "./Modules/auth/auth.module";
import { RequestsModule } from "./Modules/requests/requests.module";
import { ServicesModule } from "./Modules/services/services.module";

@Module({
  imports: [
    ConfigModule.forRoot({ cache: true, isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>("MONGODB_URI"),
        ssl: true,
      }),
    }),
    UsersModule,
    AuthModule,
    RequestsModule,
    ServicesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
