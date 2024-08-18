import { Injectable, UseGuards } from "@nestjs/common";
import { Mechanic, mechanicDocument } from "./mechanics.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { UsersService } from "../users/users.service";
import { UpdateMechanicDto } from "./dto/update-mechanic.dto";

@Injectable()
export class MechanicsService {
  constructor(
    @InjectModel(Mechanic.name) private mechanicModel: Model<mechanicDocument>,
    private usersService: UsersService
  ) {}

  async create(user): Promise<Mechanic> {
    const createdUser = new this.mechanicModel(user);
    return createdUser.save();
  }

  // findAll() {
  //   return `This action returns all mechanics`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} mechanic`;
  // }

  update(id: string, updateMechanicDto: UpdateMechanicDto) {
    return `This action updates a #${id} mechanic`;
  }

  // remove(id: number) {
  //   return `This action removes a #${id} mechanic`;
  // }
}
