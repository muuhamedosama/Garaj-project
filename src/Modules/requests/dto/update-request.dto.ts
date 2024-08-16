import { PartialType } from '@nestjs/mapped-types';
import { createRequestDto } from './create-request.dto';

export class UpdateRequestDto extends PartialType(createRequestDto) {}
