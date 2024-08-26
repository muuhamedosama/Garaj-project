import { RecordsService } from "./records.service";
import { UpdateRecordDto } from "./dto/update-record.dto";
import { CreateRecordDto } from "./dto/create-record.dto";
export declare class RecordsController {
    private readonly recordsService;
    constructor(recordsService: RecordsService);
    create(createRecordDto: CreateRecordDto): Promise<import("./records.schema").Record>;
    findByVehicleId(vehicleId: string): Promise<import("./records.schema").Record[]>;
    findByProviderId(providerId: string): Promise<import("./records.schema").Record[]>;
    update(id: string, updateRecordDto: UpdateRecordDto): Promise<import("./records.schema").Record>;
    remove(id: string): Promise<{
        deletedCount: number;
    }>;
}
