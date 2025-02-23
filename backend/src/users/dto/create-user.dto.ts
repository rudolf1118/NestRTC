import { IsString, IsNotEmpty, IsOptional, IsInt, Min, Max, IsUUID} from 'class-validator'

export class CreateUserDto {
    @IsOptional()
    @IsString()
    @IsUUID()
    id?: string;

    @IsString()
    @IsNotEmpty()
    nickname: string;
}