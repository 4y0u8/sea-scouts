// app/api/socket.ts
import { Server } from 'socket.io';
import { NextApiRequest, NextApiResponse } from 'next';
import { Socket } from 'net';

// Extend the NextApiResponse type to include the socket property
interface NextApiResponseWithSocket extends NextApiResponse {
  socket: Socket & {
    server: {
      io?: Server; // Optional property for the Socket.IO server
    };
  };
}

export const socketHandler = (req: NextApiRequest, res: NextApiResponseWithSocket) => {
  // Ensure that res.socket.server is defined and is an instance of an HTTP server
  if (!res.socket.server.io) {
    // Cast res.socket.server to any to avoid type issues
    const io = new Server(res.socket.server as any); // Initialize Socket.IO server
    res.socket.server.io = io;

    io.on('connection', (socket) => {
      console.log('New socket connected');

      socket.on('sendMessage', (message) => {
        io.emit('message', message);
      });
    });
  }
  res.end();
};

// Default export for the API route
export default function handler(req: NextApiRequest, res: NextApiResponseWithSocket) {
  socketHandler(req, res);
}