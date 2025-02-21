import { Injectable } from '@nestjs/common';
import {CreateRoomDto} from './dto/create-room.dto'
import { Repository } from 'typeorm';
import { Room } from './room.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RoomService {
    constructor(
        @InjectRepository(Room)
        private readonly roomRepository: Repository<Room>
    ) {}

    async createRoom(createRoomDto: CreateRoomDto) {
        console.log(createRoomDto);
        const room = this.roomRepository.create(createRoomDto);
        this.roomRepository.save(room);
    }
}
