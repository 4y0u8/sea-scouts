// app/auth/signin.tsx
"use client";
import { signIn } from 'next-auth/react';

import { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn('credentials', { email, password, redirect: false });
    if (result?.error) {
      alert('Login failed');
    } else {
      alert('Login successful');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;