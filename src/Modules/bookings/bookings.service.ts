import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateBookingDto } from "./dto/create-booking.dto";
import { BookingStatus } from "src/types/enums";
import { Booking, BookingDocument } from "./bookings.schema";

@Injectable()
export class BookingsService {
  constructor(
    @InjectModel(Booking.name)
    private readonly bookingModel: Model<BookingDocument>
  ) {}

  async create(createBookingDto: CreateBookingDto): Promise<Booking> {
    const newBooking = new this.bookingModel(createBookingDto);
    return await newBooking.save();
  }

  async findById(id: string): Promise<Booking> {
    const booking = await this.bookingModel.findById(id).exec();
    if (!booking) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }
    return booking;
  }

  async findByUserId(userId: string): Promise<Booking[]> {
    return await this.bookingModel.find({ userId }).exec();
  }

  async findByProviderId(providerId: string): Promise<Booking[]> {
    return await this.bookingModel.find({ providerId }).exec();
  }
  async updateStatus(id: string, status: BookingStatus): Promise<Booking> {
    const updatedBooking = await this.bookingModel
      .findByIdAndUpdate(id, { status }, { new: true, runValidators: true })
      .exec();

    if (!updatedBooking) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }

    return updatedBooking;
  }

  async delete(id: string): Promise<void> {
    const booking = await this.bookingModel.findById(id).exec();
    if (!booking) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }

    await this.bookingModel.deleteOne({ _id: id }).exec();
  }
}
