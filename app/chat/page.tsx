'use client';
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import { io } from 'socket.io-client';

// Define the theme for consistent styling
const theme = {
  colors: {
    primary: '#2563eb',
    background: '#f0f4f8',
    text: '#1e293b',
    glass: 'rgba(255, 255, 255, 0.15)',
  },
};

// Container for the main content
const Container = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: ${theme.colors.background};
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const ChatTitle = styled.h1`
  text-align: center;
  color: ${theme.colors.primary};
`;

const MessageList = styled.div`
  max-height: 400px;
  overflow-y: auto;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid ${theme.colors.primary};
  border-radius: 10px;
  background: white;
`;

const Message = styled.div`
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 10px;
  background: ${theme.colors.glass};
  color: ${theme.colors.text};
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const UsernameInput = styled.input`
  padding: 0.5rem;
  border: 1px solid ${theme.colors.primary};
  border-radius: 10px;
  margin-right: 0.5rem;
  flex: 1;
`;

const MessageInput = styled.input`
  flex: 2;
  padding: 0.5rem;
  border: 1px solid ${theme.colors.primary};
  border-radius: 10px;
  margin-right: 0.5rem;
`;

const SendButton = styled(motion.button)`
  background: ${theme.colors.primary};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: darken(${theme.colors.primary}, 10%);
  }
`;

const TypingIndicator = styled.div`
  font-style: italic;
  color: ${theme.colors.primary};
  margin: 0.5rem 0;
`;

const GroupChatPage: React.FC = () => {
  const [messages, setMessages] = useState<{ username: string; text: string; timestamp: string }[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [username, setUsername] = useState('');
  const [typing, setTyping] = useState(false);
  const socket = io(); // Connect to the Socket.IO server
  const messageListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Listen for incoming messages
    socket.on('message', (message: { username: string; text: string; timestamp: string }) => {
      setMessages((prevMessages) => [...prevMessages, message]);
      scrollToBottom();
    });

    // Listen for typing indicator
    socket.on('typing', (username: string) => {
      setTyping(true);
      setTimeout(() => setTyping(false), 1000); // Hide typing indicator after 1 second
    });

    // Clean up the socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const handleSendMessage = () => {
    if (inputValue.trim() && username.trim()) {
      const timestamp = new Date().toLocaleTimeString(); // Get current time
      const message = { username, text: inputValue, timestamp };
      socket.emit('sendMessage', message); // Send message to the server
      setInputValue(''); // Clear the input field
    }
  };

  const handleTyping = () => {
    if (username.trim()) {
      socket.emit('typing', username); // Notify others that the user is typing
    }
  };

  const scrollToBottom = () => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  };

  return (
    <Container>
      <ChatTitle>دردشة المجموعة</ChatTitle>
      <MessageList ref={messageListRef}>
        {messages.map((message, index) => (
          <Message key={index}>
            <strong>{message.username}:</strong> {message.text} <span style={{ fontSize: '0.8em', color: '#888' }}>({message.timestamp})</span>
          </Message>
        ))}
        {typing && <TypingIndicator>Someone is typing...</TypingIndicator>}
      </MessageList>
      <InputContainer>
        <UsernameInput
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="اسم المستخدم"
        />
        <MessageInput
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            handleTyping(); // Trigger typing indicator
          }}
          placeholder="اكتب رسالتك هنا..."
        />
        <SendButton onClick={handleSendMessage} whileHover={{ scale: 1.05 }}>
          <FaPaperPlane />
        </SendButton>
      </InputContainer>
    </Container>
  );
};

export default GroupChatPage;