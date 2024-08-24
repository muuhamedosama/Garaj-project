import { Model } from "mongoose";
import { User, UserDocument } from "./users.schema";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    create(user: any): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findOneByContact(phone: string): Promise<User | undefined>;
    findById(id: string): Promise<User | undefined>;
    findServiceProviders(userType: any, query: any): Promise<User[]>;
    delete(id: string): Promise<void>;
}