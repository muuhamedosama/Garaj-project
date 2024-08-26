import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule, ConfigService } from "@nestjs/config";

import { UsersModule } from "./Modules/users/users.module";
import { AuthModule } from "./Modules/auth/auth.module";
import { ServicesModule } from "./Modules/services/services.module";
import { VehiclesModule } from "./Modules/vehicles/vehicles.module";
import { RecordsModule } from './Modules/records/records.module';
import { BookingsModule } from './Modules/bookings/bookings.module';
import { ReviewsModule } from './Modules/reviews/reviews.module';

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
    ServicesModule,
    VehiclesModule,
    RecordsModule,
    BookingsModule,
    ReviewsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
