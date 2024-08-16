import { UpdateRequestDto } from './dto/update-request.dto';
import { createRequestDto } from './dto/create-request.dto';
export declare class RequestsService {
    create(createRequestDto: createRequestDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateRequestDto: UpdateRequestDto): string;
    remove(id: number): string;
}
