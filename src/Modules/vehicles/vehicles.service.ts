import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreateVehicleDto } from "./dto/create-vehicle.dto";
import { UpdateVehicleDto } from "./dto/update-vehicle.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Vehicle, VehicleDocument } from "./vehicles.schema";
import { Model } from "mongoose";

@Injectable()
export class VehiclesService {
  constructor(
    @InjectModel(Vehicle.name) private vehicleModel: Model<VehicleDocument>
  ) {}

  async create(createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    try {
      const newVehicle = new this.vehicleModel(createVehicleDto);
      return await newVehicle.save();
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException();
      }
      throw error;
    }
  }

  async findByUser(userId: string) {
    return this.vehicleModel.find({ userId }).exec();
  }

  async findById(id: string): Promise<Vehicle | undefined> {
    return this.vehicleModel.findById(id).exec();
  }

  async update(id: string, updateVehicleDto: UpdateVehicleDto) {
    const { registration } = updateVehicleDto;

    // Check if the vehicle with the given ID exists
    const existingVehicle = await this.vehicleModel.findById(id).exec();
    if (!existingVehicle) {
      throw new NotFoundException("Vehicle not found");
    }

    // If registration is updated, check if the new registration is unique
    if (registration && registration !== existingVehicle.registration) {
      const duplicateVehicle = await this.vehicleModel
        .findOne({ registration })
        .exec();
      if (duplicateVehicle) {
        throw new ConflictException(
          "Vehicle with this registration already exists."
        );
      }
    }

    const updatedVehicle = await this.vehicleModel.findByIdAndUpdate(
      id,
      updateVehicleDto,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedVehicle) {
      throw new NotFoundException();
    }

    return updatedVehicle;
  }

  async delete(id: string): Promise<void> {
    const result = await this.vehicleModel.deleteOne({ _id: id }).exec();

    if (result.deletedCount === 0) {
      throw new NotFoundException();
    }
  }
}
