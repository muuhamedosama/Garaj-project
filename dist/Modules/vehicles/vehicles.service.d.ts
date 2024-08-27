import { CreateVehicleDto } from "./dto/create-vehicle.dto";
import { UpdateVehicleDto } from "./dto/update-vehicle.dto";
import { Vehicle, VehicleDocument } from "./vehicles.schema";
import { Model } from "mongoose";
export declare class VehiclesService {
    private vehicleModel;
    constructor(vehicleModel: Model<VehicleDocument>);
    create(createVehicleDto: CreateVehicleDto): Promise<Vehicle>;
    findByUser(userId: string): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Vehicle> & Vehicle & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, Vehicle> & Vehicle & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findById(id: string): Promise<Vehicle | undefined>;
    update(id: string, updateVehicleDto: UpdateVehicleDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Vehicle> & Vehicle & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, Vehicle> & Vehicle & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(id: string, userId: string): Promise<void>;
}
