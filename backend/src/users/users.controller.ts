import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){}

    @Post('create/simple')
    async createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createSimpleUser(createUserDto)
    }
}
