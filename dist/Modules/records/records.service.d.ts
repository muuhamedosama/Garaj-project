import { Model } from "mongoose";
import { CreateRecordDto } from "./dto/create-record.dto";
import { UpdateRecordDto } from "./dto/update-record.dto";
import { Record, RecordDocument } from "./records.schema";
export declare class RecordsService {
    private readonly recordModel;
    constructor(recordModel: Model<RecordDocument>);
    create(createRecordDto: CreateRecordDto): Promise<Record>;
    findByVehicleId(vehicleId: string): Promise<Record[]>;
    findByProviderId(providerId: string): Promise<Record[]>;
    update(id: string, updateRecordDto: UpdateRecordDto): Promise<Record>;
    remove(id: string): Promise<{
        deletedCount: number;
    }>;
}
