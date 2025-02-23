import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post('create')
    async createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createSimpleUser(createUserDto)
    }

    @Get('/:id')
    async getUser(@Param("id") id: string) {
        return this.userService.getUserById(id);
    }
}
