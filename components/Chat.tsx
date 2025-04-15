// components/Chat.tsx
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io(); // Connect to the Socket.IO server

const Chat = () => {
  const [messages, setMessages] = useState<{ user: string; text: string }[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Listen for incoming messages
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up the socket listener on component unmount
    return () => {
      socket.off('message');
    };
  }, []);

  const sendMessage = () => {
    if (newMessage.trim() && username.trim()) {
      const message = { user: username, text: newMessage }; // Include username
      socket.emit('sendMessage', message); // Emit the new message
      setNewMessage(''); // Clear the input field
    }
  };

  return (
    <div>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
      />
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;