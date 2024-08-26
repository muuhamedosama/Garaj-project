import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  UseGuards,
  Request,
  UnauthorizedException,
} from "@nestjs/common";
import { BookingsService } from "./bookings.service";
import { CreateBookingDto } from "./dto/create-booking.dto";
import { AuthGuard } from "../auth/auth.guard";
import { BookingStatus, UserType } from "src/types/enums";

@UseGuards(AuthGuard)
@Controller("bookings")
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post()
  create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingsService.create(createBookingDto);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.bookingsService.findById(id);
  }

  @Get("user/:userId")
  findByUserId(@Param("userId") userId: string, @Request() req) {
    const { userType } = req.user;
    if (userType !== UserType.Customer) throw new UnauthorizedException();
    return this.bookingsService.findByUserId(userId);
  }

  @Get("provider/:providerId")
  findByProviderId(@Param("providerId") providerId: string, @Request() req) {
    const { userType } = req.user;
    if (userType !== UserType.ServiceProvider)
      throw new UnauthorizedException();
    return this.bookingsService.findByProviderId(providerId);
  }

  @Patch(":id/status")
  updateStatus(@Param("id") id: string, @Body("status") status: BookingStatus) {
    return this.bookingsService.updateStatus(id, status);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.bookingsService.delete(id);
  }
}
