import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomRepository } from './room.repository';

@Module({
    imports:[
        TypeOrmModule.forFeature([RoomRepository])
    ]
})
export class RoomModule {}
