import { Mechanic, mechanicDocument } from './mechanics.schema';
import { Model } from 'mongoose';
import { UsersService } from '../users/users.service';
import { UpdateMechanicDto } from './dto/update-mechanic.dto';
export declare class MechanicsService {
    private mechanicModel;
    private usersService;
    constructor(mechanicModel: Model<mechanicDocument>, usersService: UsersService);
    create(user: any): Promise<Mechanic>;
    update(id: number, updateMechanicDto: UpdateMechanicDto): string;
}
