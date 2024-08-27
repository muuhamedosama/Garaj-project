import { Model, Types } from "mongoose";
import { CreateBookingDto } from "./dto/create-booking.dto";
import { Booking, BookingDocument } from "./bookings.schema";
export declare class BookingsService {
    private readonly bookingModel;
    constructor(bookingModel: Model<BookingDocument>);
    create(createBookingDto: CreateBookingDto): Promise<Booking>;
    findById(id: string): Promise<Booking>;
    findByUserId(userId: string): Promise<Booking[]>;
    findByProviderId(providerId: string): Promise<Booking[]>;
    updateStatusAndPrice(id: Types.ObjectId, updateBookingDto: any): Promise<Booking>;
    bookingCancellation(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Booking> & Booking & {
        _id: Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, Booking> & Booking & {
        _id: Types.ObjectId;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    delete(id: string): Promise<void>;
}
