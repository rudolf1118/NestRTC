import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User> ){}

    async createSimpleUser(createUserDto: CreateUserDto) {
        const user = this.userRepository.create(createUserDto);
        this.userRepository.save(user);
        return {
            status: "Success",
            user,
        }
    }
}
