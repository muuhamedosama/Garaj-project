import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service, ServiceDocument } from './services.schema';
import { Model } from 'mongoose';
export declare class ServicesService {
    private serviceModel;
    constructor(serviceModel: Model<ServiceDocument>);
    create(createServiceDto: CreateServiceDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Service> & Service & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, Service> & Service & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateServiceDto: UpdateServiceDto): string;
    remove(id: number): string;
}
