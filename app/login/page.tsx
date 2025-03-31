'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaLock, FaAnchor, FaShip } from 'react-icons/fa';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Reuse your existing theme
const theme = {
  colors: {
    primary: '#2563eb',
    secondary: '#1e40af',
    white: '#ffffff',
    text: '#1e293b',
    background: '#f0f4f8',
    error: '#ef4444'
  },
  fonts: {
    arabic: "'Cairo', sans-serif"
  }
};

// Styled components (reused from register with some adjustments)
const LoginContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  direction: rtl;
  font-family: ${theme.fonts.arabic};
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const LoginCard = styled(motion.div)`
  background: ${theme.colors.white};
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormSection = styled.div`
  padding: 3rem;
`;

const HeroSection = styled.div`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${theme.colors.primary};
  margin-bottom: 2rem;
  text-align: center;
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${theme.colors.text};
  font-weight: 500;
`;

const InputField = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: ${theme.fonts.arabic};

  &:focus {
    border-color: ${theme.colors.primary};
    outline: none;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
  }
`;

const InputIcon = styled.div`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${theme.colors.primary};
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: ${theme.colors.primary};
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  font-family: ${theme.fonts.arabic};

  &:hover {
    background: ${theme.colors.secondary};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const RegisterLink = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  color: ${theme.colors.text};

  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ErrorMessage = styled.div`
  color: ${theme.colors.error};
  margin-top: 0.5rem;
  font-size: 0.9rem;
`;

const FloatingAnchor = styled(FaAnchor)`
  position: absolute;
  font-size: 10rem;
  opacity: 0.1;
  animation: float 6s ease-in-out infinite;

  &:nth-child(1) {
    top: 20%;
    left: 10%;
  }

  &:nth-child(2) {
    bottom: 15%;
    right: 10%;
    animation-delay: 2s;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
`;

const ForgotPasswordLink = styled.div`
  text-align: left;
  margin-top: 0.5rem;
  
  a {
    color: ${theme.colors.primary};
    font-size: 0.9rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Replace with actual authentication logic
      if (formData.email && formData.password) {
        router.push('/dashboard');
      } else {
        setError('الرجاء إدخال البريد الإلكتروني وكلمة المرور');
      }
    } catch (err) {
      setError('حدث خطأ أثناء تسجيل الدخول. الرجاء المحاولة مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <LoginCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FormSection>
          <Title>تسجيل الدخول</Title>
          <form onSubmit={handleSubmit}>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            
            <InputGroup>
              <InputLabel>البريد الإلكتروني</InputLabel>
              <InputIcon><FaUser /></InputIcon>
              <InputField
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="example@example.com"
              />
            </InputGroup>

            <InputGroup>
              <InputLabel>كلمة المرور</InputLabel>
              <InputIcon><FaLock /></InputIcon>
              <InputField
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="••••••••"
              />
              <ForgotPasswordLink>
                <Link href="/forgot-password">نسيت كلمة المرور؟</Link>
              </ForgotPasswordLink>
            </InputGroup>

            <SubmitButton type="submit" disabled={loading}>
              {loading ? 'جاري التحميل...' : 'تسجيل الدخول'}
            </SubmitButton>

            <RegisterLink>
              ليس لديك حساب؟ <Link href="/register">سجل الآن</Link>
            </RegisterLink>
          </form>
        </FormSection>

        <HeroSection>
          <FloatingAnchor />
          <FloatingAnchor />
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>مرحباً بعودتك!</h2>
          <p style={{ marginBottom: '2rem', lineHeight: '1.6' }}>
            سجل الدخول للوصول إلى حسابك في الفوج البحري بسيدي بوعلي ومتابعة أنشطتك البحرية
          </p>
          <FaShip style={{ fontSize: '5rem', opacity: '0.8', margin: '2rem 0' }} />
          <p style={{ fontSize: '0.9rem', opacity: '0.8' }}>
            جميع الحقوق محفوظة © الفوج البحري بسيدي بوعلي {new Date().getFullYear()}
          </p>
        </HeroSection>
      </LoginCard>
    </LoginContainer>
  );
}