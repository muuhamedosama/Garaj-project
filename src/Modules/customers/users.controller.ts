import {
  Controller,
  Body,
  Patch,
  Param,
  UseGuards,
  Request,
  Delete,
  Get,
  Query,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { UpdateUserDto } from "./dto/update-user.dto";
import { AuthGuard } from "../auth/auth.guard";

@UseGuards(AuthGuard)
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get("providers")
  async findServiceProviders(@Request() req, @Query() query) {
    const { userType } = req.user;
    return this.usersService.findServiceProviders(userType, query);
  }

  @Get(":id")
  async findById(@Param("id") id: string) {
    return this.usersService.findById(id);
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    let updatedUser = await this.usersService.update(id, updateUserDto);
    return {
      data: updatedUser,
    };
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usersService.delete(id);
  }
}
