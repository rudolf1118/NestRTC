import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { checkForUUID } from 'src/common/helper.utils';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User> ){}

    async createSimpleUser(createUserDto: CreateUserDto) {
        const existingUser = await this.userRepository.findOne({ where: { nickname: createUserDto.nickname } });
        if (existingUser) {
            throw new BadRequestException('Something went wrong...', {
                cause: new Error(),
                description: 'User with this nickname already exits.',
            });
        }
        const user = this.userRepository.create(createUserDto);
        this.userRepository.save(user);
        return {
            status: "Success",
            user,
        }
    }

    async getUserById(id: string) {
        if (!checkForUUID(id)) {
            throw new BadRequestException(`User's ID should be uuid`)
        }
        const user = await this.userRepository.findOne({ where: { id }});
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return {
            status: "Success",
            ...user,
        }
    }

}
