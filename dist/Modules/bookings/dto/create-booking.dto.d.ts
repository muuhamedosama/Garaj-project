import { BookingStatus } from 'src/types/enums';
export declare class CreateBookingDto {
    userId: string;
    providerId: string;
    services: string[];
    vehicleId: string;
    status: BookingStatus;
}
