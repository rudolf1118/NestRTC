import { IsOptional, IsInt, Min, Max, IsUUID, IsNotEmpty} from 'class-validator'
import { CreateUserDto } from 'src/users/dto/create-user.dto';

export class CreateRoomDto {
    @IsNotEmpty()
    owner: CreateUserDto;
  
    @IsOptional()
    expiryAt?: Date;

    @IsOptional()
    @IsInt()
    @Min(2)
    @Max(7)
    maxParticipants?: number;

    @IsOptional()
    @Min(4)
    title?: string;
  }