import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomController } from './rooms/room.controller';
import { RoomService } from './rooms/room.service';
import { RoomModule } from './rooms/room.module';
import { ConfigModule } from "@nestjs/config";
import configurations from './configurations/database.config'
import { ConfigService } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurations]
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('USER_NAME'),
        password: configService.get('USER_PASSWORD'),
        database: configService.get('DATABASE'),
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService]
    }),
    RoomModule
  ],
  controllers: [RoomController, RoomController],
  providers: [RoomService],
})
export class AppModule { }
