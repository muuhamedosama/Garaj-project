import { VehiclesService } from "./vehicles.service";
import { CreateVehicleDto } from "./dto/create-vehicle.dto";
import { UpdateVehicleDto } from "./dto/update-vehicle.dto";
export declare class VehiclesController {
    private readonly vehiclesService;
    constructor(vehiclesService: VehiclesService);
    private checkUserType;
    create(createVehicleDto: CreateVehicleDto, req: any): Promise<import("./vehicles.schema").Vehicle>;
    findByUserId(userId: string, req: any): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./vehicles.schema").Vehicle> & import("./vehicles.schema").Vehicle & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, import("./vehicles.schema").Vehicle> & import("./vehicles.schema").Vehicle & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<import("./vehicles.schema").Vehicle>;
    update(id: string, updateVehicleDto: UpdateVehicleDto, req: any): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./vehicles.schema").Vehicle> & import("./vehicles.schema").Vehicle & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, import("./vehicles.schema").Vehicle> & import("./vehicles.schema").Vehicle & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string, req: any): Promise<void>;
}
