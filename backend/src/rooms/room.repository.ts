import { EntityRepository, Repository } from 'typeorm'
import { Room } from './room.entity'
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RoomRepository {
    constructor(@InjectRepository(Room)
    private readonly roomRepo: Repository<Room>
    ){}

}