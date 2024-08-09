import { PartialType } from '@nestjs/mapped-types';
import { CreateRequestDto } from './create-application.dto';

export class UpdateApplicationDto extends PartialType(CreateRequestDto) {}
