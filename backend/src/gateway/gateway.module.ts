import { Module } from '@nestjs/common';
import { RoomGateway } from './room/room.gateway';

@Module({
  providers: [RoomGateway]
})
export class GatewayModule {}
