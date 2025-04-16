'use client';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import { io, Socket } from 'socket.io-client';

interface Message {
  username: string;
  text: string;
  timestamp: string;
}

const theme = {
  colors: {
    primary: '#2563eb',
    background: '#f0f4f8',
    text: '#1e293b',
    glass: 'rgba(255, 255, 255, 0.15)',
  },
};

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

const InputField = styled.input`
  padding: 0.5rem;
  border: 1px solid ${theme.colors.primary};
  border-radius: 10px;
  margin-right: 0.5rem;
`;

const UsernameInput = styled(InputField)`
  flex: 1;
`;

const MessageInput = styled(InputField)`
  flex: 2;
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
    background: #1d4ed8;
  }
`;

const TypingIndicator = styled.div`
  font-style: italic;
  color: ${theme.colors.primary};
  margin: 0.5rem 0;
`;

const GroupChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [username, setUsername] = useState('');
  const [typing, setTyping] = useState(false);
  const [socket, setSocket] = useState<Socket | null>(null);
  const messageListRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    const newSocket = io(process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:3001');
    setSocket(newSocket);

    newSocket.on('message', (message: Message) => {
      setMessages((prev) => [...prev, message]);
      scrollToBottom();
    });

    newSocket.on('typing', () => {
      setTyping(true);
      const timer = setTimeout(() => setTyping(false), 1000);
      return () => clearTimeout(timer);
    });

    return () => {
      newSocket.disconnect();
    };
  }, [scrollToBottom]);

  const handleSendMessage = () => {
    if (inputValue.trim() && username.trim() && socket) {
      const message: Message = {
        username,
        text: inputValue,
        timestamp: new Date().toLocaleTimeString(),
      };
      socket.emit('sendMessage', message);
      setInputValue('');
    }
  };

  const handleTyping = useCallback(() => {
    if (username.trim() && socket) {
      socket.emit('typing', username);
    }
  }, [username, socket]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Container>
      <ChatTitle>دردشة المجموعة</ChatTitle>
      <MessageList ref={messageListRef}>
        {messages.map((message, index) => (
          <Message key={`${message.timestamp}-${index}`}>
            <strong>{message.username}:</strong> {message.text}{' '}
            <span style={{ fontSize: '0.8em', color: '#888' }}>({message.timestamp})</span>
          </Message>
        ))}
        {typing && <TypingIndicator>...يكتب أحدهم</TypingIndicator>}
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
            handleTyping();
          }}
          onKeyPress={handleKeyPress}
          placeholder="اكتب رسالتك هنا..."
        />
        <SendButton 
          onClick={handleSendMessage} 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaPaperPlane />
        </SendButton>
      </InputContainer>
    </Container>
  );
};

export default GroupChatPage;