import { Mechanic, mechanicDocument } from './mechanics.schema';
import { Model } from 'mongoose';
import { UsersService } from '../users/users.service';
export declare class MechanicsService {
    private mechanicModel;
    private usersService;
    constructor(mechanicModel: Model<mechanicDocument>, usersService: UsersService);
    create(user: any): Promise<Mechanic>;
}
