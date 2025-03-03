'use client'
import React, {useEffect, useState} from 'react';
import { useRouter, useParams } from 'next/navigation';
import socket from '@/utils/socket';

const Room: React.FC = () => {
    const params = useParams();
    const { id } = params;
    const [messages, setMessages] = useState<string[]>([]);
    const [message, setMessage] = useState<string>("");

    useEffect(() => {
        console.log("connecting");
        socket.emit('join_room', { id });

        socket.on('message', (msg: string) => {
            setMessages((prev) => [...prev, msg]);
        });

        return () => {
            socket.off('message');
        };
    }, [id]);

    const sendMessage = (e) => {
        if (message) {
          socket.emit("send_message", { roomId: id, message });
          setMessage("");
        }
      };
      
      return (
        <div className="flex flex-col items-center justify-center space-y-6 p-4">
            <div className="flex flex-col items-center space-y-2">
            <div className="text-5xl font-bold">Room ID</div>
            <div className="text-3xl text-gray-600">{id}</div>
            </div>

            <div className="w-full max-w-md">
            {/* Messages */}
            <div className="flex flex-col space-y-2">
                {messages.map((msg, index) => (
                <div key={index} className="bg-gray-200 p-2 rounded">
                    {msg}
                </div>
                ))}
            </div>

            {/* Input field */}
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-4"
                placeholder="Type your message"
            />

            {/* Send button */}
            <button 
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 
                       focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mt-2"
                onClick={sendMessage}
            >
                Send a message
            </button>
            </div>
        </div>
    );
};


export default Room;