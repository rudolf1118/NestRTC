import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import {CreateRoomDto} from './dto/create-room.dto'
import { Repository } from 'typeorm';
import { Room } from './room.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { UserService } from 'src/users/users.service';
import { checkForUUID } from 'src/common/helper.utils';

@Injectable()
export class RoomService {
    constructor(
        @InjectRepository(Room)
        private readonly roomRepository: Repository<Room>,
        private readonly userService: UserService
    ) {}

    async createRoom(createRoomDto: CreateRoomDto) {
        if (!createRoomDto?.owner || !createRoomDto?.owner?.id) {
            throw new BadRequestException()
        } 
        const exist = await this.roomRepository.findOne({ where: { owner: { id: createRoomDto.owner?.id } } });

        if (exist) {
            throw new BadRequestException('Something went wrong...', {
                cause: new Error(),
                description: `Room for this user alreadt exists room id: ${exist.id}`,
            });
        }
        const user = await this.userService.getUserById(createRoomDto.owner.id);
        if (!user) {
            throw new BadRequestException('Owner does not exist');
        }
        const room = this.roomRepository.create({ ...createRoomDto, owner: user });
        if (!room) {
            throw new BadRequestException('Room could not created')
        }
        this.roomRepository.save(room);
        return {
            status: 'Success',
            ...room
        }
    }

    async getRoomById(id: string) {
         if (!checkForUUID(id)) {
            throw new BadRequestException(`Room's ID should be uuid`)
        }
        const room = await this.roomRepository.findOne({ where: { id }});
        if (!room) {
            throw new NotFoundException(`Room with ID ${id} not found`);
        }
        return {
            status: "Success",
            ...room,
        }
    }
}
