import { GatewayMetadata, MessageBody, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Socket, Server } from "socket.io";


@WebSocketGateway(81, { transports: ['websocket'] })
export class RoomGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Server;

    @SubscribeMessage('create_room')
    handleConnection(client: Socket, @MessageBody() data: string = "undefined"): string | void{
        console.log('client connected');
    }
    handleDisconnect(client: Socket) {
        console.log('client disconnected');
    }
    @SubscribeMessage('join_room')
    handleJoinRoom(client: Socket, roomId: string) {
        console.log("AAAAAA")
        client.join(roomId);
        console.log(`Client ${client.id} joined room ${roomId}`);
      }
}