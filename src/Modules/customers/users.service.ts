import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "./users.schema";
import * as bcrypt from "bcryptjs";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserType } from "src/types/enums";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(user): Promise<User> {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const createdUser = new this.userModel({
      ...user,
      password: hashedPassword,
    });
    return createdUser.save();
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.userModel.findByIdAndUpdate(
      id,
      updateUserDto,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedUser) {
      throw new NotFoundException();
    }

    return updatedUser;
  }

  async findOneByContact(phone: string): Promise<User | undefined> {
    return this.userModel.findOne({ phone }).exec();
  }

  async findById(id: string): Promise<User | undefined> {
    return this.userModel.findById(id).exec();
  }

  async findServiceProviders(userType, query: any): Promise<User[]> {
    if (userType === UserType.ServiceProvider) throw new ForbiddenException();

    const filter = { userType: UserType.ServiceProvider };

    if (query.name) {
      filter["name"] = { $regex: query.name, $options: "i" };
    }

    if (query.location) {
      filter["location"] = { $regex: query.location, $options: "i" };
    }

    if (query.specificCarBrands) {
      filter["specificCarBrands"] = { $in: [query.specificCarBrands] };
    }

    return this.userModel.find(filter).exec();
  }

  async delete(id: string): Promise<void> {
    const result = await this.userModel.deleteOne({ id }).exec();

    if (result.deletedCount === 0) {
      throw new NotFoundException();
    }
  }
}
