import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { User, UserDocument } from "./users.schema";
import * as bcrypt from "bcryptjs";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserType } from "src/types/enums";
import { CreateRecordDto } from "../records/dto/create-record.dto";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(user): Promise<User> {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const createdUser = new this.userModel({
      ...user,
      password: hashedPassword,
      rating: 0,
      revenue: 0,
      totalBookings: 0,
    });
    return createdUser.save();
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if (updateUserDto.hasOwnProperty("rating")) {
      throw new ForbiddenException("You are not allowed to update the rating");
    }

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

  async updateRevenueAndPrice(providerId: Types.ObjectId, bill: number) {
    await this.userModel.findByIdAndUpdate(
      providerId,
      {
        $inc: {
          revenue: bill,
          totalBookings: 1,
        },
      },
      { new: true }
    );
  }

  async findOneByContact(phone: string): Promise<User | undefined> {
    return this.userModel.findOne({ phone }).exec();
  }

  async findById(id: string): Promise<User | undefined> {
    return this.userModel.findById(id).select("-password").exec();
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

    return this.userModel.find(filter).select("-password").exec();
  }

  async delete(id: string): Promise<void> {
    const result = await this.userModel.deleteOne({ _id: id }).exec();

    if (result.deletedCount === 0) {
      throw new NotFoundException();
    }
  }
}
