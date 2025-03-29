import { PartialType } from '@nestjs/swagger';
import { CreatePhoneBlacklistDto } from './create-phone-blacklist.dto';

export class UpdatePhoneBlacklistDto extends PartialType(CreatePhoneBlacklistDto) {}
