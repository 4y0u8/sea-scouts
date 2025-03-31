import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const RegistrationContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #2563eb;
  border-radius: 10px;
  background: #f0f4f8;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #2563eb;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: darken(#2563eb, 10%);
  }
`;

const RegistrationForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/register', { username, email, password });
      console.log(response.data);
      // Handle successful registration (e.g., redirect to login)
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <RegistrationContainer>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <Button type="submit">Register</Button>
      </form>
    </RegistrationContainer>
  );
};

export default RegistrationForm;