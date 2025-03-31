'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaPhone, FaCalendarAlt, FaAnchor, FaShip } from 'react-icons/fa';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Theme styles
const theme = {
  colors: {
    primary: '#2563eb',
    secondary: '#1e40af',
    white: '#ffffff',
    text: '#1e293b',
    background: '#f0f4f8',
    error: '#dc2626',
    success: '#16a34a'
  },
  fonts: {
    arabic: "'Cairo', sans-serif"
  }
};

// Styled components
const ParticipationContainer = styled.div`
  max-width: 1000px;
  margin: 2rem auto;
  padding: 0 1rem;
  direction: rtl;
  font-family: ${theme.fonts.arabic};
`;

const ParticipationCard = styled(motion.div)`
  background: ${theme.colors.white};
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormSection = styled.div`
  padding: 2rem;
`;

const HeroSection = styled.div`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1.5rem;
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 1.8rem;
  color: ${theme.colors.primary};
  margin-bottom: 1.5rem;
  text-align: center;
`;

const InputGroup = styled.div`
  margin-bottom: 1.2rem;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${theme.colors.text};
  font-weight: 500;
  font-size: 0.95rem;
`;

const InputField = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s ease;
  font-family: ${theme.fonts.arabic};

  &:focus {
    border-color: ${theme.colors.primary};
    outline: none;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }
`;

const TextAreaField = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s ease;
  font-family: ${theme.fonts.arabic};
  min-height: 100px;
  resize: vertical;

  &:focus {
    border-color: ${theme.colors.primary};
    outline: none;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.9rem;
  background: ${theme.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 0.5rem;
  font-family: ${theme.fonts.arabic};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: ${theme.colors.secondary};
  }

  &:disabled {
    background: #94a3b8;
    cursor: not-allowed;
    opacity: 0.8;
  }
`;

const FloatingAnchor = styled(FaAnchor)`
  position: absolute;
  font-size: 6rem;
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
    50% { transform: translateY(-10px); }
  }
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255,255,255,.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

export default function ParticipationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    activityInterest: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error('الرجاء إدخال الاسم الكامل');
      return false;
    }

    if (!formData.phone.match(/^05\d{8}$/)) {
      toast.error('الرجاء إدخال رقم جوال صحيح (يبدأ بـ 05 ويتكون من 10 أرقام)');
      return false;
    }

    if (!formData.age || parseInt(formData.age) < 7 || parseInt(formData.age) > 60) {
      toast.error('الرجاء إدخال عمر بين 7 و 60 سنة');
      return false;
    }

    if (!formData.activityInterest.trim()) {
      toast.error('الرجاء تحديد النشاط الذي ترغب في المشاركة فيه');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Initialize EmailJS
      await emailjs.init('YOUR_EMAILJS_USER_ID');
      
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          participant_name: formData.name,
          participant_phone: formData.phone,
          participant_email: formData.email || 'لم يتم تقديمه',
          participant_age: formData.age,
          activity_interest: formData.activityInterest,
          participant_message: formData.message || 'لا يوجد',
          submission_date: new Date().toLocaleDateString('ar-SA'),
          submission_time: new Date().toLocaleTimeString('ar-SA')
        }
      );

      toast.success('تم إرسال طلب المشاركة بنجاح! سنتواصل معك خلال 48 ساعة');
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        age: '',
        activityInterest: '',
        message: ''
      });

    } catch (error) {
      console.error('Error sending participation request:', error);
      toast.error('حدث خطأ أثناء إرسال الطلب. الرجاء المحاولة مرة أخرى');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      <ParticipationContainer>
        <ParticipationCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FormSection>
            <Title>طلب مشاركة في أنشطة الفوج البحري</Title>
            
            <form onSubmit={handleSubmit}>
              <InputGroup>
                <InputLabel>الاسم الكامل *</InputLabel>
                <InputField
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="الاسم الثلاثي"
                />
              </InputGroup>

              <InputGroup>
                <InputLabel>رقم الجوال *</InputLabel>
                <InputField
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="05XXXXXXXX"
                />
              </InputGroup>

              <InputGroup>
                <InputLabel>البريد الإلكتروني</InputLabel>
                <InputField
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@example.com"
                />
              </InputGroup>

              <InputGroup>
                <InputLabel>العمر *</InputLabel>
                <InputField
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  min="7"
                  max="60"
                  placeholder="أدخل عمرك"
                />
              </InputGroup>

              <InputGroup>
                <InputLabel>النشاط المفضل *</InputLabel>
                <InputField
                  type="text"
                  name="activityInterest"
                  value={formData.activityInterest}
                  onChange={handleChange}
                  required
                  placeholder="مثال: التجديف، المعسكرات، etc."
                />
              </InputGroup>

              <InputGroup>
                <InputLabel>ملاحظات إضافية</InputLabel>
                <TextAreaField
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="أي معلومات إضافية تريد مشاركتها..."
                />
              </InputGroup>

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting && <LoadingSpinner />}
                {isSubmitting ? 'جاري إرسال الطلب...' : 'إرسال طلب المشاركة'}
              </SubmitButton>
            </form>
          </FormSection>

          <HeroSection>
            <FloatingAnchor />
            <FloatingAnchor />
            <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>انضم إلى مغامرتنا البحرية</h2>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6', fontSize: '0.95rem' }}>
              سجل طلبك الآن وسنتواصل معك لتأكيد مشاركتك في أنشطتنا القادمة
            </p>
            <FaShip style={{ fontSize: '3.5rem', opacity: '0.8', margin: '1.5rem 0' }} />
            <div style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
              <p>للاستفسارات:</p>
              <p style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>53505955</p>
            </div>
          </HeroSection>
        </ParticipationCard>
      </ParticipationContainer>
    </>
  );
}