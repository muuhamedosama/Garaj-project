import { Model } from "mongoose";
import { CreateBookingDto } from "./dto/create-booking.dto";
import { BookingStatus } from "src/types/enums";
import { Booking, BookingDocument } from "./bookings.schema";
export declare class BookingsService {
    private readonly bookingModel;
    constructor(bookingModel: Model<BookingDocument>);
    create(createBookingDto: CreateBookingDto): Promise<Booking>;
    findById(id: string): Promise<Booking>;
    findByUserId(userId: string): Promise<Booking[]>;
    findByProviderId(providerId: string): Promise<Booking[]>;
    updateStatus(id: string, status: BookingStatus): Promise<Booking>;
    delete(id: string): Promise<void>;
}
