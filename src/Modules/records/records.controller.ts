import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  UseGuards,
  Request,
  UnauthorizedException,
} from "@nestjs/common";
import { RecordsService } from "./records.service";
import { UpdateRecordDto } from "./dto/update-record.dto";
import { AuthGuard } from "../auth/auth.guard";
import { CreateRecordDto } from "./dto/create-record.dto";
import { UserType } from "src/types/enums";

@UseGuards(AuthGuard)
@Controller("records")
export class RecordsController {
  constructor(private readonly recordsService: RecordsService) {}

  @Post()
  create(@Body() createRecordDto: CreateRecordDto) {
    return this.recordsService.create(createRecordDto);
  }

  @Get("vehicle/:vehicleId")
  findByVehicleId(@Param("vehicleId") vehicleId: string) {
    return this.recordsService.findByVehicleId(vehicleId);
  }

  //commented
  @Get("user/:providerId")
  findByProviderId(@Param("providerId") providerId: string) {
    return this.recordsService.findByProviderId(providerId);
  }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Request() req
  ) {
    const { userType } = req.user;
    if (userType === UserType.ServiceProvider)
      throw new UnauthorizedException();
    return this.recordsService.update(id);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.recordsService.remove(id);
  }
}
