import { UsersService } from "./users.service";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findServiceProviders(req: any, query: any): Promise<import("./users.schema").User[]>;
    findById(id: string): Promise<import("./users.schema").User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        data: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./users.schema").User> & import("./users.schema").User & {
            _id: import("mongoose").Types.ObjectId;
        }> & import("mongoose").Document<unknown, {}, import("./users.schema").User> & import("./users.schema").User & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    remove(id: string): Promise<void>;
}
