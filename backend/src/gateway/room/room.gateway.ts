import { GatewayMetadata, MessageBody, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Socket, Server } from "socket.io";

@WebSocketGateway(81, { transports: ['websocket'], cors: { 
    origin: "*",
    methods: ["GET", "POST"],} })
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
        client.join(roomId);
        console.log(`Client ${client.id} joined room ${roomId}`);
      }
    @SubscribeMessage('send_message')
    handleMessage(client: Socket, message:string) {
        console.log(message)
    }
}