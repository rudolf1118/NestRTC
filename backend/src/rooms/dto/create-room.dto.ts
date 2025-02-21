import { IsOptional, IsInt, Min, Max, IsUUID} from 'class-validator'
import { CreateUserDto } from 'src/users/dto/create-user.dto';

export class CreateRoomDto {
    owner: CreateUserDto;
  
    @IsOptional()
    expiryAt?: Date;

    @IsOptional()
    @IsInt()
    @Min(2)
    @Max(7)
    maxParticipants: number;

    @IsOptional()
    title?: string;
  }