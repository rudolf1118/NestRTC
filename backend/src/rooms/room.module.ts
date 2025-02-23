import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { Room } from './room.entity';
import { UserService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Room]),
        UsersModule
    ],
    providers: [RoomService],
    controllers: [RoomController],
    exports: [RoomService]
})
export class RoomModule {}