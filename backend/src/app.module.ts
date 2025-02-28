import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomModule } from './rooms/room.module';
import { ConfigModule } from "@nestjs/config";
import configurations from './configurations/database.config'
import { ConfigService } from "@nestjs/config";
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { GatewayModule } from './gateway/gateway.module';

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
    RoomModule,
    UsersModule,
    GatewayModule
  ],
  controllers: [AppController],
})
export class AppModule { }