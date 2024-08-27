import { BookingsService } from "./bookings.service";
import { CreateBookingDto } from "./dto/create-booking.dto";
export declare class BookingsController {
    private readonly bookingsService;
    constructor(bookingsService: BookingsService);
    create(createBookingDto: CreateBookingDto): Promise<import("./bookings.schema").Booking>;
    findOne(id: string): Promise<import("./bookings.schema").Booking>;
    findByUserId(userId: string, req: any): Promise<import("./bookings.schema").Booking[]>;
    findByProviderId(providerId: string, req: any): Promise<import("./bookings.schema").Booking[]>;
    bookingCancellation(id: string, req: any): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./bookings.schema").Booking> & import("./bookings.schema").Booking & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, import("./bookings.schema").Booking> & import("./bookings.schema").Booking & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
}
