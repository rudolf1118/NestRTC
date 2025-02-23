import { CreateRoomDto } from './dto/create-room.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RoomService } from './room.service';

@Controller('rooms')
export class RoomController {
    constructor(private readonly roomService: RoomService){}

    @Post('create')
    async createRoom (@Body() createRoomDto: CreateRoomDto) {
        return this.roomService.createRoom(createRoomDto)
    }

    @Get(":id") 
    async getRoom(@Param("id") id: string) {
        return this.roomService.getRoomById(id)
    }
}
