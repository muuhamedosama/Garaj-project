import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  UnauthorizedException,
} from "@nestjs/common";
import { VehiclesService } from "./vehicles.service";
import { CreateVehicleDto } from "./dto/create-vehicle.dto";
import { UpdateVehicleDto } from "./dto/update-vehicle.dto";
import { AuthGuard } from "../auth/auth.guard";
import { UserType } from "src/types/enums";

@UseGuards(AuthGuard)
@Controller("vehicles")
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  private checkUserType(userType: UserType) {
    if (userType === UserType.ServiceProvider) {
      throw new UnauthorizedException();
    }
  }

  @Post()
  create(@Body() createVehicleDto: CreateVehicleDto, @Request() req) {
    this.checkUserType(req.user.userType);
    return this.vehiclesService.create(createVehicleDto);
  }

  @Get("user/:userId")
  findByUserId(@Param("userId") userId: string, @Request() req) {
    this.checkUserType(req.user.userType);
    return this.vehiclesService.findByUser(userId);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.vehiclesService.findById(id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateVehicleDto: UpdateVehicleDto,
    @Request() req
  ) {
    this.checkUserType(req.user.userType);

    return this.vehiclesService.update(id, updateVehicleDto);
  }

  @Delete(":id")
  remove(@Param("id") vehicleId: string, @Request() req) {
    const { userType, sub } = req.user;
    this.checkUserType(userType);
    return this.vehiclesService.delete(vehicleId, sub);
  }
}
