import { Model } from "mongoose";
import { CreateRecordDto } from "./dto/create-record.dto";
import { Record, RecordDocument } from "./records.schema";
import { BookingsService } from "../bookings/bookings.service";
import { UsersService } from "../users/users.service";
export declare class RecordsService {
    private readonly recordModel;
    private readonly bookingService;
    private readonly userService;
    constructor(recordModel: Model<RecordDocument>, bookingService: BookingsService, userService: UsersService);
    create(createRecordDto: CreateRecordDto): Promise<Record>;
    findByVehicleId(vehicleId: string): Promise<Record[]>;
    findByProviderId(providerId: string): Promise<Record[]>;
    update(id: string): Promise<Record>;
    remove(id: string): Promise<{
        deletedCount: number;
    }>;
}
