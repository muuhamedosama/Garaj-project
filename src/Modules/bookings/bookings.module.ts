import { Module } from "@nestjs/common";
import { BookingsService } from "./bookings.service";
import { BookingsController } from "./bookings.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Booking, BookingSchema } from "./bookings.schema";
import { JwtService } from "@nestjs/jwt";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Booking.name, schema: BookingSchema }]),
  ],
  controllers: [BookingsController],
  providers: [JwtService, BookingsService],
})
export class BookingsModule {}
