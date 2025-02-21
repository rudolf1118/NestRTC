import { IsString, IsNotEmpty, IsOptional, IsInt, Min, Max, IsUUID} from 'class-validator'

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    nickname: string;
}