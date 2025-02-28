import { io } from "socket.io-client";

const socket = io("http://localhost:81"); // Подключаемся к бекенду NestJS

export default socket;