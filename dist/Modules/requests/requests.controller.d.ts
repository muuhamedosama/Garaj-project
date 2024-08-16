import { RequestsService } from './requests.service';
import { UpdateRequestDto } from './dto/update-request.dto';
import { createRequestDto } from './dto/create-request.dto';
export declare class RequestsController {
    private readonly requestsService;
    constructor(requestsService: RequestsService);
    create(createRequestDto: createRequestDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateRequestDto: UpdateRequestDto): string;
    remove(id: string): string;
}
