import {
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { CreateRecordDto } from "./dto/create-record.dto";
import { UpdateRecordDto } from "./dto/update-record.dto";
import { Record, RecordDocument } from "./records.schema";
@Injectable()
export class RecordsService {
  constructor(
    @InjectModel(Record.name)
    private readonly recordModel: Model<RecordDocument>
  ) {}

  async create(createRecordDto: CreateRecordDto): Promise<Record> {
    const createdRecord = new this.recordModel(createRecordDto);
    return createdRecord.save();
  }

  async findByVehicleId(vehicleId: string): Promise<Record[]> {
    return await this.recordModel.find({ vehicleId }).exec();
  }

  async findByProviderId(providerId: string): Promise<Record[]> {
    const records = await this.recordModel.find({ providerId }).exec();
    if (records.length === 0) {
      throw new NotFoundException("No records found for this user");
    }
    return records;
  }

  async update(id: string, updateRecordDto: UpdateRecordDto): Promise<Record> {
    const updatedRecord = await this.recordModel
      .findByIdAndUpdate(id, updateRecordDto, { new: true })
      .exec();
    if (!updatedRecord) {
      throw new NotFoundException("Record not found");
    }
    return updatedRecord;
  }

  async remove(id: string): Promise<{ deletedCount: number }> {
    const result = await this.recordModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException("Record not found");
    }
    return result;
  }
}
