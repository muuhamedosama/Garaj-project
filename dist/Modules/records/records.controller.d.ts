import { RecordsService } from "./records.service";
import { CreateRecordDto } from "./dto/create-record.dto";
export declare class RecordsController {
    private readonly recordsService;
    constructor(recordsService: RecordsService);
    create(createRecordDto: CreateRecordDto): Promise<import("./records.schema").Record>;
    findByVehicleId(vehicleId: string): Promise<import("./records.schema").Record[]>;
    findByProviderId(providerId: string): Promise<import("./records.schema").Record[]>;
    update(id: string, req: any): Promise<import("./records.schema").Record>;
    remove(id: string): Promise<{
        deletedCount: number;
    }>;
}
