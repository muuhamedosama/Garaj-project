import { Injectable } from '@nestjs/common';
import { UpdateRequestDto } from './dto/update-request.dto';
import { createRequestDto } from './dto/create-request.dto';

@Injectable()
export class RequestsService {
  create(createRequestDto: createRequestDto) {
    return 'This action adds a new request';
  }

  findAll() {
    return `This action returns all requests`;
  }

  findOne(id: number) {
    return `This action returns a #${id} request`;
  }

  update(id: number, updateRequestDto: UpdateRequestDto) {
    return `This action updates a #${id} request`;
  }

  remove(id: number) {
    return `This action removes a #${id} request`;
  }
}
