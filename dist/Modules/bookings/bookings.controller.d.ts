import { BookingsService } from "./bookings.service";
import { CreateBookingDto } from "./dto/create-booking.dto";
import { BookingStatus } from "src/types/enums";
export declare class BookingsController {
    private readonly bookingsService;
    constructor(bookingsService: BookingsService);
    create(createBookingDto: CreateBookingDto): Promise<import("./bookings.schema").Booking>;
    findOne(id: string): Promise<import("./bookings.schema").Booking>;
    findByUserId(userId: string, req: any): Promise<import("./bookings.schema").Booking[]>;
    findByProviderId(providerId: string, req: any): Promise<import("./bookings.schema").Booking[]>;
    updateStatus(id: string, status: BookingStatus): Promise<import("./bookings.schema").Booking>;
    remove(id: string): Promise<void>;
}
