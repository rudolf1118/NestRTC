import { CreateRoomDto } from './dto/create-room.dto';
import { Controller, Post } from '@nestjs/common';
import { RoomService } from './room.service';

@Controller('rooms')
export class RoomController {
    constructor(private readonly roomService: RoomService){}

    @Post('create')
    async createRoom (createRoomDto: CreateRoomDto) {
        return this.roomService.createRoom(createRoomDto)
    }

}
