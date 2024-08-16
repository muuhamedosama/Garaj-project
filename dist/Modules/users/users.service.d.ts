import { Model } from 'mongoose';
import { User, UserDocument } from './users.schema';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    create(user: any): Promise<User>;
    findOneByContact(phone: string): Promise<User | undefined>;
    findById(id: string): Promise<User | undefined>;
    delete(userId: string): Promise<void>;
}
