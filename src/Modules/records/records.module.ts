import { Module } from "@nestjs/common";
import { RecordsService } from "./records.service";
import { RecordsController } from "./records.controller";
import { JwtService } from "@nestjs/jwt";
import { MongooseModule } from "@nestjs/mongoose";
import { Record, RecordSchema } from "./records.schema";
import { User, UserSchema } from "../users/users.schema";
import { Booking, BookingSchema } from "../bookings/bookings.schema";
import { BookingsService } from "../bookings/bookings.service";
import { UsersService } from "../users/users.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Record.name, schema: RecordSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Booking.name, schema: BookingSchema }]),
  ],

  controllers: [RecordsController],
  providers: [JwtService, RecordsService, BookingsService, UsersService],
})
export class RecordsModule {}
