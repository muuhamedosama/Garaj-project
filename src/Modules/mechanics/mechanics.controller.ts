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
  ForbiddenException,
} from "@nestjs/common";
import { MechanicsService } from "./mechanics.service";
import { UpdateMechanicDto } from "./dto/update-mechanic.dto";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller("mechanics")
export class MechanicsController {
  constructor(private readonly mechanicsService: MechanicsService) {}

  // @Post()
  // create(@Body() createMechanicDto: CreateMechanicDto) {
  //   return this.mechanicsService.create(createMechanicDto);
  // }

  // @Get()
  // findAll() {
  //   return this.mechanicsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.mechanicsService.findOne(+id);
  // }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() updateMechanicDto: UpdateMechanicDto,
    @Request() req: any
  ) {
    const user = req.user;

    if (user.userType !== "admin" && "rating" in updateMechanicDto) {
      throw new ForbiddenException();
    }
    const updatedMechanic = await this.mechanicsService.update(
      +id,
      updateMechanicDto
    );

    return { message: "Mechanic updated successfully", data: updatedMechanic };
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.mechanicsService.remove(+id);
  // }
}
